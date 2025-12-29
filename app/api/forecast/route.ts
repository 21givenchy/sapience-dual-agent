import { NextRequest, NextResponse } from 'next/server'
import { validateConfig, API_KEYS, ETHEREUM_CONFIG } from '@/src/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface ForecastRequest {
  conditionId: string
  question: string
  endTime: number
}

export async function POST(request: NextRequest) {
  try {
    const body: ForecastRequest = await request.json()
    
    if (!body.conditionId || !body.question) {
      return NextResponse.json(
        { success: false, error: 'Missing conditionId or question' },
        { status: 400 }
      )
    }

    validateConfig()

    // Dynamic import to avoid bundling issues
    const { ForecastingAgent } = await import('@/src/agents/forecasting-agent')

    const agent = new ForecastingAgent({
      privateKey: ETHEREUM_CONFIG.PRIVATE_KEY,
      groqApiKey: API_KEYS.GROQ_API_KEY,
    })

    const forecast = await agent.generateForecast({
      id: body.conditionId,
      question: body.question,
      endTime: body.endTime,
    })

    return NextResponse.json({ 
      success: true,
      forecast
    })
  } catch (error: any) {
    console.error('Error generating forecast:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
