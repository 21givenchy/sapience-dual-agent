/**
 * Sapience Forecasting Agent
 * 
 * Generates predictions and publishes forecasts to the Ethereum Attestation Service (EAS)
 * on Arbitrum. Predictions are ranked by accuracy on the Sapience leaderboard.
 * 
 * No trading capital required - pure forecasting. 
 */

import { Anthropic } from "@anthropic-ai/sdk";
import { ethers } from "ethers";
import axios from "axios";

interface Market {
  id: string;
  question: string;
  description: string;
  resolution_date: string;
  yes_price: number;
  no_price: number;
  liquidity:  number;
}

interface Forecast {
  market_id: string;
  probability: number;
  confidence: number;
  reasoning: string;
  timestamp: Date;
}

interface EASAttestation {
  uid: string;
  schema_uid: string;
  transaction_hash: string;
  block_number: number;
}

export class ForecastingAgent {
  private anthropic: Anthropic;
  private provider: ethers.JsonRpcProvider;
  private signer: ethers.Signer;
  private easContractAddress: string;
  private easSchemaUID: string;
  private walletAddress: string;

  constructor(
    privateKey: string,
    arbitrumRpcUrl: string = "https://arb1.arbitrum.io/rpc",
    easSchemaUID: string = "0x..." // Will be set during setup
  ) {
    this.anthropic = new Anthropic();
    this.provider = new ethers.JsonRpcProvider(arbitrumRpcUrl);
    this.signer = new ethers.Wallet(privateKey, this.provider);
    this.walletAddress = ethers.getAddress(
      ethers.computeAddress(new ethers.SigningKey(privateKey).publicKey)
    );
    this.easSchemaUID = easSchemaUID;
    this.easContractAddress = "0xA1207F3BBa224E02c159c0dFpF493b4e5C10e6B9"; // EAS on Arbitrum
  }

  /**
   * Fetch active markets from Sapience
   */
  async getMarkets(): Promise<Market[]> {
    try {
      const response = await axios.get("https://api.sapience.xyz/markets", {
        params: {
          status: "active",
          limit:  50,
        },
      });

      return response.data.markets;
    } catch (error) {
      console.error("Error fetching markets:", error);
      return [];
    }
  }

  /**
   * Generate a forecast using Claude
   * 
   * Claude analyzes market data and generates probability estimate + reasoning
   */
  async generateForecast(market: Market): Promise<Forecast> {
    const prompt = `
You are a forecasting expert analyzing prediction markets. 

Market: "${market.question}"
Description: ${market.description}
Resolution Date: ${market.resolution_date}
Current YES Price: ${market.yes_price}
Current NO Price: ${market.no_price}
Liquidity: ${market.liquidity}

Based on this information, provide: 
1. Your probability estimate (0-100) for YES outcome
2. Your confidence level (0-100)
3. Brief reasoning for your forecast

Respond in JSON format:
{
  "probability": <number>,
  "confidence": <number>,
  "reasoning": "<string>"
}
    `;

    const response = await this.anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens:  500,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    try {
      const content = response.content[0];
      if (content.type !== "text") {
        throw new Error("Unexpected response type");
      }

      // Parse JSON from Claude's response
      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("Could not extract JSON from response");
      }

      const forecast = JSON.parse(jsonMatch[0]);

      return {
        market_id: market.id,
        probability: forecast.probability / 100, // Convert to 0-1
        confidence: forecast.confidence / 100,
        reasoning: forecast. reasoning,
        timestamp: new Date(),
      };
    } catch (error) {
      console.error("Error parsing forecast:", error);
      throw error;
    }
  }

  /**
   * Attest forecast onchain via EAS
   */
  async attestForecast(forecast: Forecast): Promise<EASAttestation> {
    try {
      // Import EAS SDK (lite version - would use full SDK in production)
      const easABI = [
        "function attest(tuple(bytes32 schema, tuple(address recipient, uint64 expirationTime, bool revocable, bytes32 refUID, bytes data) data)) external payable returns (bytes32)",
      ];

      const easContract = new ethers.Contract(
        this.easContractAddress,
        easABI,
        this.signer
      );

      // Encode attestation data
      const abiCoder = ethers.AbiCoder.defaultAbiCoder();
      const encodedData = abiCoder.encode(
        [
          "string", // marketId
          "uint256", // probability (0-10000 for precision)
          "uint256", // confidence
          "string", // reasoning
          "uint64", // timestamp
        ],
        [
          forecast.market_id,
          Math.round(forecast.probability * 10000),
          Math.round(forecast.confidence * 10000),
          forecast.reasoning,
          Math.floor(forecast.timestamp.getTime() / 1000),
        ]
      );

      // Create attestation
      const tx = await easContract.attest({
        schema: this.easSchemaUID,
        data: {
          recipient: this.walletAddress,
          expirationTime: 0, // No expiration
          revocable:  true,
          refUID: 
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          data: encodedData,
        },
      });

      // Wait for confirmation
      const receipt = await tx. wait();

      // Extract attestation UID from logs
      // (In production, would properly parse events)
      const attestationUID = receipt.logs[0]?. topics? .[1] || "0x";

      return {
        uid:  attestationUID,
        schema_uid: this.easSchemaUID,
        transaction_hash: receipt.hash,
        block_number: receipt.blockNumber,
      };
    } catch (error) {
      console.error("Error attesting forecast:", error);
      throw error;
    }
  }

  /**
   * Main forecasting loop
   */
  async run(maxForecasts: number = 10): Promise<void> {
    console.log("🤖 Forecasting Agent Starting...");
    console.log(`📊 Wallet: ${this.walletAddress}`);
    console.log(`🏗️  Schema: ${this.easSchemaUID}`);

    try {
      // Fetch markets
      const markets = await this.getMarkets();
      console.log(`\n📈 Found ${markets. length} active markets`);

      // Generate forecasts for top markets
      const selectedMarkets = markets.slice(0, maxForecasts);

      for (const market of selectedMarkets) {
        try {
          console.log(`\n🎯 Forecasting:  ${market.question}`);

          // Generate forecast
          const forecast = await this.generateForecast(market);
          console.log(`  Probability: ${(forecast.probability * 100).toFixed(1)}%`);
          console.log(`  Confidence: ${(forecast.confidence * 100).toFixed(1)}%`);
          console.log(`  Reasoning: ${forecast.reasoning}`);

          // Attest onchain
          console.log(`  📝 Attesting onchain...`);
          const attestation = await this.attestForecast(forecast);
          console. log(`  ✅ Attestation UID: ${attestation.uid}`);
          console.log(`  📍 Tx Hash: ${attestation.transaction_hash}`);

          // Small delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
          console.error(`  ❌ Error forecasting market:  ${error}`);
          continue;
        }
      }

      console.log(`\n✨ Forecasting complete! View results at https://sapience.xyz/forecasts`);
    } catch (error) {
      console.error("Fatal error:", error);
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const agent = new ForecastingAgent(
    process.env.PRIVATE_KEY || "",
    process.env.ARBITRUM_RPC_URL,
    process.env.EAS_SCHEMA_UID
  );

  agent.run(10).catch(console.error);
}
