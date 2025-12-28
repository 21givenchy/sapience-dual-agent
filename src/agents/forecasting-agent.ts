/**
 * Sapience Forecasting Agent
 * 
 * Generates predictions and publishes forecasts via Sapience SDK
 * on Arbitrum. Predictions are ranked by accuracy on the Sapience leaderboard.
 * 
 * No trading capital required - pure forecasting. 
 */

import Groq from 'groq-sdk';
import { postForecastAttestation, graphqlRequest } from '@sapience/sdk';
import { gql } from 'graphql-request';
import { DomeAPIClient } from '../utils/dome-client';

interface Condition {
  id: string;
  question: string;
  shortName?: string;
  description?: string;
  endTime: number;
  public: boolean;
}

interface Forecast {
  marketId: string;
  probability: number;
  confidence: number;
  reasoning: string;
  expectedValue?: number;
  recommendation?: string;
  timestamp: number;
  modelUsed?: string;
}

interface SubmissionResult {
  hash: string;
  conditionId: string;
}

interface Config {
  privateKey: string;
  groqApiKey: string;
  domeApiKey?: string;
  domeApiUrl?: string;
}

export class ForecastingAgent {
  private groq: Groq;
  private privateKey: string;
  private domeClient?: DomeAPIClient;

  constructor(config: Config) {
    this.privateKey = config.privateKey;
    this.groq = new Groq({
      apiKey: config.groqApiKey,
    });
    
    if (config.domeApiKey) {
      this.domeClient = new DomeAPIClient(
        config.domeApiKey,
        config.domeApiUrl
      );
      console.log('📊 Dome API client initialized');
    }
  }

  /**
   * Fetch active conditions from Sapience API
   */
  async getConditions(): Promise<Condition[]> {
    try {
      const nowSec = Math.floor(Date.now() / 1000);
      const query = gql`
        query Conditions($nowSec: Int) {
          conditions(
            where: { 
              public: { equals: true }
              endTime: { gt: $nowSec }
            }
            take: 50
          ) {
            id
            question
            shortName
            description
            endTime
            public
          }
        }
      `;
      
      const { conditions } = await graphqlRequest<{ conditions: Condition[] }>(query, {
        nowSec,
      });

      return conditions || [];
    } catch (error) {
      console.error("Error fetching conditions:", error);
      return [];
    }
  }

  /**
   * Generate a forecast using Groq with Kimi model
   */
  async generateForecast(condition: Condition): Promise<Forecast> {
    console.log(`\n🤖 Generating forecast for: ${condition.shortName || condition.question}`);

    const question = condition.shortName || condition.question;
    const endDate = new Date(condition.endTime * 1000).toISOString();

    let domeMarketData = '';
    if (this.domeClient) {
      try {
        const sentiment = await this.domeClient.getMarketSentiment(question);
        if (sentiment.markets.length > 0) {
          console.log(`  📊 Found ${sentiment.markets.length} similar markets on ${sentiment.platforms} platform(s)`);
          domeMarketData = `\n\nRelated Market Data from Polymarket/Kalshi:\n`;
          sentiment.markets.forEach(m => {
            domeMarketData += `- ${m.platform.toUpperCase()}: "${m.question}" - YES: ${(m.yesPrice * 100).toFixed(1)}%, Volume: $${m.volume24h.toLocaleString()}\n`;
          });
          domeMarketData += `\nAverage YES price across platforms: ${(sentiment.avgYesPrice * 100).toFixed(1)}%\nTotal 24h volume: $${sentiment.avgVolume.toLocaleString()}`;
        }
      } catch (error) {
        console.log(`  ⚠️ Could not fetch Dome data`);
      }
    }

    const systemContext = `You are an expert prediction market analyst who uses statistical methods and market microstructure analysis to forecast outcomes. You analyze pricing across multiple platforms to detect inefficiencies.`;

    const userPrompt = `Analyze this prediction market and provide a statistical forecast:

Question: "${question}"
End Date: ${endDate}
${condition.description ? `Description: ${condition.description}` : ''}${domeMarketData}

Using your statistical forecasting methodology and considering the market prices from other platforms (if available), analyze this question and provide your best probability estimate. Provide your analysis in JSON format:
{
  "probability": <number 0-100>,
  "confidence": <number 0-100>,
  "reasoning": "<brief reasoning in 1-2 sentences, under 160 characters, no URLs>",
  "expectedValue": <number>,
  "recommendation": "BUY" or "SELL" or "HOLD"
}

Rules:
- probability: Your calibrated probability estimate (0-100)
- confidence: How confident you are in your estimate (0-100)
- reasoning: Keep it brief and factual, under 160 characters
- expectedValue: Expected value considering uncertainty
- recommendation: BUY if edge > 5%, SELL if edge < -5%, HOLD if fairly priced
- Only recommend BUY/SELL if confidence > 65%`;

    try {
      const chatCompletion = await this.groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemContext,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        model: 'llama-3.3-70b-versatile',
        temperature: 0.6,
        max_tokens: 1024,
      });

      const content = chatCompletion.choices[0]?.message?.content || '';
      
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Could not extract JSON from model response');
      }

      const analysis = JSON.parse(jsonMatch[0]);

      const forecast: Forecast = {
        marketId: condition.id,
        probability: analysis.probability / 100,
        confidence: analysis.confidence / 100,
        reasoning: analysis.reasoning,
        expectedValue: analysis.expectedValue || 0,
        recommendation: analysis.recommendation === 'BUY' ? 'buy' : analysis.recommendation === 'SELL' ? 'sell' : 'hold',
        timestamp: Date.now(),
        modelUsed: 'llama-3.3-70b-versatile',
      };

      return forecast;
    } catch (error: any) {
      console.error('❌ Error generating forecast:', error.message);
      throw error;
    }
  }

  /**
   * Submit forecast via Sapience SDK
   */
  async submitForecastToSapience(forecast: Forecast): Promise<SubmissionResult> {
    try {
      console.log(`  📝 Submitting forecast to Sapience...`);
      
      const { hash } = await postForecastAttestation({
        market: {
          marketId: parseInt(forecast.marketId, 16),
          address: forecast.marketId as `0x${string}`,
          question: '',
        },
        prediction: {
          probability: Math.round(forecast.probability * 100),
          reasoning: forecast.reasoning,
          confidence: Math.round(forecast.confidence * 100),
        },
        chainId: 42161,
        rpc: 'https://arb1.arbitrum.io/rpc',
        privateKey: this.privateKey as `0x${string}`,
      });

      return {
        hash,
        conditionId: forecast.marketId,
      };
    } catch (error) {
      console.error("Error submitting forecast:", error);
      throw error;
    }
  }

  /**
   * Main forecasting loop
   */
  async run(maxForecasts: number = 10): Promise<void> {
    console.log("🤖 Forecasting Agent Starting...");
    console.log(`🔑 Using private key: ${this.privateKey.slice(0, 6)}...${this.privateKey.slice(-4)}`);

    try {
      const conditions = await this.getConditions();
      console.log(`\n📊 Found ${conditions.length} active conditions`);

      if (conditions.length === 0) {
        console.log("No active conditions found. Exiting.");
        return;
      }

      const selectedConditions = conditions.slice(0, maxForecasts);

      for (const condition of selectedConditions) {
        try {
          console.log(`\n🎯 Forecasting: ${condition.shortName || condition.question}`);

          const forecast = await this.generateForecast(condition);
          console.log(`  Probability: ${(forecast.probability * 100).toFixed(1)}%`);
          console.log(`  Confidence: ${(forecast.confidence * 100).toFixed(1)}%`);
          console.log(`  Reasoning: ${forecast.reasoning}`);

          const result = await this.submitForecastToSapience(forecast);
          console.log(`  ✅ Submitted! Tx Hash: ${result.hash}`);
          console.log(`  🔗 View: https://arbiscan.io/tx/${result.hash}`);

          await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
          console.error(`  ❌ Error forecasting condition: ${error}`);
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

if (require.main === module) {
  const config: Config = {
    privateKey: process.env.PRIVATE_KEY || "",
    groqApiKey: process.env.GROQ_API_KEY || "",
    domeApiKey: process.env.DOME_API_KEY,
    domeApiUrl: process.env.DOME_API_URL,
  };

  const agent = new ForecastingAgent(config);
  agent.run(10).catch(console.error);
}
