import 'dotenv/config';
import Groq from 'groq-sdk';
import { gql } from 'graphql-request';
import { graphqlRequest,  } from '@sapience/sdk';

interface Condition {
  id: string;
  question: string;
  shortName?: string;
  endTime: number;
}

interface Forecast {
  conditionId: string;
  probability: number;
  reasoning: string;
}

interface Config {
  privateKey: string;
  groqApiKey: string;
}

export class ForecastingAgent {
  private groq: Groq;
  private privateKey: string;

  constructor(config: Config) {
    this.groq = new Groq({ apiKey: config.groqApiKey });
    this.privateKey = config.privateKey.startsWith('0x') ? config.privateKey : `0x${config.privateKey}`;
  }

  async getConditions(limit: number = 20): Promise<Condition[]> {
    const nowSec = Math.floor(Date.now() / 1000);
    const query = gql`
      query Conditions($nowSec: Int, $limit: Int) {
        conditions(
          where: { 
            public: { equals: true }
            endTime: { gt: $nowSec }
          }
          take: $limit
        ) {
          id
          question
          shortName
          endTime
        }
      }
    `;
    
    const { conditions } = await graphqlRequest<{ conditions: any[] }>(query, {
      nowSec,
      limit,
    });

    console.log(`✅ Fetched ${conditions.length} active conditions`);
    
    return conditions;
  }

  async generateForecast(condition: Condition): Promise<Forecast> {
    const question = condition.shortName || condition.question;
    console.log(`\n🤖 Forecasting: ${question.substring(0, 80)}...`);

    const response = await this.groq.chat.completions.create({
      messages: [{
        role: 'user',
        content: `Estimate probability (0-100) this question resolves YES: "${question}"

Output format: probability number then brief reasoning (<160 chars)`
      }],
      model: 'moonshotai/kimi-k2-instruct-0905',
      temperature: 0.3,
      max_tokens: 150,
    });

    const content = response.choices[0]?.message?.content?.trim() || '';
    
    const probMatch = content.match(/(\d{1,3})/);
    const probability = probMatch ? Math.max(0, Math.min(100, parseInt(probMatch[1]))) : 50;
    
    const reasoning = content.replace(/\d{1,3}/g, '').trim().substring(0, 160);

    console.log(`   Probability: ${probability}%`);
    console.log(`   Reasoning: ${reasoning}`);

    return {
      conditionId: condition.id,
      probability,
      reasoning: reasoning || 'Model-based statistical forecast',
    };
  }

  async submitForecastToSapience(forecast: Forecast): Promise<string> {
    console.log(`📤 Submitting ${forecast.probability}% → ${forecast.conditionId.slice(0, 10)}...`);
    
    try {
      // The SDK expects the condition to be submitted via submitTransaction
      // with the EAS contract directly
      const { submitTransaction } = await import('@sapience/sdk');
      const { encodeAbiParameters, encodeFunctionData, parseAbiParameters } = await import('viem');
      
      // EAS contract address on Arbitrum
      const EAS_ADDRESS = '0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458';
      const SCHEMA_ID = '0x7df55bcec6eb3b17b25c503cc318a36d33b0a9bbc2d6bc0d9788f9bd61980d49';
      
      // Encode the attestation data
      const encodedData = encodeAbiParameters(
        parseAbiParameters('address resolver, bytes condition, uint256 forecast, string comment'),
        [
          '0x0000000000000000000000000000000000000000', // resolver (zero address)
          forecast.conditionId as `0x${string}`, // condition as bytes32
          BigInt(forecast.probability) * BigInt(10 ** 18), // Convert to D18 format
          forecast.reasoning
        ]
      );

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
      });

      // Submit the transaction
      const { hash } = await submitTransaction({
        rpc: 'https://arb1.arbitrum.io/rpc',
        privateKey: this.privateKey as `0x${string}`,
        tx: {
          to: EAS_ADDRESS as `0x${string}`,
          data: attestationData as `0x${string}`,
          value: '0',
        },
      });

      console.log(`✅ TX: https://arbiscan.io/tx/${hash}`);
      return hash;
    } catch (error: any) {
      console.error(`❌ Attestation failed: ${error.message}`);
      throw error;
    }
  }

  // ONE-SHOT: 5 forecasts max (your gas budget)
  async runOneShot(): Promise<void> {
    console.log("🚀 ONE-SHOT MODE: 5 forecasts for leaderboard");
    
    const conditions = await this.getConditions(20);
    if (conditions.length === 0) throw new Error('No conditions');

    // Pick 5 random long-horizon conditions (better Brier scores)
    const longHorizon = conditions
      .filter(c => c.endTime > Date.now() / 1000 + 7 * 86400) // >7 days
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    let success = 0;
    for (const condition of longHorizon) {
      try {
        const forecast = await this.generateForecast(condition);
        await this.submitForecastToSapience(forecast);
        success++;
        
        // Gas-saving delay
        await new Promise(r => setTimeout(r, 5000));
      } catch (e) {
        console.error(`❌ Skip: ${e}`);
      }
    }

    console.log(`\n🎉 COMPLETE: ${success}/5 forecasts submitted`);
    console.log(`📊 Check: https://sapience.xyz/leaderboard#accuracy`);
  }

  /**
   * Main forecasting loop
   */
  async run(maxForecasts: number = 10): Promise<void> {
    console.log("🤖 Forecasting Agent Starting...");
    console.log(`📊 Target: ${maxForecasts} forecasts\n`);

    try {
      // Fetch active conditions
      const conditions = await this.getConditions(50);
      
      if (conditions.length === 0) {
        console.log('⚠️  No active conditions found');
        return;
      }

      console.log(`\n📈 Found ${conditions.length} active conditions`);

      // Generate forecasts for random selection
      const selectedConditions = conditions
        .sort(() => Math.random() - 0.5)
        .slice(0, maxForecasts);

      let successCount = 0;
      let failCount = 0;

      for (const condition of selectedConditions) {
        try {
          const question = condition.shortName || condition.question;
          console.log(`\n🎯 Condition: ${question}`);
          console.log(`   ID: ${condition.id}`);

          // Generate forecast
          const forecast = await this.generateForecast(condition);
          console.log(`   Probability: ${forecast.probability}%`);
          console.log(`   Reasoning: ${forecast.reasoning}`);

          // Submit to Sapience
          await this.submitForecastToSapience(forecast);
          successCount++;

          // Rate limiting
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
          console.error(`  ❌ Error processing condition: ${error}`);
          failCount++;
          continue;
        }
      }

      console.log(`\n✨ Forecasting complete!`);
      console.log(`  📊 Successful: ${successCount}/${selectedConditions.length}`);
      console.log(`  ❌ Failed: ${failCount}/${selectedConditions.length}`);
      console.log(`  📍 View results at https://sapience.xyz/leaderboard`);
    } catch (error) {
      console.error("Fatal error:", error);
      throw error;
    }
  }
}
