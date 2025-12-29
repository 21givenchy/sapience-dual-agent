import { NextRequest, NextResponse } from 'next/server'
import { validateConfig, API_KEYS, ETHEREUM_CONFIG } from '@/src/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')

    validateConfig()

    // Dynamic import to avoid bundling issues
    const { ForecastingAgent } = await import('@/src/agents/forecasting-agent')

    const agent = new ForecastingAgent({
      privateKey: ETHEREUM_CONFIG.PRIVATE_KEY,
      groqApiKey: API_KEYS.GROQ_API_KEY,
    })

    const conditions = await agent.getConditions(limit)

    return NextResponse.json({ 
      success: true,
      conditions,
      count: conditions.length
    })
  } catch (error: any) {
    console.error('Error fetching conditions:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
