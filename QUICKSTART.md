# Sapience Dual Agent - Quick Start

Run AI-powered forecasting on prediction markets via Sapience on Arbitrum.

## Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- Ethereum wallet with ~0.01 ETH on Arbitrum
- Groq API key (free at [console.groq.com](https://console.groq.com/keys))
- Dome API key (get from Dome team)

## Installation

```bash
# Clone repository
git clone https://github.com/21givenchy/sapience-dual-agent.git
cd sapience-dual-agent

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

## Configuration

Edit `.env`:

```env
# Required
PRIVATE_KEY=your_private_key_here
GROQ_API_KEY=your_groq_api_key_here
DOME_API_KEY=your_dome_api_key_here

# Optional (defaults provided)
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
AGENT_MODE=forecasting
MAX_FORECASTS=10
```

### Getting Your Private Key

**Option 1: Generate New Wallet**
```bash
node scripts/wallet-helper.js
# Choose option 1, then fund the address on Arbitrum
```

**Option 2: Export from MetaMask**
1. Open MetaMask
2. Click three dots → Account Details → Export Private Key
3. Copy the key (remove the `0x` prefix)

⚠️ **Security Warning**: Never commit `.env` or share your private key!

### Getting API Keys

**Groq API Key** (Free):
1. Go to [console.groq.com/keys](https://console.groq.com/keys)
2. Sign up / Log in
3. Create new API key
4. Copy to `.env`

**Dome API Key**:
Contact Dome team for access.

## Usage

### Test Connections

Before running agents, verify everything is configured:

```bash
node scripts/test-connection.js
```

This checks:
- ✅ Wallet configuration
- ✅ ETH balance on Arbitrum
- ✅ Sapience API connectivity
- ✅ Groq AI API access

### Run Forecasting Agent

```bash
pnpm dev
```

The agent will:
1. Fetch active prediction markets from Sapience
2. Get similar market data from Polymarket/Kalshi via Dome
3. Generate AI-powered probability forecasts
4. Submit forecasts to Sapience on Arbitrum
5. Show transaction links

### Development Mode

```bash
# Build TypeScript
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## Agent Modes

Set `AGENT_MODE` in `.env`:

- `forecasting` - Only generate forecasts (no trading)
- `trading` - Only execute trades (requires USDe)
- `both` - Run both agents sequentially

## Troubleshooting

**"Insufficient funds" error**
- Bridge ETH to Arbitrum: [bridge.arbitrum.io](https://bridge.arbitrum.io/)
- Need ~0.01 ETH for gas fees

**"Invalid API Key" (Groq)**
- Get new key: [console.groq.com/keys](https://console.groq.com/keys)
- Update `GROQ_API_KEY` in `.env`

**"No active conditions found"**
- Check Sapience API status
- Verify network connectivity
- Try again later

**TypeScript errors**
- Run `pnpm install` to ensure all dependencies are installed
- Check Node.js version: `node --version` (need 18+)

## Architecture

```
src/
├── agents/
│   ├── forecasting-agent.ts    # AI forecast generation + Sapience submission
│   └── trading-agent.ts        # Trade execution (requires USDe)
├── utils/
│   ├── dome-client.ts          # Polymarket/Kalshi data integration
│   └── market-analyzer.ts      # Market analysis utilities
└── config.ts                    # Configuration management
```

## Resources

- **Sapience**: [sapience.xyz](https://sapience.xyz)
- **Documentation**: [docs.sapience.xyz](https://docs.sapience.xyz)
- **Leaderboard**: [sapience.xyz/forecasts](https://sapience.xyz/forecasts)
- **Arbitrum Bridge**: [bridge.arbitrum.io](https://bridge.arbitrum.io/)
- **Groq API**: [console.groq.com](https://console.groq.com)

## Support

- GitHub Issues: [github.com/21givenchy/sapience-dual-agent/issues](https://github.com/21givenchy/sapience-dual-agent/issues)
- Sapience Discord: [discord.gg/sapience](https://discord.gg/sapience)

## License

MIT - see [LICENSE](LICENSE)
