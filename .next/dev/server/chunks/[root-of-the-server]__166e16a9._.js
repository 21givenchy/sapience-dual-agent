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
"[project]/app/api/conditions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.2_39b5f7bf9254f45631682e0d132e5fc2/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config.ts [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit') || '20');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateConfig"])();
        // Dynamic import to avoid bundling issues
        const { ForecastingAgent } = await __turbopack_context__.A("[project]/src/agents/forecasting-agent.ts [app-route] (ecmascript, async loader)");
        const agent = new ForecastingAgent({
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__166e16a9._.js.map