'use client'

import { useState } from 'react'

export default function AgentControls() {
  const [isRunning, setIsRunning] = useState(false)
  const [maxForecasts, setMaxForecasts] = useState(2)
  const [mode, setMode] = useState<'full' | 'one-shot'>('full')
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  const runAgent = async () => {
    setIsRunning(true)
    setError(null)
    setResult(null)
    setLogs([])
    
    const startTime = Date.now()
    addLog('🚀 Starting forecasting agent...')
    addLog(`📊 Mode: ${mode}, Max Forecasts: ${maxForecasts}`)
    
    try {
      const response = await fetch('/api/run-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ maxForecasts, mode })
      })
      
      const data = await response.json()
      
      if (data.success) {
        addLog('✅ Agent completed successfully!')
        addLog(`⏱️  Duration: ${data.duration}`)
        setResult(data)
      } else {
        addLog('❌ Agent failed')
        setError(data.error)
      }
    } catch (err: any) {
      addLog('❌ Request failed')
      setError(err.message)
    } finally {
      const duration = ((Date.now() - startTime) / 1000).toFixed(2)
      addLog(`🏁 Total time: ${duration}s`)
      setIsRunning(false)
    }
  }

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev, `[${timestamp}] ${message}`])
  }

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">⚙️ Agent Controls</h2>
        
        <div className="space-y-6">
          {/* Mode Selection */}
          <div>
            <label className="block text-white font-semibold mb-2">Mode</label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="full"
                  checked={mode === 'full'}
                  onChange={(e) => setMode(e.target.value as 'full')}
                  className="mr-2"
                  disabled={isRunning}
                />
                <span className="text-gray-300">
                  Full Mode (Evaluate all markets)
                </span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="one-shot"
                  checked={mode === 'one-shot'}
                  onChange={(e) => setMode(e.target.value as 'one-shot')}
                  className="mr-2"
                  disabled={isRunning}
                />
                <span className="text-gray-300">
                  One-Shot (5 random markets)
                </span>
              </label>
            </div>
          </div>

          {/* Max Forecasts Slider */}
          {mode === 'full' && (
            <div>
              <label className="block text-white font-semibold mb-2">
                Max Forecasts: {maxForecasts}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={maxForecasts}
                onChange={(e) => setMaxForecasts(parseInt(e.target.value))}
                disabled={isRunning}
                className="w-full"
              />
              <div className="flex justify-between text-gray-400 text-sm mt-1">
                <span>1</span>
                <span>5</span>
                <span>10</span>
              </div>
            </div>
          )}

          {/* Run Button */}
          <button
            onClick={runAgent}
            disabled={isRunning}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:scale-100"
          >
            {isRunning ? '⏳ Running Agent...' : '🚀 Run Forecasting Agent'}
          </button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-900 border border-red-600 text-red-200 rounded-lg p-4">
          <div className="font-bold mb-2">❌ Error</div>
          <div className="text-sm">{error}</div>
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="bg-green-900 border border-green-600 text-green-200 rounded-lg p-4">
          <div className="font-bold mb-2">✅ Success</div>
          <div className="text-sm space-y-1">
            <p>Duration: {result.duration}</p>
            <p>Mode: {result.mode}</p>
            {result.maxForecasts && <p>Max Forecasts: {result.maxForecasts}</p>}
          </div>
        </div>
      )}

      {/* Logs */}
      {logs.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">📋 Logs</h3>
          <div className="bg-black rounded-lg p-4 font-mono text-sm space-y-1 max-h-96 overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="text-gray-300">{log}</div>
            ))}
          </div>
        </div>
      )}

      {/* Info Panel */}
      <div className="bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-300 mb-4">ℹ️ How It Works</h3>
        <div className="text-gray-300 space-y-3 text-sm">
          <p>
            <strong className="text-white">Full Mode:</strong> Evaluates all active markets, generates forecasts for each, and submits the top predictions based on confidence and edge.
          </p>
          <p>
            <strong className="text-white">One-Shot Mode:</strong> Quickly generates and submits 5 forecasts for random long-horizon markets. Best for leaderboard entry.
          </p>
          <p>
            <strong className="text-white">Gas Costs:</strong> Each forecast submission costs approximately $4-5 in gas fees on Arbitrum (at $3000/ETH).
          </p>
          <p>
            <strong className="text-white">Strategy:</strong> The agent uses Groq AI to analyze market conditions and generate probability estimates with confidence scores.
          </p>
        </div>
      </div>
    </div>
  )
}
