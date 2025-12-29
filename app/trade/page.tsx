'use client'

import TradingPage from '@/components/TradingPage'

export default function TradePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-2">
            💰 Trading Agent
          </h1>
          <p className="text-gray-400 text-lg">
            Connect your wallet and submit predictions on-chain
          </p>
        </header>

        {/* Trading Component */}
        <TradingPage />

        {/* Info Panel */}
        <div className="mt-8 bg-green-900 bg-opacity-30 border border-green-600 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-300 mb-4">ℹ️ How Wallet Trading Works</h3>
          <div className="text-gray-300 space-y-3 text-sm">
            <p>
              <strong className="text-white">Connect Your Wallet:</strong> Use MetaMask, WalletConnect, or any Ethereum wallet on Arbitrum network.
            </p>
            <p>
              <strong className="text-white">Generate Forecasts:</strong> AI analyzes markets and generates probability estimates with confidence scores.
            </p>
            <p>
              <strong className="text-white">Submit On-Chain:</strong> Your predictions are recorded as attestations on Arbitrum using EAS (Ethereum Attestation Service).
            </p>
            <p>
              <strong className="text-white">Gas Costs:</strong> Each submission costs approximately $0.50 in gas fees on Arbitrum.
            </p>
            <p>
              <strong className="text-white">Track Performance:</strong> View your forecasts on the Sapience leaderboard.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
