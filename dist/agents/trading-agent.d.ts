/**
 * Sapience Trading Agent
 *
 * Generates predictions and executes trades with 1 USDe wagers on Sapience markets.
 * Agent is ranked by profit/loss on the Sapience leaderboard.
 *
 * Requires capital deployment.
 */
interface Market {
    id: string;
    question: string;
    description: string;
    platform?: string;
    yes_price?: number;
    no_price?: number;
    liquidity?: number;
    resolution_date?: string;
}
interface Prediction {
    market_id: string;
    market_question: string;
    predicted_outcome: "YES" | "NO";
    confidence: number;
    reasoning: string;
    recommendation: "BUY_YES" | "BUY_NO" | "SKIP";
    expected_value: number;
}
interface Config {
    groqApiKey: string;
    privateKey: string;
    arbitrumRpcUrl?: string;
}
interface Forecast {
    probability: number;
    confidence: number;
    expectedValue: number;
    reasoning: string;
}
interface TradeDecision {
    marketId: string;
    action: 'buy' | 'sell' | 'skip';
    size: number;
    reasoning: string;
    timestamp: number;
    confidence: number;
    expectedReturn: number;
    riskScore: number;
    stopLoss: number | null;
    takeProfit: number | null;
}
export declare class TradingAgent {
    private groq;
    private provider;
    private walletAddress;
    private minConfidence;
    private minExpectedValue;
    constructor(config: Config);
    /**
     * Fetch active markets from Sapience
     */
    getMarkets(): Promise<Market[]>;
    /**
     * Evaluate a trade using Groq and Kimi model
     */
    evaluateTrade(market: Market, forecast: Forecast): Promise<TradeDecision>;
    /**
     * Determine if a prediction should be traded
     */
    shouldTrade(prediction: Prediction): boolean;
    /**
     * Main trading loop
     */
    run(maxTrades?: number): Promise<void>;
}
export {};
//# sourceMappingURL=trading-agent.d.ts.map