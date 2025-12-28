# Wallet Setup Script for Windows
# Run with: powershell -ExecutionPolicy Bypass -File scripts\wallet-setup.ps1

Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🔐 Sapience Wallet Setup Helper" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host "This script will help you:" -ForegroundColor Yellow
Write-Host "  1. Check Node.js and dependencies" -ForegroundColor White
Write-Host "  2. Generate or check your Ethereum wallet" -ForegroundColor White
Write-Host "  3. Test connections to APIs`n" -ForegroundColor White

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor Cyan
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js $nodeVersion installed`n" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Install from https://nodejs.org/`n" -ForegroundColor Red
    exit 1
}

# Check if in project directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Not in project directory. Run from project root.`n" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
pnpm install
Write-Host ""

# Menu
Write-Host "Choose an option:" -ForegroundColor Yellow
Write-Host "  1. Generate new wallet" -ForegroundColor White
Write-Host "  2. Check existing wallet" -ForegroundColor White
Write-Host "  3. Test all connections" -ForegroundColor White
Write-Host "  4. Exit`n" -ForegroundColor White

$choice = Read-Host "Enter choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host "`n🔑 Generating new wallet...`n" -ForegroundColor Cyan
        node scripts/wallet-helper.js
    }
    "2" {
        Write-Host "`n🔍 Checking wallet...`n" -ForegroundColor Cyan
        node scripts/wallet-helper.js
    }
    "3" {
        Write-Host "`n🧪 Testing connections...`n" -ForegroundColor Cyan
        node scripts/test-connection.js
    }
    "4" {
        Write-Host "Goodbye!`n" -ForegroundColor Green
        exit 0
    }
    default {
        Write-Host "❌ Invalid choice`n" -ForegroundColor Red
        exit 1
    }
}

Write-Host "`nDone!`n" -ForegroundColor Green
