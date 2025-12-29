# Sapience Dual Agent - Next.js Frontend

## Overview

This project now includes a Next.js frontend that provides a web interface for the Sapience forecasting agent. The frontend is synced with the CLI functionality and allows you to:

- View active prediction markets
- Generate AI forecasts using Groq
- Submit forecasts to the Sapience platform on Arbitrum
- Monitor agent performance and statistics
- Run the full forecasting agent from the UI

## Tech Stack

- **Next.js 16.1.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **API Routes** - Backend endpoints for agent functionality

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

Make sure your `.env` file is properly configured:

```env
# Required for forecasting
GROQ_API_KEY=your_groq_api_key
ETHEREUM_PRIVATE_KEY=your_private_key

# Optional
AGENT_MODE=forecasting
MAX_FORECASTS=2
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run CLI (Original functionality)

```bash
pnpm cli
```

## Frontend Structure

```
app/
├── api/                    # Next.js API routes
│   ├── conditions/         # Fetch active markets
│   ├── forecast/           # Generate forecast for a market
│   ├── run-agent/          # Run full agent workflow
│   └── submit/             # Submit forecast to chain
├── layout.tsx              # Root layout
├── page.tsx                # Main page with tabs
└── globals.css             # Global styles

components/
├── ForecastingDashboard.tsx  # Stats and recent forecasts
├── MarketList.tsx            # Browse and forecast markets
└── AgentControls.tsx         # Run agent with controls
```

## Features

### 📊 Dashboard Tab
- View forecasting statistics (total, success rate, confidence)
- See recent forecast history
- Track gas costs
- Links to Arbiscan for transactions

### 🎲 Markets Tab
- Browse active Sapience markets
- Generate individual forecasts with AI
- Preview forecast before submission
- Submit directly to blockchain

### ⚙️ Controls Tab
- **Full Mode**: Evaluate all markets and submit top predictions
- **One-Shot Mode**: Quick 5-forecast submission for leaderboard
- Real-time logs and status updates
- Adjustable forecast count (1-10)

## API Endpoints

### GET `/api/conditions?limit=20`
Fetches active prediction markets from Sapience.

**Response:**
```json
{
  "success": true,
  "conditions": [...],
  "count": 20
}
```

### POST `/api/forecast`
Generates a forecast for a specific market.

**Request:**
```json
{
  "conditionId": "0x...",
  "question": "Will...",
  "endTime": 1234567890
}
```

### POST `/api/run-agent`
Runs the full forecasting agent workflow.

**Request:**
```json
{
  "maxForecasts": 2,
  "mode": "full" | "one-shot"
}
```

### POST `/api/submit`
Submits a forecast to the Sapience platform.

**Request:**
```json
{
  "conditionId": "0x...",
  "probability": 65,
  "reasoning": "..."
}
```

## Data Persistence

Forecast history is stored in browser localStorage under `sapience-forecasts`. This allows you to track your predictions across sessions without requiring a database.

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Development Tips

1. **Hot Reload**: Changes to components auto-reload in dev mode
2. **API Testing**: Use the Markets tab to test individual forecasts
3. **Logs**: Check browser console and terminal for detailed logs
4. **Gas Costs**: Each submission costs ~$4-5 on Arbitrum

## Troubleshooting

**Issue: API routes not working**
- Ensure `.env` file is in the root directory
- Restart dev server after changing env vars

**Issue: Build errors**
- Run `pnpm install` to ensure all dependencies are installed
- Check TypeScript errors with `pnpm build`

**Issue: Wallet errors**
- Verify your private key is correctly formatted (with or without 0x)
- Ensure wallet has ETH on Arbitrum for gas

## Scripts

```bash
pnpm dev          # Start Next.js dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm cli          # Run CLI agent (original functionality)
pnpm lint         # Run ESLint
pnpm test         # Run tests
```

## Architecture

The frontend integrates seamlessly with the existing CLI codebase:

- **Shared Code**: API routes import and use the same `ForecastingAgent` class
- **No Duplication**: Core logic remains in `src/agents/forecasting-agent.ts`
- **Type Safety**: Full TypeScript support across frontend and backend
- **Environment Config**: Same `.env` file for both CLI and web

## Next Steps

1. Add authentication (optional)
2. Implement real-time updates with WebSockets
3. Add historical performance charts
4. Create mobile-responsive improvements
5. Add wallet connection UI (WalletConnect, MetaMask)

## Links

- [Sapience Platform](https://sapience.xyz)
- [Arbitrum Block Explorer](https://arbiscan.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Groq API](https://groq.com)
