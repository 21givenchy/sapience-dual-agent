/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [
    'groq-sdk',
    '@anthropic-ai/sdk',
  ],
}

module.exports = nextConfig
