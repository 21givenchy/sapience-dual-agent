'use client'

import { useState, useEffect } from 'react'

interface Condition {
  id: string
  question: string
  shortName?: string
  endTime: number
}

interface ForecastResult {
  conditionId: string
  probability: number
  confidence: number
  edge: number
  reasoning: string
}

export default function MarketList() {
  const [conditions, setConditions] = useState<Condition[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null)
  const [forecast, setForecast] = useState<ForecastResult | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchConditions()
  }, [])

  const fetchConditions = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/conditions?limit=50')
      const data = await response.json()
      
      if (data.success) {
        setConditions(data.conditions)
      } else {
        setError(data.error)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const generateForecast = async (condition: Condition) => {
    setSelectedCondition(condition)
    setIsGenerating(true)
    setError(null)
    setForecast(null)
    
    try {
      const response = await fetch('/api/forecast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conditionId: condition.id,
          question: condition.shortName || condition.question,
          endTime: condition.endTime
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setForecast(data.forecast)
      } else {
        setError(data.error)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const submitForecast = async () => {
    if (!forecast || !selectedCondition) return
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conditionId: forecast.conditionId,
          probability: forecast.probability,
          reasoning: forecast.reasoning
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        // Save to localStorage
        const saved = localStorage.getItem('sapience-forecasts')
        const forecasts = saved ? JSON.parse(saved) : []
        forecasts.unshift({
          ...forecast,
          question: selectedCondition.shortName || selectedCondition.question,
          timestamp: new Date().toISOString(),
          status: 'submitted',
          transactionHash: data.transactionHash
        })
        localStorage.setItem('sapience-forecasts', JSON.stringify(forecasts))
        
        alert(`✅ Forecast submitted! TX: ${data.transactionHash.slice(0, 10)}...`)
        setForecast(null)
        setSelectedCondition(null)
      } else {
        setError(data.error)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Active Markets</h2>
        <button
          onClick={fetchConditions}
          disabled={isLoading}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
        >
          {isLoading ? '⏳ Loading...' : '🔄 Refresh'}
        </button>
      </div>

      {error && (
        <div className="bg-red-900 border border-red-600 text-red-200 rounded-lg p-4">
          ❌ {error}
        </div>
      )}

      {/* Forecast Panel */}
      {forecast && selectedCondition && (
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 border-2 border-purple-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">🎯 Generated Forecast</h3>
          
          <div className="bg-black bg-opacity-30 rounded-lg p-4 mb-4">
            <h4 className="text-white font-semibold mb-2">
              {selectedCondition.shortName || selectedCondition.question}
            </h4>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-gray-300 text-sm">Probability</div>
                <div className="text-2xl font-bold text-purple-300">{forecast.probability}%</div>
              </div>
              <div>
                <div className="text-gray-300 text-sm">Confidence</div>
                <div className="text-2xl font-bold text-blue-300">{forecast.confidence}%</div>
              </div>
              <div>
                <div className="text-gray-300 text-sm">Edge</div>
                <div className="text-2xl font-bold text-green-300">{forecast.edge.toFixed(1)}%</div>
              </div>
            </div>
            
            <div className="text-gray-200 text-sm">
              <span className="font-semibold">Reasoning:</span> {forecast.reasoning}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={submitForecast}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
            >
              {isSubmitting ? '⏳ Submitting...' : '📤 Submit to Chain'}
            </button>
            <button
              onClick={() => {
                setForecast(null)
                setSelectedCondition(null)
              }}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Market List */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        {isLoading ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-6xl mb-4">⏳</div>
            <p>Loading markets...</p>
          </div>
        ) : conditions.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-6xl mb-4">📊</div>
            <p>No active markets found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {conditions.map((condition) => (
              <div 
                key={condition.id}
                className="bg-gray-900 border border-gray-600 rounded-lg p-4 hover:border-purple-500 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <h3 className="text-white font-semibold mb-1">
                      {condition.shortName || condition.question}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Ends: {new Date(condition.endTime * 1000).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => generateForecast(condition)}
                    disabled={isGenerating}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
                  >
                    {isGenerating && selectedCondition?.id === condition.id 
                      ? '⏳ Generating...' 
                      : '🤖 Generate Forecast'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
