# Sapience Arbitrage Rebalancer Agent - Project Plan

## 🎯 Project Overview

**Goal:** Build an autonomous ElizaOS agent that discovers arbitrage opportunities between Polymarket and Kalshi prediction markets, executes trades, and intelligently rebalances wallets across both platforms using Sapience forecasting data.

**Hackathon:** Sapience 2025 (Dec 8 - Jan 5)  
**Prize Pool:** $10,000  
**Tech Stack:** ElizaOS + DomeAPI + Sapience Oracles + TypeScript/Node.js

---

## 📊 Core Features

### **Phase 1: Arbitrage Detection (MVP - Week 1)**
- ✅ Real-time market data fetching from Polymarket & Kalshi via DomeAPI
- ✅ Price spread calculation & discrepancy identification
- ✅ Profitable trade recommendations (with >2% spread threshold)
- ✅ Market pair matching (same underlying event across platforms)
- ✅ Discord/Telegram alerts for arbitrage opportunities
- ✅ Dashboard to visualize spreads in real-time

### **Phase 2: Autonomous Trading (Week 2)**
- ✅ Integration with Polymarket & Kalshi API for placing orders
- ✅ Order sizing based on wallet balances & risk tolerance
- ✅ Position tracking across both platforms
- ✅ Automated trade execution when spread threshold is met
- ✅ Transaction logging & history
- ✅ Profit/loss tracking

### **Phase 3: Intelligent Wallet Rebalancing (Week 3)**
- ✅ Portfolio analysis across both markets
- ✅ Risk-adjusted rebalancing using Kelly Criterion
- ✅ Correlation-based position management
- ✅ Automatic fund transfers between platforms
- ✅ Diversification enforcement
- ✅ Liquidity-aware position sizing

### **Phase 4: Sapience Oracle Integration (Week 3-4)**
- ✅ Fetch Sapience forecasts for high-uncertainty markets
- ✅ Combine Sapience predictions with DomeAPI price data
- ✅ Identify markets where Sapience forecasts diverge from odds
- ✅ Confidence weighting based on Sapience data quality
- ✅ Meta-analysis:  Track Sapience accuracy over time

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│         ElizaOS Agent Framework (TypeScript)        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │     Character Config & Personality          │  │
│  │  (ArbitrageurAgent with trading parameters) │  │
│  └──────────────────────────────────────────────┘  │
│                        │                            │
│  ┌────────────────────┴──────────────────────────┐ │
│  │                                               │ │
│  ▼                    ▼                          ▼ │
│ ┌──────────┐    ┌──────────────┐    ┌─────────────┐
│ │ Memory   │    │ Action Chain │    │   Plugin    │
│ │ Module   │    │   Engine     │    │   System    │
│ └──────────┘    └──────────────┘    └─────────────┘
│  (PostgreSQL)        (Task planner)  (Custom Plugins)
│
└─────────────────────────────────────────────────────┘
         ▼                    ▼                    ▼
    ┌─────────┐     ┌──────────────┐    ┌──────────────┐
    │ DomeAPI │     │   Sapience   │    │  Trading     │
    │ Plugin  │     │   Oracle     │    │  Plugin      │
    │         │     │   Plugin     │    │              │
    └─────────┘     └──────────────┘    └──────────────┘
         ▼                    ▼                    ▼
    ┌─────────┐     ┌──────────────┐    ┌──────────────┐
    │Polymarket│    │  Sapience    │    │  Polymarket  │
    │ Kalshi  │    │  Forecasts   │    │  Kalshi API  │
    │Exchange │    │  (via REST)  │    │ (via REST)   │
    └─────────┘     └──────────────┘    └──────────────┘
```

---

## 🔌 Plugin Architecture

### **1. DomeAPI Plugin** (Core Data Layer)
```typescript
// Responsibilities:
- Fetch real-time market data from Polymarket & Kalshi
- Match equivalent markets between platforms
- Calculate spreads & arbitrage opportunities
- Stream orderbook updates
- Maintain market cache (Redis)
```

### **2. Sapience Oracle Plugin** (Prediction Enhancement)
```typescript
// Responsibilities:
- Query Sapience forecasts for markets
- Compare forecasts vs. current market odds
- Generate confidence scores
- Track forecast accuracy
- Weight opportunities by Sapience confidence
```

### **3. Trading Plugin** (Execution Layer)
```typescript
// Responsibilities:
- Execute trades on Polymarket & Kalshi
- Manage API keys & wallet addresses securely
- Track positions & P&L
- Calculate order sizing
- Handle slippage & order rejection
```

### **4. Portfolio Rebalancing Plugin** (Optimization)
```typescript
// Responsibilities:
- Analyze portfolio distribution
- Calculate target allocations
- Execute rebalancing trades
- Monitor correlation changes
- Enforce risk limits
```

---

## 🤖 How Sapience is Used

### **Integration Points:**

1. **Market Selection**
   - Use Sapience forecasts to identify high-uncertainty markets
   - Filter out markets where Sapience has low confidence
   - Prioritize markets with recent Sapience updates

2. **Arbitrage Confidence Scoring**
   ```
   Opportunity Score = (Spread % × Execution Probability) + (Sapience Confidence × Divergence Factor)
   
   Where:
   - Spread %: Price difference between markets
   - Execution Probability:  Based on liquidity & order history
   - Sapience Confidence: How confident is the Sapience forecast?
   - Divergence Factor: Does market price disagree with Sapience?
   ```

3. **Risk Assessment**
   - Use Sapience forecasts to set position limits
   - Higher-confidence forecasts allow larger positions
   - Adjust Kelly Criterion sizing based on Sapience data

4. **Market Intelligence**
   - Combine Sapience forecasts with orderbook data
   - Identify markets where smart money (Sapience) disagrees with price
   - Track when Sapience forecasts converge to market prices

5. **Performance Analytics**
   - Measure accuracy of Sapience predictions
   - Correlate Sapience confidence with actual outcomes
   - Learn which Sapience data points are most predictive

### **Example Scenario:**

```
1. DomeAPI detects:  
   - Polymarket: "Will BTC exceed $100K by Dec 31?" = 65%
   - Kalshi: Same event = 62%
   - Spread: 3% (profit opportunity!)

2. Check Sapience Oracle:
   - Sapience forecast: 68% confidence = 70%
   - Sapience's forecast > Polymarket price
   - This suggests Polymarket is underpriced

3. Agent Decision:
   - BUY on Polymarket (the underpriced side)
   - SELL on Kalshi (lock in spread)
   - Position size = Kelly Criterion × (Sapience Confidence / 100)
   - Execute trade automatically

4. Rebalancing Check:
   - After trade, portfolio drift analysis
   - Trigger rebalancing if drift > threshold
   - Sapience forecasts guide rebalancing priorities
```

---

## 📁 Repository Structure

```
sapience-arbitrage-rebalancer/
├── README.md                          # Project overview
├── PROJECT_PLAN.md                    # This file
├── ARCHITECTURE.md                    # Detailed architecture
├── package.json                       # Dependencies
├── tsconfig. json                      # TypeScript config
├── . env.example                       # Environment variables template
│
├── src/
│   ├── agent/
│   │   ├── character. ts              # ElizaOS character config
│   │   ├── index.ts                  # Agent initialization
│   │   └── types.ts                  # TypeScript interfaces
│   │
│   ├── plugins/
│   │   ├── domeapi/
│   │   │   ├── index.ts              # DomeAPI plugin entry
│   │   │   ├── actions.ts            # Fetch markets, spreads
│   │   │   ├── providers.ts          # Real-time data providers
│   │   │   └── types.ts              # DomeAPI types
│   │   │
│   │   ├── sapience/
│   │   │   ├── index.ts              # Sapience plugin entry
│   │   │   ├── actions.ts            # Fetch forecasts
│   │   │   ├── providers.ts          # Forecast providers
│   │   │   ├── scoring.ts            # Confidence scoring
│   │   │   └── types.ts              # Sapience types
│   │   │
│   │   ├── trading/
│   │   │   ├── index. ts              # Trading plugin entry
│   │   │   ├── actions.ts            # Place orders, track positions
│   │   │   ├── execution.ts          # Order execution logic
│   │   │   ├── keys.ts               # API key management
│   │   │   └── types.ts              # Trading types
│   │   │
│   │   └── rebalancing/
│   │       ├── index.ts              # Rebalancing plugin entry
│   │       ├── kelly.ts              # Kelly Criterion calculator
│   │       ├── portfolio.ts          # Portfolio analyzer
│   │       ├── rebalancer.ts         # Rebalancing logic
│   │       └── types.ts              # Rebalancing types
│   │
│   ├── services/
│   │   ├── domeapi.service.ts        # DomeAPI wrapper
│   │   ├── sapience.service.ts       # Sapience API wrapper
│   │   ├── trading.service.ts        # Trading execution service
│   │   ├── portfolio.service.ts      # Portfolio management
│   │   └── cache.service.ts          # Redis caching
│   │
│   ├── utils/
│   │   ├── calculations.ts           # Spread, P&L, Kelly
│   │   ├── validation.ts             # Input validation
│   │   ├── logger.ts                 # Logging utility
│   │   └── env.ts                    # Environment validation
│   │
│   ├── types/
│   │   ├── markets.ts                # Market data types
│   │   ├── trades.ts                 # Trade types
│   │   ├── portfolio.ts              # Portfolio types
│   │   └── sapience.ts               # Sapience forecast types
│   │
│   └── index.ts                      # Entry point
│
├── tests/
│   ├── unit/
│   │   ├── spread-calculation.test.ts
│   │   ├── kelly-criterion.test.ts
│   │   └── rebalancing. test.ts
│   │
│   ├── integration/
│   │   ├── domeapi-plugin.test.ts
│   │   └── trading-plugin.test.ts
│   │
│   └── fixtures/
│       └── mock-data.ts
│
├── dashboard/
│   ├── package.json
│   ├── pages/
│   │   ├── index.tsx                 # Home dashboard
│   │   ├── markets.tsx               # Market spreads
│   │   ├── portfolio.tsx             # Portfolio view
│   │   └── trades.tsx                # Trade history
│   │
│   ├── components/
│   │   ├── SpreadChart.tsx
│   │   ├── PortfolioMetrics.tsx
│   │   ├── TradeTable.tsx
│   │   └── AlertNotifications.tsx
│   │
│   └── public/
│
├── docs/
│   ├── API.md                        # API documentation
│   ├── SETUP.md                      # Setup guide
│   ├── PLUGINS.md                    # Plugin development guide
│   └── EXAMPLES.md                   # Usage examples
│
├── . github/
│   ├── workflows/
│   │   ├── test.yml                  # Unit tests CI
│   │   └── deploy.yml                # Deployment workflow
│   │
│   └── ISSUE_TEMPLATE/
│       └── bug_report.md
│
└── docker-compose.yml                # Local dev environment
```

---

## 🚀 Development Timeline

### **Week 1: Arbitrage Detection MVP**
- Day 1-2: Project setup, ElizaOS scaffolding, character config
- Day 3: DomeAPI plugin development & testing
- Day 4: Market matching & spread calculation logic
- Day 5: Real-time alerts (Discord/Telegram integration)
- Day 6-7: Dashboard prototype

### **Week 2: Autonomous Trading**
- Day 8-9: Polymarket API integration
- Day 10: Kalshi API integration
- Day 11-12: Order execution & position tracking
- Day 13: Risk management & slippage handling
- Day 14: Testing & debugging

### **Week 3: Rebalancing & Sapience**
- Day 15-16: Portfolio analysis module
- Day 17: Kelly Criterion implementation
- Day 18: Sapience plugin development
- Day 19-20: Integration & confidence scoring
- Day 21: Testing & optimization

### **Week 4: Polish & Submission**
- Day 22-23: Documentation & README
- Day 24-25: Performance optimization & bug fixes
- Day 26: Demo video & pitch preparation
- Day 27: Final testing
- Day 28: Submission + Hackathon concludes

---

## 💰 Revenue/Impact Metrics

### **For Judges:**
1. **Arbitrage Capture:** Agent finds profitable spreads >2% (proven with backtesting)
2. **Autonomous Execution:** Zero human intervention needed once deployed
3. **Wallet Optimization:** Portfolio rebalancing improves Sharpe ratio by X%
4. **Sapience Integration:** Unique angle—using Sapience data to weight decisions
5. **Multi-Platform:** First agent to handle both Polymarket & Kalshi seamlessly

### **For Users:**
- **Passive Income:** Let the agent find arbitrage while you sleep
- **Risk Management:** Automatic rebalancing protects against catastrophic losses
- **Data-Driven:** Combines market data + Sapience forecasts
- **Transparency:** All trades logged, explained, auditable

---

## 🔐 Security & Compliance

- [ ] Use environment variables for all API keys
- [ ] Implement rate limiting to avoid API abuse
- [ ] Add transaction signing & nonce management
- [ ] Encrypted storage for sensitive config
- [ ] Audit logging for all trades
- [ ] Position limits & maximum trade size caps
- [ ] Graceful error handling & circuit breakers

---

## 📦 Dependencies (Key)

```json
{
  "@elizaos/core": "^0.1.0",
  "domeapi": "^1.0.0",
  "axios": "^1.6.0",
  "redis": "^4.6.0",
  "ethers": "^6.0.0",
  "typescript": "^5.0.0",
  "dotenv": "^16.3.0",
  "winston": "^3.10.0",
  "discord.js": "^14.0.0",
  "next": "^13.0.0",
  "recharts": "^2.10.0"
}
```

---

## 🎯 Success Criteria

✅ **MVP (Minimum for Submission):**
- Agent detects arbitrage opportunities in real-time
- Dashboard shows spreads & opportunities
- Manual trade execution works
- Documentation is clear

✅ **Great Submission:**
- Autonomous trading enabled
- Portfolio rebalancing works
- Sapience integration functioning
- Historical P&L tracking

✅ **Prize Winner:**
- Live agent deployed & generating returns
- Demo showing >100 trades executed
- Sapience forecasts improving trade selection
- Community ready to use post-hackathon

---

## 📞 Support Resources

- **ElizaOS Docs:** https://docs.elizaos.ai/
- **DomeAPI Docs:** https://docs.domeapi.io/
- **Sapience Docs:** https://www.sapience.xyz/
- **Hackathon Discord:** [Link from Sapience]
- **This Project Issues:** GitHub Issues tab

---

## 📝 License

MIT License - See LICENSE file

---

**Ready to build? ** Start with Step 1 in SETUP.md 🚀
