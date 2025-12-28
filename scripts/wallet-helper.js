#!/usr/bin/env node
/**
 * Wallet Helper Script
 * 
 * Generate or check Ethereum wallet from private key
 */

const { ethers } = require('ethers');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function generateWallet() {
  console.log('\n🔑 Generating new Ethereum wallet...\n');
  
  const wallet = ethers.Wallet.createRandom();
  
  console.log('✅ Wallet generated successfully!\n');
  console.log('Address:', wallet.address);
  console.log('Private Key:', wallet.privateKey);
  console.log('\n⚠️  IMPORTANT: Save your private key securely!');
  console.log('⚠️  Never share it or commit it to git!');
  console.log('\nAdd this to your .env file:');
  console.log(`PRIVATE_KEY=${wallet.privateKey.slice(2)}`); // Remove 0x prefix
  console.log('\n');
}

async function checkWallet() {
  const privateKey = await question('\nEnter your private key (with or without 0x): ');
  
  try {
    const key = privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`;
    const wallet = new ethers.Wallet(key);
    
    console.log('\n✅ Valid private key!\n');
    console.log('Address:', wallet.address);
    console.log('\nTo fund this wallet on Arbitrum:');
    console.log('1. Get ETH on mainnet (Coinbase, Binance, etc.)');
    console.log('2. Bridge to Arbitrum: https://bridge.arbitrum.io/');
    console.log('3. Or use a faucet (testnet only)');
    console.log('\n');
  } catch (error) {
    console.error('\n❌ Invalid private key!\n');
  }
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('🔐 Ethereum Wallet Helper');
  console.log('═══════════════════════════════════════════════════');
  
  const choice = await question('\n1. Generate new wallet\n2. Check existing wallet\n\nChoice (1 or 2): ');
  
  if (choice === '1') {
    await generateWallet();
  } else if (choice === '2') {
    await checkWallet();
  } else {
    console.log('\nInvalid choice. Exiting.');
  }
  
  rl.close();
}

main().catch(console.error);
