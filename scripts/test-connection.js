#!/usr/bin/env node
/**
 * Connection Test Script
 * 
 * Test wallet, Sapience API, and Groq AI connectivity
 */

const { ethers } = require('ethers');
const { gql } = require('graphql-request');
const { graphqlRequest } = require('@sapience/sdk');
const Groq = require('groq-sdk').default;
require('dotenv').config();

async function testWallet() {
  console.log('\n🔑 Testing wallet configuration...');
  
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    console.error('❌ PRIVATE_KEY not found in .env');
    return false;
  }
  
  try {
    const key = privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`;
    const wallet = new ethers.Wallet(key);
    console.log('✅ Wallet address:', wallet.address);
    
    // Check balance
    const rpcUrl = process.env.ARBITRUM_RPC_URL || 'https://arb1.arbitrum.io/rpc';
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const balance = await provider.getBalance(wallet.address);
    
    console.log(`💰 Balance: ${ethers.formatEther(balance)} ETH`);
    
    if (balance === 0n) {
      console.log('⚠️  Wallet has no ETH. Fund it at: https://bridge.arbitrum.io/');
      console.log('   You need ~0.01 ETH for gas fees');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Wallet error:', error.message);
    return false;
  }
}

async function testSapienceAPI() {
  console.log('\n📊 Testing Sapience API...');
  
  try {
    const nowSec = Math.floor(Date.now() / 1000);
    const query = gql`
      query Conditions($nowSec: Int) {
        conditions(
          where: { 
            public: { equals: true }
            endTime: { gt: $nowSec }
          }
          take: 5
        ) {
          id
          question
          endTime
        }
      }
    `;
    
    const { conditions } = await graphqlRequest(query, { nowSec });
    
    console.log(`✅ Found ${conditions.length} active conditions`);
    if (conditions.length > 0) {
      console.log('   Example:', conditions[0].question);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Sapience API error:', error.message);
    return false;
  }
}

async function testGroqAPI() {
  console.log('\n🤖 Testing Groq AI...');
  
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error('❌ GROQ_API_KEY not found in .env');
    return false;
  }
  
  try {
    const groq = new Groq({ apiKey });
    
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: 'Say hello!' }],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 50,
    });
    
    const response = completion.choices[0]?.message?.content || '';
    console.log('✅ Groq API working');
    console.log('   Response:', response.slice(0, 50) + '...');
    
    return true;
  } catch (error) {
    console.error('❌ Groq API error:', error.message);
    if (error.message.includes('401')) {
      console.error('   Get a new API key at: https://console.groq.com/keys');
    }
    return false;
  }
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('🧪 Sapience Agent Connection Test');
  console.log('═══════════════════════════════════════════════════');
  
  const results = {
    wallet: await testWallet(),
    sapience: await testSapienceAPI(),
    groq: await testGroqAPI(),
  };
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('📋 Test Results:');
  console.log('═══════════════════════════════════════════════════');
  console.log(`Wallet: ${results.wallet ? '✅' : '❌'}`);
  console.log(`Sapience API: ${results.sapience ? '✅' : '❌'}`);
  console.log(`Groq AI: ${results.groq ? '✅' : '❌'}`);
  
  const allPassed = Object.values(results).every(r => r);
  
  if (allPassed) {
    console.log('\n🎉 All tests passed! Ready to run agents.');
    console.log('   Run: pnpm dev');
  } else {
    console.log('\n⚠️  Some tests failed. Fix issues above before running agents.');
  }
  
  console.log('\n');
}

main().catch(console.error);
