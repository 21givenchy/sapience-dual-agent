/**
 * Sapience Dual Agent - Forecasting + Trading
 */

import dotenv from "dotenv";
import { ForecastingAgent } from "./agents/forecasting-agent";
import { TradingAgent } from "./agents/trading-agent";
import { validateConfig, API_KEYS } from "./config";

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
      console.log("📊 Starting Forecasting Agent.. .\n");
      const forecastingAgent = new ForecastingAgent(
        API_KEYS. PRIVATE_KEY,
        process.env.ARBITRUM_RPC_URL,
        process. env.EAS_SCHEMA_UID
      );

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
      const tradingAgent = new TradingAgent(
        API_KEYS.PRIVATE_KEY,
        process.env. ARBITRUM_RPC_URL
      );

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
