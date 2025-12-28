/**
 * Sapience Forecasting Agent
 *
 * Generates predictions and publishes forecasts via Sapience SDK
 * on Arbitrum. Predictions are ranked by accuracy on the Sapience leaderboard.
 *
 * No trading capital required - pure forecasting.
 */
interface Condition {
    id: string;
    question: string;
    shortName?: string;
    description?: string;
    endTime: number;
    public: boolean;
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
interface SubmissionResult {
    hash: string;
    conditionId: string;
}
interface Config {
    privateKey: string;
    groqApiKey: string;
    domeApiKey?: string;
    domeApiUrl?: string;
}
export declare class ForecastingAgent {
    private groq;
    private privateKey;
    private domeClient?;
    constructor(config: Config);
    /**
     * Fetch active conditions from Sapience API
     */
    getConditions(): Promise<Condition[]>;
    /**
     * Generate a forecast using Groq with Kimi model
     */
    generateForecast(condition: Condition): Promise<Forecast>;
    /**
     * Submit forecast via Sapience SDK
     */
    submitForecastToSapience(forecast: Forecast): Promise<SubmissionResult>;
    /**
     * Main forecasting loop
     */
    run(maxForecasts?: number): Promise<void>;
}
export {};
//# sourceMappingURL=forecasting-agent.d.ts.map