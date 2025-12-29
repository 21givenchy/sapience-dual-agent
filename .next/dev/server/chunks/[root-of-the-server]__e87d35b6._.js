module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuration for Sapience agents
 */ __turbopack_context__.s([
    "API_KEYS",
    ()=>API_KEYS,
    "ETHEREUM_CONFIG",
    ()=>ETHEREUM_CONFIG,
    "SAPIENCE_CONFIG",
    ()=>SAPIENCE_CONFIG,
    "validateConfig",
    ()=>validateConfig
]);
const SAPIENCE_CONFIG = {
    // API endpoints
    API_BASE_URL: "https://api.sapience.xyz",
    MARKETS_ENDPOINT: "/markets",
    FORECASTS_ENDPOINT: "/forecasts",
    LEADERBOARD_ENDPOINT: "/leaderboard",
    // Arbitrum network
    ARBITRUM_RPC_URL: process.env.ARBITRUM_RPC_URL || "https://arb1.arbitrum.io/rpc",
    CHAIN_ID: 42161,
    // Contracts
    USDE_TOKEN_ADDRESS: "0xFd4cb59b3B0F51a08CEa8fade0F7B13d51180fff",
    // Agent parameters
    FORECASTING: {
        MIN_CONFIDENCE: 0.70,
        MAX_MARKETS_PER_RUN: 50,
        REQUEST_DELAY_MS: 2000
    },
    TRADING: {
        MIN_CONFIDENCE: 0.65,
        MIN_EXPECTED_VALUE: 1.1,
        WAGER_AMOUNT: 1,
        MAX_TRADES_PER_RUN: 10,
        REQUEST_DELAY_MS: 2000
    },
    // Market filtering
    MIN_LIQUIDITY: 1000,
    MIN_DAYS_TO_RESOLUTION: 1,
    MAX_DAYS_TO_RESOLUTION: 365,
    // Agent parameters - Groq configuration
    GROQ_MODEL: process.env.AGENT_MODEL || 'moonshotai/kimi-k2-instruct-0905',
    GROQ_TEMPERATURE: parseFloat(process.env.AGENT_TEMPERATURE || '0.3'),
    GROQ_MAX_TOKENS: parseInt(process.env.AGENT_MAX_TOKENS || '200')
};
const API_KEYS = {
    ANTHROPIC: process.env.ANTHROPIC_API_KEY || "",
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
    SAPIENCE_API_KEY: process.env.SAPIENCE_API_KEY || "",
    GROQ_API_KEY: process.env.GROQ_API_KEY || "",
    DOME_API_KEY: process.env.DOME_API_KEY || ""
};
const ETHEREUM_CONFIG = {
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
    ARBITRUM_RPC_URL: process.env.ARBITRUM_RPC_URL || "https://arb1.arbitrum.io/rpc",
    CHAIN_ID: 42161
};
function validateConfig() {
    const config = {
        groqApiKey: process.env.GROQ_API_KEY || '',
        domeApiKey: process.env.DOME_API_KEY || '',
        anthropicApiKey: process.env.ANTHROPIC_API_KEY,
        agentModel: process.env.AGENT_MODEL || 'moonshotai/kimi-k2-instruct-0905',
        agentTemperature: parseFloat(process.env.AGENT_TEMPERATURE || '0.6'),
        agentMaxTokens: parseInt(process.env.AGENT_MAX_TOKENS || '4096'),
        port: parseInt(process.env.PORT || '3000'),
        host: process.env.HOST || 'localhost',
        nodeEnv: ("TURBOPACK compile-time value", "development") || 'development'
    };
    // Validate required keys
    if (!config.groqApiKey) {
        throw new Error('GROQ_API_KEY not set');
    }
    if (!process.env.PRIVATE_KEY) {
        throw new Error('PRIVATE_KEY not set - required for submitting forecasts to Arbitrum');
    }
    return config;
}
}),
"[project]/src/agents/forecasting-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ForecastingAgent",
    ()=>ForecastingAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dotenv$40$16$2e$6$2e$1$2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dotenv@16.6.1/node_modules/dotenv/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$groq$2d$sdk__$5b$external$5d$__$28$groq$2d$sdk$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$0$2e$8$2e$0$2f$node_modules$2f$groq$2d$sdk$29$__ = __turbopack_context__.i("[externals]/groq-sdk [external] (groq-sdk, esm_import, [project]/node_modules/.pnpm/groq-sdk@0.8.0/node_modules/groq-sdk)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$7$2e$4$2e$0_graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2d$request$2f$build$2f$entrypoints$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/graphql-request@7.4.0_graphql@16.12.0/node_modules/graphql-request/build/entrypoints/main.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$7$2e$4$2e$0_graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2d$request$2f$build$2f$legacy$2f$functions$2f$gql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/graphql-request@7.4.0_graphql@16.12.0/node_modules/graphql-request/build/legacy/functions/gql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$EQLOBUGZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-EQLOBUGZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$groq$2d$sdk__$5b$external$5d$__$28$groq$2d$sdk$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$0$2e$8$2e$0$2f$node_modules$2f$groq$2d$sdk$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$groq$2d$sdk__$5b$external$5d$__$28$groq$2d$sdk$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$0$2e$8$2e$0$2f$node_modules$2f$groq$2d$sdk$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
class ForecastingAgent {
    groq;
    privateKey;
    constructor(config){
        this.groq = new __TURBOPACK__imported__module__$5b$externals$5d2f$groq$2d$sdk__$5b$external$5d$__$28$groq$2d$sdk$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$0$2e$8$2e$0$2f$node_modules$2f$groq$2d$sdk$29$__["default"]({
            apiKey: config.groqApiKey
        });
        this.privateKey = config.privateKey.startsWith('0x') ? config.privateKey : `0x${config.privateKey}`;
    }
    async getConditions(limit = 20) {
        const nowSec = Math.floor(Date.now() / 1000);
        const query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$7$2e$4$2e$0_graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2d$request$2f$build$2f$legacy$2f$functions$2f$gql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gql"]`
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
        }
      }
    `;
        const { conditions } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$EQLOBUGZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["graphqlRequest"])(query, {
            nowSec,
            limit
        });
        console.log(`✅ Fetched ${conditions.length} active conditions`);
        return conditions;
    }
    async generateForecast(condition) {
        const question = condition.shortName || condition.question;
        console.log(`\n🤖 Forecasting: ${question.substring(0, 80)}...`);
        const response = await this.groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are a professional forecaster. Analyze prediction markets using:
1. Base-rate analysis (historical precedent)
2. Conditional probabilities 
3. Specific quantitative evidence
4. Market structure/liquidity analysis
5. Bayesian reasoning

Format: [probability]% | confidence:[0-100] | [reasoning with specific numbers and logic]`
                },
                {
                    role: 'user',
                    content: `Forecast this binary outcome (0-100%): "${question}"

Provide:
- Probability estimate (0-100)
- Confidence score (0-100) - how certain you are based on available evidence
- Base rates from similar historical events with specific percentages
- Key conditional factors with quantitative estimates
- Specific numerical justifications (e.g., "Historical rate: 23%, adjusted +15% for X factor")
- Market inefficiency analysis if applicable

Format: [probability]% | confidence:[score] | [reasoning]
Keep reasoning under 280 chars but be specific with numbers.`
                }
            ],
            model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SAPIENCE_CONFIG"].GROQ_MODEL,
            temperature: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SAPIENCE_CONFIG"].GROQ_TEMPERATURE,
            max_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SAPIENCE_CONFIG"].GROQ_MAX_TOKENS
        });
        const content = response.choices[0]?.message?.content?.trim() || '';
        // Extract probability
        const probMatch = content.match(/(\d{1,3})%/);
        const probability = probMatch ? Math.max(0, Math.min(100, parseInt(probMatch[1]))) : 50;
        // Extract confidence score
        const confMatch = content.match(/confidence:\s*(\d{1,3})/i);
        const confidence = confMatch ? Math.max(0, Math.min(100, parseInt(confMatch[1]))) : 50;
        // Extract reasoning (remove probability and confidence)
        const reasoning = content.replace(/^\d{1,3}%\s*\|?\s*/, '') // Remove leading "XX% |"
        .replace(/confidence:\s*\d{1,3}\s*\|?\s*/i, '') // Remove confidence score
        .trim().substring(0, 280); // Leave room for encoding
        console.log(`   Probability: ${probability}%`);
        console.log(`   Confidence: ${confidence}%`);
        console.log(`   Reasoning: ${reasoning}`);
        // Calculate edge (distance from 50% = strength of conviction)
        const edge = Math.abs(probability - 50);
        return {
            conditionId: condition.id,
            probability,
            confidence,
            edge,
            reasoning: reasoning || `Base rate ${probability}% from similar historical outcomes`
        };
    }
    async submitForecastToSapience(forecast) {
        console.log(`📤 Submitting ${forecast.probability}% → ${forecast.conditionId.slice(0, 10)}...`);
        try {
            // The SDK expects the condition to be submitted via submitTransaction
            // with the EAS contract directly
            const { submitTransaction } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/index.mjs [app-route] (ecmascript, async loader)");
            const { encodeAbiParameters, encodeFunctionData, parseAbiParameters } = await __turbopack_context__.A("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/index.js [app-route] (ecmascript, async loader)");
            // EAS contract address on Arbitrum
            const EAS_ADDRESS = '0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458';
            const SCHEMA_ID = '0x7df55bcec6eb3b17b25c503cc318a36d33b0a9bbc2d6bc0d9788f9bd61980d49';
            // Encode the attestation data
            const encodedData = encodeAbiParameters(parseAbiParameters('address resolver, bytes condition, uint256 forecast, string comment'), [
                '0x0000000000000000000000000000000000000000',
                forecast.conditionId,
                BigInt(forecast.probability) * BigInt(10 ** 18),
                forecast.reasoning
            ]);
            // Build EAS attest call
            const attestationData = encodeFunctionData({
                abi: [
                    {
                        name: 'attest',
                        type: 'function',
                        inputs: [
                            {
                                name: 'request',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'schema',
                                        type: 'bytes32'
                                    },
                                    {
                                        name: 'data',
                                        type: 'tuple',
                                        components: [
                                            {
                                                name: 'recipient',
                                                type: 'address'
                                            },
                                            {
                                                name: 'expirationTime',
                                                type: 'uint64'
                                            },
                                            {
                                                name: 'revocable',
                                                type: 'bool'
                                            },
                                            {
                                                name: 'refUID',
                                                type: 'bytes32'
                                            },
                                            {
                                                name: 'data',
                                                type: 'bytes'
                                            },
                                            {
                                                name: 'value',
                                                type: 'uint256'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        outputs: [
                            {
                                name: '',
                                type: 'bytes32'
                            }
                        ],
                        stateMutability: 'payable'
                    }
                ],
                functionName: 'attest',
                args: [
                    {
                        schema: SCHEMA_ID,
                        data: {
                            recipient: '0x0000000000000000000000000000000000000000',
                            expirationTime: 0n,
                            revocable: false,
                            refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
                            data: encodedData,
                            value: 0n
                        }
                    }
                ]
            });
            // Submit the transaction
            const { hash } = await submitTransaction({
                rpc: 'https://arb1.arbitrum.io/rpc',
                privateKey: this.privateKey,
                tx: {
                    to: EAS_ADDRESS,
                    data: attestationData,
                    value: '0'
                }
            });
            console.log(`✅ TX: https://arbiscan.io/tx/${hash}`);
            return hash;
        } catch (error) {
            console.error(`❌ Attestation failed: ${error.message}`);
            throw error;
        }
    }
    // ONE-SHOT: 5 forecasts max (your gas budget)
    async runOneShot() {
        console.log("🚀 ONE-SHOT MODE: 5 forecasts for leaderboard");
        const conditions = await this.getConditions(20);
        if (conditions.length === 0) throw new Error('No conditions');
        // Pick 5 random long-horizon conditions (better Brier scores)
        const longHorizon = conditions.filter((c)=>c.endTime > Date.now() / 1000 + 7 * 86400) // >7 days
        .sort(()=>Math.random() - 0.5).slice(0, 5);
        let success = 0;
        for (const condition of longHorizon){
            try {
                const forecast = await this.generateForecast(condition);
                await this.submitForecastToSapience(forecast);
                success++;
                // Gas-saving delay
                await new Promise((r)=>setTimeout(r, 5000));
            } catch (e) {
                console.error(`❌ Skip: ${e}`);
            }
        }
        console.log(`\n🎉 COMPLETE: ${success}/5 forecasts submitted`);
        console.log(`📊 Check: https://sapience.xyz/leaderboard#accuracy`);
    }
    /**
   * Main forecasting loop - generates forecasts and submits the most confident one
   */ async run(maxForecasts = 2) {
        console.log("🤖 Forecasting Agent Starting...");
        console.log(`📊 Strategy: Submit ${maxForecasts} forecasts (1 highest confidence + 1 highest edge)\n`);
        try {
            // Fetch active conditions
            const conditions = await this.getConditions(50);
            if (conditions.length === 0) {
                console.log('⚠️  No active conditions found');
                return;
            }
            console.log(`\n📈 Found ${conditions.length} active conditions`);
            // Generate forecasts for ALL conditions to find the best ones
            console.log('\n🔍 Evaluating all conditions...\n');
            const allForecasts = [];
            for (const condition of conditions){
                try {
                    const forecast = await this.generateForecast(condition);
                    allForecasts.push(forecast);
                    // Rate limiting between API calls
                    await new Promise((resolve)=>setTimeout(resolve, 1500));
                } catch (error) {
                    console.error(`  ⚠️  Skipped condition: ${error}`);
                    continue;
                }
            }
            if (allForecasts.length === 0) {
                console.log('❌ No forecasts generated');
                return;
            }
            // Strategy: Pick 1 highest confidence + 1 highest edge (different forecasts)
            const byConfidence = [
                ...allForecasts
            ].sort((a, b)=>b.confidence - a.confidence);
            const byEdge = [
                ...allForecasts
            ].sort((a, b)=>b.edge - a.edge);
            const selectedForecasts = [];
            // Add highest confidence forecast
            if (byConfidence.length > 0) {
                selectedForecasts.push(byConfidence[0]);
            }
            // Add highest edge forecast (if different from highest confidence)
            if (byEdge.length > 0 && byEdge[0].conditionId !== byConfidence[0]?.conditionId) {
                selectedForecasts.push(byEdge[0]);
            } else if (byConfidence.length > 1) {
                // If same forecast, add second highest confidence
                selectedForecasts.push(byConfidence[1]);
            }
            // Limit to maxForecasts
            const finalForecasts = selectedForecasts.slice(0, maxForecasts);
            console.log(`\n📊 Generated ${allForecasts.length} forecasts`);
            console.log(`\n🎯 Selected ${finalForecasts.length} for submission:`);
            finalForecasts.forEach((f, i)=>{
                const question = conditions.find((c)=>c.id === f.conditionId)?.shortName || 'Unknown';
                console.log(`   ${i + 1}. ${question.substring(0, 50)}`);
                console.log(`      Probability: ${f.probability}% | Confidence: ${f.confidence}% | Edge: ${f.edge.toFixed(1)}%`);
            });
            console.log(`\n📤 Submitting ${finalForecasts.length} forecast(s)...\n`);
            let successCount = 0;
            let failCount = 0;
            let totalGasCost = 0;
            for (const forecast of finalForecasts){
                try {
                    const question = conditions.find((c)=>c.id === forecast.conditionId)?.shortName || 'Unknown';
                    console.log(`\n🎯 ${question.substring(0, 60)}`);
                    console.log(`   ${forecast.probability}% (confidence: ${forecast.confidence}%, edge: ${forecast.edge.toFixed(1)}%)`);
                    await this.submitForecastToSapience(forecast);
                    successCount++;
                    totalGasCost += 0.0015; // Approximate gas cost per tx
                    // Rate limiting between transactions
                    await new Promise((resolve)=>setTimeout(resolve, 3000));
                } catch (error) {
                    console.error(`  ❌ Submission failed: ${error}`);
                    failCount++;
                    continue;
                }
            }
            console.log(`\n✨ Forecasting complete!`);
            console.log(`  📊 Successful: ${successCount}/${finalForecasts.length}`);
            if (failCount > 0) {
                console.log(`  ❌ Failed: ${failCount}/${finalForecasts.length}`);
            }
            console.log(`  ⛽ Estimated gas cost: ~$${(totalGasCost * 3000).toFixed(2)} (at $3000/ETH)`);
            console.log(`  📍 View results: https://sapience.xyz/leaderboard#accuracy`);
        } catch (error) {
            console.error("Fatal error:", error);
            throw error;
        }
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/conditions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.2_39b5f7bf9254f45631682e0d132e5fc2/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$agents$2f$forecasting$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/agents/forecasting-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$agents$2f$forecasting$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$agents$2f$forecasting$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit') || '20');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateConfig"])();
        const agent = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$agents$2f$forecasting$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ForecastingAgent"]({
            privateKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ETHEREUM_CONFIG"].PRIVATE_KEY,
            groqApiKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_KEYS"].GROQ_API_KEY
        });
        const conditions = await agent.getConditions(limit);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            conditions,
            count: conditions.length
        });
    } catch (error) {
        console.error('Error fetching conditions:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e87d35b6._.js.map