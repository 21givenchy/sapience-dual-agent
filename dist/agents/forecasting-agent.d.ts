import 'dotenv/config';
interface Condition {
    id: string;
    question: string;
    shortName?: string;
    endTime: number;
    description?: string;
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
export declare class ForecastingAgent {
    private groq;
    private privateKey;
    private chainId;
    constructor(config: Config);
    getConditions(limit?: number): Promise<Condition[]>;
    generateForecast(condition: Condition): Promise<Forecast>;
    submitForecastToSapience(forecast: Forecast): Promise<string>;
    runOneShot(): Promise<void>;
}
export {};
//# sourceMappingURL=forecasting-agent.d.ts.map