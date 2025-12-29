"use strict";
/**
 * Sapience Dual Agent - Forecasting + Trading
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const forecasting_agent_1 = require("./agents/forecasting-agent");
const trading_agent_1 = require("./agents/trading-agent");
const config_1 = require("./config");
dotenv_1.default.config();
async function main() {
    console.log("═══════════════════════════════════════════════════");
    console.log("🎯 SAPIENCE DUAL AGENT - Forecasting + Trading");
    console.log("═══════════════════════════════════════════════════\n");
    try {
        // Validate configuration
        (0, config_1.validateConfig)();
        const mode = process.env.AGENT_MODE || "both";
        const maxForecasts = parseInt(process.env.MAX_FORECASTS || "10");
        const maxTrades = parseInt(process.env.MAX_TRADES || "10");
        if (mode === "forecasting" || mode === "both") {
            console.log("📊 Starting Forecasting Agent...\n");
            const forecastingAgent = new forecasting_agent_1.ForecastingAgent({
                privateKey: config_1.ETHEREUM_CONFIG.PRIVATE_KEY,
                groqApiKey: config_1.API_KEYS.GROQ_API_KEY,
            });
            await forecastingAgent.run(maxForecasts);
            if (mode === "forecasting") {
                return; // Exit after forecasting
            }
            console.log("\n═══════════════════════════════════════════════════\n");
            console.log("Forecasting complete.  Starting Trading Agent...\n");
            // Add delay between agents
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        if (mode === "trading" || mode === "both") {
            console.log("💰 Starting Trading Agent...\n");
            const tradingAgent = new trading_agent_1.TradingAgent({
                privateKey: config_1.ETHEREUM_CONFIG.PRIVATE_KEY,
                groqApiKey: config_1.API_KEYS.GROQ_API_KEY,
                arbitrumRpcUrl: config_1.ETHEREUM_CONFIG.ARBITRUM_RPC_URL,
            });
            await tradingAgent.run(maxTrades);
        }
        console.log("\n═══════════════════════════════════════════════════");
        console.log("✨ All agents completed successfully!");
        console.log("═══════════════════════════════════════════════════\n");
    }
    catch (error) {
        console.error("Fatal error:", error);
        process.exit(1);
    }
}
main();
//# sourceMappingURL=index.js.map