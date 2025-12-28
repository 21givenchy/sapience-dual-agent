/**
 * Demo script to test fetching markets from Kalshi and Polymarket
 * and generating forecasts using Groq
 */
interface Market {
    id: string;
    question: string;
    description: string;
    source: 'kalshi' | 'polymarket';
    yes_price: number;
    no_price: number;
    volume?: number;
    end_date?: string;
}
interface Forecast {
    market: Market;
    probability: number;
    confidence: number;
    reasoning: string;
    recommendation: 'BUY_YES' | 'BUY_NO' | 'SKIP';
}
declare class DemoAgent {
    private groq;
    constructor();
    /**
     * Fetch a market from Kalshi
     */
    fetchKalshiMarket(): Promise<Market | null>;
    /**
     * Fetch a market from Polymarket
     */
    fetchPolymarketMarket(): Promise<Market | null>;
    /**
     * Generate a forecast using Groq
     */
    generateForecast(market: Market): Promise<Forecast>;
    /**
     * Display forecast results
     */
    displayForecast(forecast: Forecast): void;
    /**
     * Run the demo
     */
    run(): Promise<void>;
}
export default DemoAgent;
//# sourceMappingURL=demo.d.ts.map