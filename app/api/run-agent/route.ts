import { NextRequest, NextResponse } from 'next/server'
import { validateConfig, API_KEYS, ETHEREUM_CONFIG } from '@/src/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 300 // 5 minutes timeout

interface RunRequest {
  maxForecasts?: number
  mode?: 'full' | 'one-shot'
}

export async function POST(request: NextRequest) {
  try {
    const body: RunRequest = await request.json()
    const maxForecasts = body.maxForecasts || 2
    const mode = body.mode || 'full'

    validateConfig()

    // Dynamic import to avoid bundling issues
    const { ForecastingAgent } = await import('@/src/agents/forecasting-agent')

    const agent = new ForecastingAgent({
      privateKey: ETHEREUM_CONFIG.PRIVATE_KEY,
      groqApiKey: API_KEYS.GROQ_API_KEY,
    })

    // Run agent in background and return status
    const startTime = Date.now()
    
    if (mode === 'one-shot') {
      await agent.runOneShot()
    } else {
      await agent.run(maxForecasts)
    }

    const duration = Date.now() - startTime

    return NextResponse.json({ 
      success: true,
      message: 'Forecasting agent completed successfully',
      duration: `${(duration / 1000).toFixed(2)}s`,
      mode,
      maxForecasts
    })
  } catch (error: any) {
    console.error('Error running agent:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
