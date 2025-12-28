/**
 * Sapience Dual Agent - Forecasting + Trading
 */

import dotenv from "dotenv";
import { ForecastingAgent } from "./agents/forecasting-agent";
import { TradingAgent } from "./agents/trading-agent";
import { validateConfig, API_KEYS, ETHEREUM_CONFIG } from "./config";

dotenv.config();

async function main() {
  console.log("═══════════════════════════════════════════════════");
  console.log("🎯 SAPIENCE DUAL AGENT - Forecasting + Trading");
  console.log("═══════════════════════════════════════════════════\n");

  try {
    // Validate configuration
    validateConfig();

    const mode = process.env. AGENT_MODE || "both";
    const maxForecasts = parseInt(process.env.MAX_FORECASTS || "10");
    const maxTrades = parseInt(process.env.MAX_TRADES || "10");

    if (mode === "forecasting" || mode === "both") {
      console.log("📊 Starting Forecasting Agent...\n");
      const forecastingAgent = new ForecastingAgent({
        privateKey: ETHEREUM_CONFIG.PRIVATE_KEY,
        groqApiKey: API_KEYS.GROQ_API_KEY,
        domeApiKey: API_KEYS.DOME_API_KEY,
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
      const tradingAgent = new TradingAgent({
        privateKey: ETHEREUM_CONFIG.PRIVATE_KEY,
        arbitrumRpcUrl: ETHEREUM_CONFIG.ARBITRUM_RPC_URL,
        domeApiKey: API_KEYS.DOME_API_KEY,
      });

      await tradingAgent.run(maxTrades);
    }

    console.log("\n═══════════════════════════════════════════════════");
    console.log("✨ All agents completed successfully!");
    console.log("═══════════════════════════════════════════════════\n");
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
}

main();
