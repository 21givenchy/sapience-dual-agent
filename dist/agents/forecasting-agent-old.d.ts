/**
 * Sapience Forecasting Agent
 *
 * Generates predictions and publishes forecasts to the Ethereum Attestation Service (EAS)
 * on Arbitrum. Predictions are ranked by accuracy on the Sapience leaderboard.
 *
 * No trading capital required - pure forecasting.
 */
interface Market {
    id: string;
    question: string;
    description: string;
    platform?: string;
    currentPrice?: number;
    volume?: number;
    closeTime?: number;
    resolution_date?: string;
    yes_price?: number;
    no_price?: number;
    liquidity?: number;
}
interface Forecast {
    marketId: string;
    probability: number;
    confidence: number;
    reasoning: string;
    expectedValue?: number;
    recommendation?: string;
    timestamp: number;
    modelUsed?: string;
}
interface EASAttestation {
    uid: string;
    schema_uid: string;
    transaction_hash: string;
    block_number: number;
}
interface Config {
    privateKey: string;
    arbitrumRpcUrl: string;
    easSchemaUID: string;
    groqApiKey: string;
}
export declare class ForecastingAgent {
    private groq;
    private provider;
    private signer;
    private easContractAddress;
    private easSchemaUID;
    private walletAddress;
    private config;
    constructor(config: Config);
    /**
     * Fetch active markets from Sapience
     */
    getMarkets(): Promise<Market[]>;
    /**
     * Generate a forecast using Groq with Kimi model
     */
    generateForecast(market: Market): Promise<Forecast>;
    /**
     * Attest forecast onchain via EAS
     */
    attestForecast(forecast: Forecast): Promise<EASAttestation>;
    /**
     * Main forecasting loop
     */
    run(maxForecasts?: number): Promise<void>;
}
export {};
//# sourceMappingURL=forecasting-agent-old.d.ts.map