'use client'

import { useState, useEffect } from 'react'

interface Forecast {
  conditionId: string
  question: string
  probability: number
  confidence: number
  edge: number
  reasoning: string
  timestamp: string
  status: 'pending' | 'submitted' | 'failed'
  transactionHash?: string
}

export default function ForecastingDashboard() {
  const [forecasts, setForecasts] = useState<Forecast[]>([])
  const [stats, setStats] = useState({
    totalForecasts: 0,
    successRate: 100,
    avgConfidence: 0,
    gasSpent: 0
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Load forecasts from localStorage
    const saved = localStorage.getItem('sapience-forecasts')
    if (saved) {
      const parsed = JSON.parse(saved)
      setForecasts(parsed)
      calculateStats(parsed)
    }
  }, [])

  const calculateStats = (forecastList: Forecast[]) => {
    if (forecastList.length === 0) return

    const submitted = forecastList.filter(f => f.status === 'submitted')
    const avgConf = forecastList.reduce((sum, f) => sum + f.confidence, 0) / forecastList.length

    setStats({
      totalForecasts: forecastList.length,
      successRate: (submitted.length / forecastList.length) * 100,
      avgConfidence: avgConf,
      gasSpent: submitted.length * 0.0015 * 3000 // Approximate
    })
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-gray-400 text-sm mb-1">Total Forecasts</div>
          <div className="text-3xl font-bold text-purple-400">{stats.totalForecasts}</div>
        </div>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-gray-400 text-sm mb-1">Success Rate</div>
          <div className="text-3xl font-bold text-green-400">{stats.successRate.toFixed(1)}%</div>
        </div>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-gray-400 text-sm mb-1">Avg Confidence</div>
          <div className="text-3xl font-bold text-blue-400">{stats.avgConfidence.toFixed(1)}%</div>
        </div>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-gray-400 text-sm mb-1">Gas Spent</div>
          <div className="text-3xl font-bold text-yellow-400">${stats.gasSpent.toFixed(2)}</div>
        </div>
      </div>

      {/* Recent Forecasts */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Forecasts</h2>
        
        {forecasts.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-6xl mb-4">🤖</div>
            <p>No forecasts yet. Run the agent to generate predictions!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {forecasts.slice(0, 10).map((forecast, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold flex-1 mr-4">
                    {forecast.question.substring(0, 100)}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    forecast.status === 'submitted' 
                      ? 'bg-green-900 text-green-300'
                      : forecast.status === 'failed'
                      ? 'bg-red-900 text-red-300'
                      : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {forecast.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <div className="text-gray-400 text-xs">Probability</div>
                    <div className="text-purple-400 font-bold text-lg">{forecast.probability}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Confidence</div>
                    <div className="text-blue-400 font-bold text-lg">{forecast.confidence}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Edge</div>
                    <div className="text-green-400 font-bold text-lg">{forecast.edge.toFixed(1)}%</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-2">{forecast.reasoning}</p>
                
                {forecast.transactionHash && (
                  <a 
                    href={`https://arbiscan.io/tx/${forecast.transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-xs"
                  >
                    View on Arbiscan →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
