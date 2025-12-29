# 🚀 Quick Start - Frontend Setup

## You're all set! Here's how to use your new Next.js frontend:

### Start the Web App

```bash
pnpm dev
```

Then open **http://localhost:3000** in your browser.

### What You Can Do

#### 📊 Dashboard Tab
- View your forecasting statistics
- See recent predictions and their status
- Track success rate and gas costs

#### 🎲 Markets Tab
- Browse all active Sapience markets
- Click "Generate Forecast" on any market
- Review AI predictions before submitting
- Submit to blockchain with one click

#### ⚙️ Controls Tab
- **Full Mode**: Analyzes all markets and submits top 2-10 predictions
- **One-Shot Mode**: Quick 5-forecast leaderboard submission
- Real-time progress logs
- Adjustable settings

### CLI Still Works!

Your original CLI functionality is preserved:

```bash
pnpm cli     # Run the CLI forecasting agent
```

### File Structure Overview

```
app/                          # Next.js App Router
├── api/                      # Backend API endpoints
│   ├── conditions/route.ts   # Fetch markets
│   ├── forecast/route.ts     # Generate forecast
│   ├── run-agent/route.ts    # Run full agent
│   └── submit/route.ts       # Submit to chain
├── layout.tsx                # Root layout
├── page.tsx                  # Main page
└── globals.css               # Tailwind styles

components/                   # React components
├── ForecastingDashboard.tsx  # Stats display
├── MarketList.tsx            # Market browser
└── AgentControls.tsx         # Agent controls

src/                          # Original CLI code (unchanged)
├── agents/
│   └── forecasting-agent.ts  # Core agent logic
└── config.ts                 # Configuration
```

### Key Features

✅ **Same Backend**: Uses your existing `ForecastingAgent` class  
✅ **Type-Safe**: Full TypeScript support  
✅ **Responsive**: Works on desktop and mobile  
✅ **Persistent**: Forecasts saved in browser localStorage  
✅ **Real-Time**: Live updates as agent runs  

### Next Steps

1. **Run it**: `pnpm dev` and visit http://localhost:3000
2. **Test Markets Tab**: Generate a forecast for any market
3. **Try Agent Controls**: Run full mode with 2 forecasts
4. **Check Dashboard**: See your stats and history

### Environment Variables

Make sure these are set in your `.env`:

```env
GROQ_API_KEY=your_key_here
ETHEREUM_PRIVATE_KEY=your_key_here
```

### Troubleshooting

**Port 3000 already in use?**
```bash
# Use different port
pnpm dev -- --port 3001
```

**API errors?**
- Check your `.env` file has correct keys
- Restart the dev server after env changes

**Build issues?**
```bash
pnpm install  # Reinstall dependencies
```

---

🎉 **You're ready to go!** The frontend and CLI are now perfectly synced.
