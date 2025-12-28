# Dome API Integration

How the Sapience agent uses Dome API to enrich forecasts with Polymarket and Kalshi market data.

## Overview

Dome API provides aggregated prediction market data from multiple platforms:
- **Polymarket**: Largest decentralized prediction market
- **Kalshi**: CFTC-regulated prediction market exchange

The agent fetches similar markets to cross-reference pricing and volume data.

## Architecture

```
ForecastingAgent
    ↓
DomeAPIClient
    ↓
    ├─→ Polymarket API (via Dome)
    └─→ Kalshi API (via Dome)
```

## How It Works

### 1. Market Similarity Matching

When generating a forecast for a Sapience condition:

```typescript
const condition = {
  question: "Will Bitcoin reach $100k by end of 2024?",
  endTime: 1735689600 // Dec 31, 2024
};
```

The agent:
1. Extracts keywords: `["bitcoin", "100k", "2024"]`
2. Queries Dome for similar Polymarket/Kalshi markets
3. Calculates similarity scores
4. Returns top matches with pricing data

### 2. Market Sentiment Aggregation

```typescript
const sentiment = await domeClient.getMarketSentiment(question);

// Returns:
{
  markets: [
    {
      platform: "polymarket",
      question: "BTC above $100k by EOY 2024?",
      yesPrice: 0.72,  // 72% probability
      volume24h: 125000
    },
    {
      platform: "kalshi",
      question: "Bitcoin $100k in 2024",
      yesPrice: 0.68,  // 68% probability
      volume24h: 45000
    }
  ],
  avgYesPrice: 0.70,    // 70% average
  avgVolume: 85000,
  platforms: ["polymarket", "kalshi"]
}
```

### 3. Forecast Enhancement

The aggregated data is appended to the AI prompt:

```
Analyze this prediction market:

Question: "Will Bitcoin reach $100k by end of 2024?"

Related Market Data from Polymarket/Kalshi:
- POLYMARKET: "BTC above $100k by EOY 2024?" - YES: 72.0%, Volume: $125,000
- KALSHI: "Bitcoin $100k in 2024" - YES: 68.0%, Volume: $45,000

Average YES price across platforms: 70.0%
Total 24h volume: $85,000

Generate your probability estimate considering this market data...
```

The AI model uses this to:
- Calibrate its probability estimate
- Identify pricing inefficiencies
- Assess market confidence via volume

## API Methods

### `getPolymarkets()`
Fetch all active Polymarket markets.

```typescript
const markets = await domeClient.getPolymarkets();
// Returns: Market[]
```

### `getKalshiMarkets()`
Fetch all active Kalshi markets.

```typescript
const markets = await domeClient.getKalshiMarkets();
// Returns: Market[]
```

### `findSimilarMarkets(query, limit)`
Find markets similar to a query string.

```typescript
const similar = await domeClient.findSimilarMarkets(
  "Bitcoin $100k 2024",
  5  // top 5 results
);
// Returns: Market[]
```

### `getMarketSentiment(question)`
Get aggregated sentiment across platforms.

```typescript
const sentiment = await domeClient.getMarketSentiment(
  "Will Bitcoin reach $100k by end of 2024?"
);
// Returns: MarketSentiment
```

## Configuration

Add to `.env`:

```env
DOME_API_KEY=your_dome_api_key
DOME_API_URL=https://api.domeapi.com
```

Optional - disable if Dome unavailable:
```env
# Comment out to disable Dome integration
# DOME_API_KEY=
```

When disabled, the agent generates forecasts without cross-platform data.

## Error Handling

The client handles common errors gracefully:

```typescript
try {
  const sentiment = await domeClient.getMarketSentiment(question);
  // Use data...
} catch (error) {
  // Falls back to generating forecast without Dome data
  console.log('⚠️ Could not fetch Dome data');
}
```

**Network errors** (ENOTFOUND, ETIMEDOUT):
- Silent fail, logs warning
- Agent continues without Dome data
- Forecast still generated using AI only

**Rate limiting** (429):
- Implements exponential backoff
- Retries after delay
- Max 3 attempts

## Similarity Algorithm

Markets are ranked by keyword overlap:

```typescript
function calculateSimilarity(query: string, market: Market): number {
  const queryWords = extractKeywords(query);
  const marketWords = extractKeywords(market.question);
  
  const matches = queryWords.filter(w => marketWords.includes(w));
  return matches.length / queryWords.length;
}
```

Example:
```
Query: "Bitcoin $100k 2024"
Keywords: ["bitcoin", "100k", "2024"]

Market: "BTC above $100k by EOY 2024?"
Keywords: ["btc", "100k", "eoy", "2024"]

Matches: ["100k", "2024"]
Similarity: 2/3 = 0.67 (67%)
```

## Benefits

### 1. Improved Calibration
Cross-referencing with real money markets improves probability estimates.

### 2. Inefficiency Detection
Identify mispriced markets when Sapience odds diverge from Polymarket/Kalshi.

### 3. Confidence Assessment
High-volume markets indicate strong consensus; low-volume suggests uncertainty.

### 4. Arbitrage Opportunities
Find markets with >5% price difference across platforms.

## Example Output

```
🤖 Generating forecast for: Bitcoin $100k EOY 2024
  📊 Found 2 similar markets on 2 platform(s)

  Probability: 71.5%
  Confidence: 82.0%
  Reasoning: Market consensus at 70%, strong volume signals high confidence

  📝 Submitting forecast to Sapience...
  ✅ Submitted! Tx Hash: 0xabc123...
  🔗 View: https://arbiscan.io/tx/0xabc123...
```

## Troubleshooting

**"Could not fetch Dome data"**
- Check `DOME_API_KEY` in `.env`
- Verify API key is valid
- Check internet connectivity
- Dome API may be temporarily down (agent continues without it)

**"No similar markets found"**
- Sapience condition may be too niche
- Try broader keywords
- Agent generates forecast using AI only

**"Rate limit exceeded"**
- Too many API calls in short time
- Agent automatically retries with backoff
- Consider reducing `MAX_FORECASTS`

## API Reference

Full Dome API docs: Contact Dome team for access

Key endpoints used:
- `GET /polymarket/markets` - List Polymarket markets
- `GET /kalshi/markets` - List Kalshi markets
- Market structure:
  ```typescript
  {
    id: string;
    platform: "polymarket" | "kalshi";
    question: string;
    yesPrice: number;      // 0-1
    noPrice: number;       // 0-1
    volume24h: number;     // USD
    liquidity: number;     // USD
    endDate: string;       // ISO datetime
  }
  ```

## Next Steps

- Explore other Dome features (historical data, orderbook depth)
- Add support for more platforms (Manifold, Metaculus)
- Implement real-time price tracking
- Build arbitrage detection alerts
