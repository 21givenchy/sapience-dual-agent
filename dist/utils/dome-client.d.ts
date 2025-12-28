/**
 * Dome API Integration
 *
 * Fetches market data from Polymarket and Kalshi via Dome API
 * to enrich Sapience condition forecasts with additional market signals
 */
interface DomeMarket {
    id: string;
    question: string;
    platform: 'polymarket' | 'kalshi';
    yesPrice: number;
    noPrice: number;
    volume24h: number;
    liquidity: number;
    endDate: string;
    tags?: string[];
}
export declare class DomeAPIClient {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string, baseUrl?: string);
    /**
     * Fetch markets from Polymarket
     */
    getPolymarkets(limit?: number): Promise<DomeMarket[]>;
    /**
     * Fetch markets from Kalshi
     */
    getKalshiMarkets(limit?: number): Promise<DomeMarket[]>;
    /**
     * Fetch all markets from both platforms
     */
    getAllMarkets(): Promise<DomeMarket[]>;
    /**
     * Find markets similar to a Sapience condition
     */
    findSimilarMarkets(question: string): Promise<DomeMarket[]>;
    /**
     * Get aggregated market sentiment across platforms
     */
    getMarketSentiment(question: string): Promise<{
        avgYesPrice: number;
        avgVolume: number;
        platforms: number;
        markets: DomeMarket[];
    }>;
    /**
     * Normalize market data from different platforms
     */
    private normalizeMarkets;
    /**
     * Extract important keywords from question
     */
    private extractKeywords;
    /**
     * Calculate text similarity between questions
     */
    private calculateSimilarity;
}
export {};
//# sourceMappingURL=dome-client.d.ts.map