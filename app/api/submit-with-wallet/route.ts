import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface SubmitWithWalletRequest {
  conditionId: string
  probability: number
  reasoning: string
  signature: string
  address: string
}

export async function POST(request: NextRequest) {
  try {
    const body: SubmitWithWalletRequest = await request.json()
    
    if (!body.conditionId || body.probability === undefined || !body.reasoning) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!body.signature || !body.address) {
      return NextResponse.json(
        { success: false, error: 'Missing wallet signature or address' },
        { status: 400 }
      )
    }

    // Import viem for transaction building
    const { createWalletClient, http, encodeAbiParameters, encodeFunctionData, parseAbiParameters, custom } = await import('viem')
    const { arbitrum } = await import('viem/chains')
    
    // EAS contract address on Arbitrum
    const EAS_ADDRESS = '0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458'
    const SCHEMA_ID = '0x7df55bcec6eb3b17b25c503cc318a36d33b0a9bbc2d6bc0d9788f9bd61980d49'
    
    // Encode the attestation data
    const encodedData = encodeAbiParameters(
      parseAbiParameters('address resolver, bytes condition, uint256 forecast, string comment'),
      [
        '0x0000000000000000000000000000000000000000', // resolver (zero address)
        body.conditionId as `0x${string}`,
        BigInt(body.probability) * BigInt(10 ** 18),
        body.reasoning
      ]
    )

    // Build EAS attest call
    const attestationData = encodeFunctionData({
      abi: [{
        name: 'attest',
        type: 'function',
        inputs: [{
          name: 'request',
          type: 'tuple',
          components: [
            { name: 'schema', type: 'bytes32' },
            {
              name: 'data',
              type: 'tuple',
              components: [
                { name: 'recipient', type: 'address' },
                { name: 'expirationTime', type: 'uint64' },
                { name: 'revocable', type: 'bool' },
                { name: 'refUID', type: 'bytes32' },
                { name: 'data', type: 'bytes' },
                { name: 'value', type: 'uint256' },
              ],
            },
          ],
        }],
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'payable',
      }],
      functionName: 'attest',
      args: [{
        schema: SCHEMA_ID,
        data: {
          recipient: '0x0000000000000000000000000000000000000000',
          expirationTime: 0n,
          revocable: false,
          refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
          data: encodedData,
          value: 0n,
        },
      }],
    })

    // Return transaction data for frontend to sign
    return NextResponse.json({ 
      success: true,
      transaction: {
        to: EAS_ADDRESS,
        data: attestationData,
        value: '0',
      },
      message: 'Transaction prepared. Sign and broadcast from your wallet.'
    })
  } catch (error: any) {
    console.error('Error preparing wallet transaction:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
