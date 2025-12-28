"use strict";
/**
 * Demo script to test fetching markets from Kalshi and Polymarket
 * and generating forecasts using Groq
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class DemoAgent {
    constructor() {
        this.groq = new groq_sdk_1.default({
            apiKey: process.env.GROQ_API_KEY || '',
        });
    }
    /**
     * Fetch a market from Kalshi
     */
    async fetchKalshiMarket() {
        try {
            console.log('\n📊 Fetching market from Kalshi...');
            // Kalshi API endpoint for markets
            const response = await axios_1.default.get('https://api.elections.kalshi.com/trade-api/v2/events', {
                params: {
                    limit: 1,
                    status: 'active',
                },
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (response.data?.events && response.data.events.length > 0) {
                const event = response.data.events[0];
                // Get market details for the first market in the event
                const marketResponse = await axios_1.default.get(`https://api.elections.kalshi.com/trade-api/v2/markets/${event.markets[0].ticker}`, {
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                const market = marketResponse.data.market;
                return {
                    id: market.ticker,
                    question: market.title,
                    description: market.subtitle || event.title,
                    source: 'kalshi',
                    yes_price: market.yes_bid / 100, // Kalshi uses cents
                    no_price: market.no_bid / 100,
                    volume: market.volume,
                    end_date: market.close_time,
                };
            }
            return null;
        }
        catch (error) {
            console.error('Error fetching Kalshi market:', error.message);
            return null;
        }
    }
    /**
     * Fetch a market from Polymarket
     */
    async fetchPolymarketMarket() {
        try {
            console.log('\n📊 Fetching market from Polymarket...');
            // Polymarket API (using their public CLOB API)
            const response = await axios_1.default.get('https://clob.polymarket.com/markets', {
                params: {
                    closed: false,
                    limit: 1,
                },
            });
            if (response.data && response.data.length > 0) {
                const market = response.data[0];
                return {
                    id: market.condition_id,
                    question: market.question,
                    description: market.description || '',
                    source: 'polymarket',
                    yes_price: parseFloat(market.outcome_prices?.[0] || '0.5'),
                    no_price: parseFloat(market.outcome_prices?.[1] || '0.5'),
                    volume: parseFloat(market.volume || '0'),
                    end_date: market.end_date_iso,
                };
            }
            return null;
        }
        catch (error) {
            console.error('Error fetching Polymarket market:', error.message);
            return null;
        }
    }
    /**
     * Generate a forecast using Groq
     */
    async generateForecast(market) {
        console.log(`\n🤖 Generating forecast for: ${market.question}`);
        const prompt = `You are a prediction market forecasting expert analyzing the following market:

Question: "${market.question}"
Description: ${market.description}
Source: ${market.source}
Current YES Price: ${(market.yes_price * 100).toFixed(1)}%
Current NO Price: ${(market.no_price * 100).toFixed(1)}%
Volume: $${market.volume?.toLocaleString() || 'N/A'}
End Date: ${market.end_date || 'N/A'}

Provide your analysis in JSON format:
{
  "probability": <number 0-100>,
  "confidence": <number 0-100>,
  "reasoning": "<detailed reasoning>",
  "fair_value": <number 0-100>,
  "edge": <number>,
  "recommendation": "BUY_YES" or "BUY_NO" or "SKIP"
}

Rules:
- probability: Your estimated probability for YES outcome
- confidence: How confident you are in your estimate
- fair_value: What you think the fair market price should be
- edge: Difference between fair_value and current market price
- recommendation: BUY_YES if market underprices, BUY_NO if overprices, SKIP if fairly priced
- Only recommend BUY if edge > 5% and confidence > 65%`;
        try {
            const completion = await this.groq.chat.completions.create({
                messages: [
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                model: 'mixtral-8x7b-32768', // Fast and capable model
                temperature: 0.3,
                max_tokens: 1000,
            });
            const content = completion.choices[0]?.message?.content || '';
            // Extract JSON from response
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('Could not extract JSON from Groq response');
            }
            const analysis = JSON.parse(jsonMatch[0]);
            return {
                market,
                probability: analysis.probability / 100,
                confidence: analysis.confidence / 100,
                reasoning: analysis.reasoning,
                recommendation: analysis.recommendation,
            };
        }
        catch (error) {
            console.error('Error generating forecast:', error.message);
            throw error;
        }
    }
    /**
     * Display forecast results
     */
    displayForecast(forecast) {
        console.log('\n' + '='.repeat(80));
        console.log(`📈 FORECAST RESULTS`);
        console.log('='.repeat(80));
        console.log(`\n🎯 Market: ${forecast.market.question}`);
        console.log(`📍 Source: ${forecast.market.source.toUpperCase()}`);
        console.log(`💰 Current Prices: YES ${(forecast.market.yes_price * 100).toFixed(1)}% | NO ${(forecast.market.no_price * 100).toFixed(1)}%`);
        console.log(`\n🔮 AI Forecast:`);
        console.log(`   Probability (YES): ${(forecast.probability * 100).toFixed(1)}%`);
        console.log(`   Confidence: ${(forecast.confidence * 100).toFixed(1)}%`);
        console.log(`   Recommendation: ${forecast.recommendation}`);
        console.log(`\n💭 Reasoning:`);
        console.log(`   ${forecast.reasoning}`);
        console.log('\n' + '='.repeat(80));
    }
    /**
     * Run the demo
     */
    async run() {
        console.log('🚀 Sapience Demo Agent Starting...\n');
        console.log('Testing market data fetching and AI forecasting\n');
        try {
            // Test Kalshi
            const kalshiMarket = await this.fetchKalshiMarket();
            if (kalshiMarket) {
                console.log('✅ Successfully fetched Kalshi market');
                const kalshiForecast = await this.generateForecast(kalshiMarket);
                this.displayForecast(kalshiForecast);
            }
            else {
                console.log('❌ Failed to fetch Kalshi market');
            }
            // Small delay between API calls
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Test Polymarket
            const polymarketMarket = await this.fetchPolymarketMarket();
            if (polymarketMarket) {
                console.log('✅ Successfully fetched Polymarket market');
                const polymarketForecast = await this.generateForecast(polymarketMarket);
                this.displayForecast(polymarketForecast);
            }
            else {
                console.log('❌ Failed to fetch Polymarket market');
            }
            console.log('\n✨ Demo complete!\n');
            console.log('Next steps:');
            console.log('  1. Connect a wallet for on-chain trading');
            console.log('  2. Deploy to Arbitrum');
            console.log('  3. Start trading with real capital\n');
        }
        catch (error) {
            console.error('\n❌ Demo error:', error.message);
            process.exit(1);
        }
    }
}
// Run the demo
if (require.main === module) {
    const demo = new DemoAgent();
    demo.run().catch(console.error);
}
exports.default = DemoAgent;
//# sourceMappingURL=demo.js.map