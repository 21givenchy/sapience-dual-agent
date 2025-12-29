import { NextRequest, NextResponse } from 'next/server'
import { validateConfig, API_KEYS, ETHEREUM_CONFIG } from '@/src/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface SubmitRequest {
  conditionId: string
  probability: number
  reasoning: string
}

export async function POST(request: NextRequest) {
  try {
    const body: SubmitRequest = await request.json()
    
    if (!body.conditionId || body.probability === undefined || !body.reasoning) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: conditionId, probability, reasoning' },
        { status: 400 }
      )
    }

    if (body.probability < 0 || body.probability > 100) {
      return NextResponse.json(
        { success: false, error: 'Probability must be between 0 and 100' },
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

    const hash = await agent.submitForecastToSapience({
      conditionId: body.conditionId,
      probability: body.probability,
      reasoning: body.reasoning,
    })

    return NextResponse.json({ 
      success: true,
      transactionHash: hash,
      explorerUrl: `https://arbiscan.io/tx/${hash}`
    })
  } catch (error: any) {
    console.error('Error submitting forecast:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
