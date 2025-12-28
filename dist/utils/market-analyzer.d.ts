/**
 * Market analysis utilities
 */
export interface MarketMetrics {
    spread: number;
    spreadPercent: number;
    liquidityScore: number;
    volatility: number;
    timeToResolution: number;
    marketConcentration: number;
}
export declare function calculateMarketMetrics(yesPriceObj: {
    bid: number;
    ask: number;
}, noPriceObj: {
    bid: number;
    ask: number;
}, liquidity: number, resolutionDate: string): MarketMetrics;
export declare function calculateKellyCriteria(probability: number, odds: number): number;
export declare function calculateExpectedValue(probability: number, odds: number, wagerAmount: number): number;
//# sourceMappingURL=market-analyzer.d.ts.map