/**
 * Test script to fetch markets from DomeAPI SDK and forecast with Groq
 */
interface Market {
    id: string;
    title: string;
    description: string;
    platform: 'kalshi' | 'polymarket';
    yes_price: number;
    no_price: number;
    volume?: number;
    close_date?: string;
    slug?: string;
}
interface Forecast {
    market: Market;
    probability: number;
    confidence: number;
    reasoning: string;
    recommendation: 'BUY_YES' | 'BUY_NO' | 'SKIP';
    expected_value: number;
}
declare class DomeGroqTester {
    private dome;
    private groq;
    constructor();
    /**
     * Fetch markets from Polymarket via Dome SDK
     */
    fetchPolymarketMarkets(limit?: number): Promise<Market[]>;
    /**
     * Fetch specific Polymarket market by slug
     */
    fetchPolymarketMarketBySlug(slug: string): Promise<Market | null>;
    /**
     * Fetch markets from Kalshi via Dome SDK
     */
    fetchKalshiMarkets(limit?: number): Promise<Market[]>;
    /**
     * Generate forecast using Groq with Moonshot AI model
     */
    generateForecast(market: Market): Promise<Forecast>;
    /**
     * Display forecast results
     */
    displayForecast(forecast: Forecast): void;
    /**
     * Run the test
     */
    run(): Promise<void>;
}
export default DomeGroqTester;
//# sourceMappingURL=test-dome-groq.d.ts.map