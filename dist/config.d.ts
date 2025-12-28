/**
 * Configuration for Sapience agents
 */
export declare const SAPIENCE_CONFIG: {
    API_BASE_URL: string;
    MARKETS_ENDPOINT: string;
    FORECASTS_ENDPOINT: string;
    LEADERBOARD_ENDPOINT: string;
    ARBITRUM_RPC_URL: string;
    CHAIN_ID: number;
    EAS_CONTRACT_ADDRESS: string;
    USDE_TOKEN_ADDRESS: string;
    FORECASTING: {
        MIN_CONFIDENCE: number;
        MAX_MARKETS_PER_RUN: number;
        REQUEST_DELAY_MS: number;
    };
    TRADING: {
        MIN_CONFIDENCE: number;
        MIN_EXPECTED_VALUE: number;
        WAGER_AMOUNT: number;
        MAX_TRADES_PER_RUN: number;
        REQUEST_DELAY_MS: number;
    };
    MIN_LIQUIDITY: number;
    MIN_DAYS_TO_RESOLUTION: number;
    MAX_DAYS_TO_RESOLUTION: number;
};
export declare const API_KEYS: {
    ANTHROPIC: string;
    PRIVATE_KEY: string;
    SAPIENCE_API_KEY: string;
    GROQ_API_KEY: string;
    DOME_API_KEY: string;
};
export declare const ETHEREUM_CONFIG: {
    PRIVATE_KEY: string;
    ARBITRUM_RPC_URL: string;
};
export interface Config {
    groqApiKey: string;
    domeApiKey: string;
    anthropicApiKey?: string;
    agentModel: string;
    agentTemperature: number;
    agentMaxTokens: number;
    port: number;
    host: string;
    nodeEnv: string;
}
export declare function validateConfig(): Config;
//# sourceMappingURL=config.d.ts.map