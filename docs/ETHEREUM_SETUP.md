# Ethereum Setup Guide

Complete guide to setting up your Ethereum wallet for Sapience forecasting on Arbitrum.

## What You Need

1. **Ethereum Private Key**: Controls your wallet
2. **ETH on Arbitrum**: For gas fees (~0.01 ETH)
3. **Arbitrum RPC**: Network connection (default provided)

## Step 1: Generate or Import Wallet

### Option A: Generate New Wallet (Recommended for Testing)

```bash
node scripts/wallet-helper.js
```

Choose option 1 to generate a new wallet. You'll get:
- **Address**: Public identifier (share freely)
- **Private Key**: Secret key (NEVER share!)

Save the private key to your `.env` file:
```env
PRIVATE_KEY=your_64_character_hex_string
```

⚠️ **DO NOT include the `0x` prefix** in `.env`

### Option B: Use Existing Wallet (MetaMask)

**Export from MetaMask:**
1. Open MetaMask browser extension
2. Click the three dots menu
3. Account Details → Export Private Key
4. Enter password and copy key
5. Remove `0x` prefix if present
6. Add to `.env`

**Security Best Practice**: Create a new wallet just for this bot with a small ETH balance.

## Step 2: Fund Wallet on Arbitrum

Your wallet needs ETH on Arbitrum (Layer 2) for gas fees.

### Get ETH on Arbitrum

**Option 1: Bridge from Ethereum Mainnet**

1. Go to [bridge.arbitrum.io](https://bridge.arbitrum.io/)
2. Connect MetaMask with your wallet
3. Bridge 0.01-0.05 ETH from Ethereum → Arbitrum
4. Wait ~10 minutes for confirmation

**Option 2: Buy Directly on Arbitrum**

Use centralized exchanges that support Arbitrum withdrawals:
- Binance: Withdraw ETH → Select "Arbitrum One" network
- Coinbase: Not yet supported (use bridge)
- Crypto.com: Withdraw ETH → Select "Arbitrum" network

**Option 3: Use a Faucet (Testnet Only)**

For Arbitrum Sepolia testnet:
- [alchemy.com/faucets/arbitrum-sepolia](https://www.alchemy.com/faucets/arbitrum-sepolia)
- Get free test ETH

## Step 3: Verify Setup

Run the connection test:

```bash
node scripts/test-connection.js
```

Expected output:
```
🔑 Testing wallet configuration...
✅ Wallet address: 0xYourAddressHere
💰 Balance: 0.01 ETH

📊 Testing Sapience API...
✅ Found 6 active conditions

🤖 Testing Groq AI...
✅ Groq API working

📋 Test Results:
Wallet: ✅
Sapience API: ✅
Groq AI: ✅

🎉 All tests passed! Ready to run agents.
```

## Step 4: Check Balance

Verify your Arbitrum ETH balance:

**Via Arbiscan:**
1. Go to [arbiscan.io](https://arbiscan.io)
2. Search for your wallet address
3. Check ETH balance

**Via Script:**
```bash
node scripts/test-connection.js
```

## Troubleshooting

### "Insufficient funds for gas"

**Problem**: Wallet has 0 ETH or not enough for gas

**Solutions**:
- Bridge more ETH to Arbitrum
- Check if you sent to correct network (Arbitrum, not Ethereum mainnet)
- Verify address matches private key

### "Invalid private key"

**Problem**: Private key format is wrong

**Solutions**:
- Remove `0x` prefix from `.env`
- Ensure it's exactly 64 hexadecimal characters
- No spaces or line breaks
- Use lowercase letters

Example:
```env
# ❌ Wrong
PRIVATE_KEY=0x1234abcd...

# ✅ Correct
PRIVATE_KEY=1234abcd...
```

### "Cannot connect to Arbitrum RPC"

**Problem**: Network connectivity issue

**Solutions**:
- Check internet connection
- Try alternative RPC in `.env`:
  ```env
  ARBITRUM_RPC_URL=https://arbitrum-one.publicnode.com
  ```
- Use Alchemy/Infura RPC:
  ```env
  ARBITRUM_RPC_URL=https://arb-mainnet.g.alchemy.com/v2/YOUR_KEY
  ```

### "Transaction underpriced"

**Problem**: Gas price too low during high network activity

**Solutions**:
- Wait a few minutes and retry
- Network congestion will clear
- Forecasting is not time-sensitive

## Security Best Practices

### ✅ DO:
- Use a dedicated wallet for bots
- Keep private key in `.env` only
- Add `.env` to `.gitignore`
- Use small ETH amounts (~0.01-0.1)
- Regularly check transaction history

### ❌ DON'T:
- Commit `.env` to git
- Share private key with anyone
- Use your main wallet
- Store private keys in cloud storage
- Reuse the key across multiple projects

## Gas Fee Estimates

Typical costs on Arbitrum:

| Operation | Gas Cost | USD (ETH @ $3000) |
|-----------|----------|-------------------|
| Submit Forecast | ~0.0001 ETH | $0.30 |
| 10 Forecasts | ~0.001 ETH | $3.00 |
| 100 Forecasts | ~0.01 ETH | $30.00 |

**Recommendation**: Start with 0.01 ETH (~$30) for ~10 forecasts.

## Network Information

**Arbitrum One (Mainnet)**
- Chain ID: 42161
- RPC: `https://arb1.arbitrum.io/rpc`
- Explorer: [arbiscan.io](https://arbiscan.io)
- Bridge: [bridge.arbitrum.io](https://bridge.arbitrum.io)

**Arbitrum Sepolia (Testnet)**
- Chain ID: 421614
- RPC: `https://sepolia-rollup.arbitrum.io/rpc`
- Explorer: [sepolia.arbiscan.io](https://sepolia.arbiscan.io)
- Faucet: [alchemy.com/faucets/arbitrum-sepolia](https://www.alchemy.com/faucets/arbitrum-sepolia)

## Next Steps

Once your wallet is funded and verified:

1. Get Groq API key: [console.groq.com/keys](https://console.groq.com/keys)
2. Add to `.env`: `GROQ_API_KEY=your_key_here`
3. Run forecasting agent: `pnpm dev`
4. Check your forecasts: [sapience.xyz/forecasts](https://sapience.xyz/forecasts)

## Resources

- **Arbitrum Docs**: [docs.arbitrum.io](https://docs.arbitrum.io)
- **MetaMask Guide**: [metamask.io/faqs](https://metamask.io/faqs)
- **Gas Tracker**: [arbiscan.io/gastracker](https://arbiscan.io/gastracker)
- **Bridge Tutorial**: [arbitrum.io/bridge-tutorial](https://arbitrum.io/bridge-tutorial)
