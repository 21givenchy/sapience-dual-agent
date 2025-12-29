"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastingAgent = void 0;
require("dotenv/config");
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("@sapience/sdk");
const CHAIN_ID_ARBITRUM = 42161;
class ForecastingAgent {
    constructor(config) {
        this.chainId = CHAIN_ID_ARBITRUM;
        this.groq = new groq_sdk_1.default({ apiKey: config.groqApiKey });
        this.privateKey = config.privateKey.startsWith('0x') ? config.privateKey : `0x${config.privateKey}`;
    }
    async getConditions(limit = 20) {
        const nowSec = Math.floor(Date.now() / 1000);
        const query = (0, graphql_request_1.gql) `
      query Conditions($nowSec: Int, $limit: Int) {
        conditions(
          where: { 
            public: { equals: true }
            endTime: { gt: $nowSec }
          }
          take: $limit
        ) {
          id
          question
          shortName
          endTime
          description
        }
      }
    `;
        const { conditions } = await (0, sdk_1.graphqlRequest)(query, {
            nowSec,
            limit,
        });
        console.log(`✅ Fetched ${conditions.length} active conditions`);
        return conditions;
    }
    async generateForecast(condition) {
        const question = condition.shortName || condition.question;
        console.log(`\n🤖 Forecasting: ${question.substring(0, 80)}...`);
        const response = await this.groq.chat.completions.create({
            messages: [{
                    role: 'user',
                    content: `Estimate probability (0-100) this question resolves YES: "${question}"
Context: ${condition.description || ''}

Output ONLY: probability number (75) then brief reasoning (<140 chars)`
                }],
            model: 'moonshotai/kimi-k2-instruct-0905',
            temperature: 0.3, // Lower for consistency
            max_tokens: 150,
        });
        const content = response.choices[0]?.message?.content?.trim() || '';
        // Extract probability (first number found)
        const probMatch = content.match(/(\d{1,3})/);
        const probability = probMatch ? Math.max(0, Math.min(100, parseInt(probMatch[1]))) : 50;
        // Reasoning = rest of content
        const reasoning = content.replace(/\d{1,3}/g, '').trim().substring(0, 140);
        return {
            conditionId: condition.id,
            probability,
            reasoning: reasoning || 'Model-based statistical forecast',
        };
    }
    async submitForecastToSapience(forecast) {
        console.log(`📤 Submitting ${forecast.probability}% → ${forecast.conditionId.slice(0, 10)}...`);
        const { hash } = await (0, sdk_1.submitForecast)({
            conditionId: forecast.conditionId,
            probability: forecast.probability,
            comment: forecast.reasoning,
            privateKey: this.privateKey,
        });
        console.log(`✅ TX: https://arbiscan.io/tx/${hash}`);
        return hash;
    }
    // ONE-SHOT: 5 forecasts max (your gas budget)
    async runOneShot() {
        console.log("🚀 ONE-SHOT MODE: 5 forecasts for leaderboard");
        const conditions = await this.getConditions(20);
        if (conditions.length === 0)
            throw new Error('No conditions');
        // Pick 5 random long-horizon conditions (better Brier scores)
        const longHorizon = conditions
            .filter(c => c.endTime > Date.now() / 1000 + 7 * 86400) // >7 days
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
        let success = 0;
        for (const condition of longHorizon) {
            try {
                const forecast = await this.generateForecast(condition);
                await this.submitForecastToSapience(forecast);
                success++;
                // Gas-saving delay
                await new Promise(r => setTimeout(r, 5000));
            }
            catch (e) {
                console.error(`❌ Skip: ${e}`);
            }
        }
        console.log(`\n🎉 COMPLETE: ${success}/5 forecasts submitted`);
        console.log(`📊 Check: https://sapience.xyz/leaderboard#accuracy`);
    }
}
exports.ForecastingAgent = ForecastingAgent;
// RUN IT
if (require.main === module) {
    const config = {
        privateKey: process.env.PRIVATE_KEY,
        groqApiKey: process.env.GROQ_API_KEY,
    };
    if (!config.privateKey || !config.groqApiKey) {
        console.error('❌ Set PRIVATE_KEY and GROQ_API_KEY in .env');
        process.exit(1);
    }
    new ForecastingAgent(config).runOneShot().catch(console.error);
}
//# sourceMappingURL=forecasting-agent.js.map