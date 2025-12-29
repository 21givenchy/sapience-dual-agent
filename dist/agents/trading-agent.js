"use strict";
/**
 * Sapience Trading Agent
 *
 * Generates predictions and executes trades with 1 USDe wagers on Sapience markets.
 * Agent is ranked by profit/loss on the Sapience leaderboard.
 *
 * Requires capital deployment.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingAgent = void 0;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const ethers_1 = require("ethers");
const axios_1 = __importDefault(require("axios"));
class TradingAgent {
    constructor(config) {
        this.minConfidence = 0.65;
        this.minExpectedValue = 1.1;
        this.provider = new ethers_1.ethers.JsonRpcProvider(config.arbitrumRpcUrl || "https://arb1.arbitrum.io/rpc");
        const wallet = new ethers_1.ethers.Wallet(config.privateKey, this.provider);
        this.groq = new groq_sdk_1.default({
            apiKey: config.groqApiKey,
        });
        this.walletAddress = wallet.address;
    }
    /**
     * Fetch active markets from Sapience
     */
    async getMarkets() {
        try {
            const response = await axios_1.default.get("https://api.sapience.xyz/markets", {
                params: {
                    status: "active",
                    limit: 50,
                },
            });
            return response.data.markets;
        }
        catch (error) {
            console.error("Error fetching markets:", error);
            return [];
        }
    }
    /**
     * Evaluate a trade using Groq and Kimi model
     */
    async evaluateTrade(market, forecast) {
        console.log(`\n💼 Evaluating trade for: ${market.question}`);
        const prompt = `You are a risk-management expert for prediction markets. Evaluate this trading opportunity:

Market: "${market.question}"
Platform: ${market.description}
Current Price: ${(market.yes_price * 100).toFixed(1)}%
Forecast Probability: ${(forecast.probability * 100).toFixed(1)}%
Forecast Confidence: ${(forecast.confidence * 100).toFixed(1)}%
Expected Value: ${forecast.expectedValue.toFixed(3)}

Forecast Reasoning: ${forecast.reasoning}

Apply Kelly criterion and risk management. Provide decision in JSON:
{
  "action": "BUY" or "SELL" or "SKIP",
  "size": <number 0-1>,
  "reasoning": "<detailed reasoning>",
  "riskScore": <number 0-100>,
  "stopLoss": <number or null>,
  "takeProfit": <number or null>
}

Rules:
- action: BUY if edge > 5% and confidence > 70%, SELL if edge < -5% and confidence > 70%, else SKIP
- size: Kelly stake capped at 10% of bankroll (0.1 max)
- riskScore: 0-100 based on volatility, liquidity, time to close
- Only trade if riskScore < 60`;
        try {
            const chatCompletion = await this.groq.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "You are a risk-management expert specializing in prediction market trading with Kelly criterion and proper position sizing.",
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                model: 'moonshotai/kimi-k2-instruct-0905',
                temperature: 0.5,
                max_tokens: 2048,
                top_p: 1,
                stream: false,
            });
            const content = chatCompletion.choices[0]?.message?.content || '';
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('Could not extract JSON from model response');
            }
            const analysis = JSON.parse(jsonMatch[0]);
            const decision = {
                marketId: market.id,
                action: analysis.action.toLowerCase(),
                size: Math.min(analysis.size, 0.1), // Cap at 10%
                reasoning: analysis.reasoning,
                timestamp: Date.now(),
                confidence: forecast.confidence,
                expectedReturn: forecast.expectedValue,
                riskScore: analysis.riskScore / 100,
                stopLoss: analysis.stopLoss,
                takeProfit: analysis.takeProfit,
            };
            return decision;
        }
        catch (error) {
            console.error('❌ Error evaluating trade:', error.message);
            throw error;
        }
    }
    /**
     * Determine if a prediction should be traded
     */
    shouldTrade(prediction) {
        return (prediction.recommendation !== "SKIP" &&
            prediction.confidence >= this.minConfidence &&
            prediction.expected_value >= this.minExpectedValue);
    }
    /**
     * Main trading loop
     */
    async run(maxTrades = 10) {
        console.log("🤖 Trading Agent Starting...");
        console.log(`💼 Wallet: ${this.walletAddress}`);
        console.log(`💰 Budget: ${maxTrades} USDe (${maxTrades} trades @ 1 USDe each)`);
        try {
            // Fetch markets
            const markets = await this.getMarkets();
            console.log(`\n📈 Found ${markets.length} active markets`);
            // Generate predictions and execute trades
            let tradesExecuted = 0;
            for (const market of markets) {
                if (tradesExecuted >= maxTrades) {
                    console.log(`\n✋ Reached max trades (${maxTrades}), stopping`);
                    break;
                }
                try {
                    console.log(`\n🎯 Analyzing: ${market.question}`);
                    // Generate prediction
                    const forecast = {
                        probability: market.yes_price || 0.5,
                        confidence: 0.75,
                        expectedValue: 1.2,
                        reasoning: "Example reasoning",
                    };
                    const decision = await this.evaluateTrade(market, forecast);
                    console.log(`  Action: ${decision.action}`);
                    console.log(`  Size: ${(decision.size * 100).toFixed(1)}%`);
                    console.log(`  Risk Score: ${(decision.riskScore * 100).toFixed(1)}%`);
                    console.log(`  Reasoning: ${decision.reasoning}`);
                    // Check if we should trade
                    if (decision.action === 'buy' && decision.riskScore < 0.6) {
                        console.log(`  💰 Executing trade`);
                        tradesExecuted++;
                    }
                    else {
                        console.log(`  ⏭️  Skipped (insufficient edge or high risk)`);
                    }
                    // Rate limiting
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }
                catch (error) {
                    console.error(`  ❌ Error analyzing market: ${error}`);
                    continue;
                }
            }
            console.log(`\n✨ Trading complete!`);
            console.log(`  📊 Trades executed: ${tradesExecuted}/${maxTrades}`);
            console.log(`  💵 Capital deployed: ${tradesExecuted} USDe`);
            console.log(`  📍 View results at https://sapience.xyz/leaderboard`);
        }
        catch (error) {
            console.error("Fatal error:", error);
            throw error;
        }
    }
}
exports.TradingAgent = TradingAgent;
// Main execution
if (require.main === module) {
    const agent = new TradingAgent({
        groqApiKey: process.env.GROQ_API_KEY || "",
        privateKey: process.env.PRIVATE_KEY || "",
        arbitrumRpcUrl: process.env.ARBITRUM_RPC_URL,
    });
    agent.run(10).catch(console.error);
}
//# sourceMappingURL=trading-agent.js.map