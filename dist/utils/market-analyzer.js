"use strict";
/**
 * Market analysis utilities
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMarketMetrics = calculateMarketMetrics;
exports.calculateKellyCriteria = calculateKellyCriteria;
exports.calculateExpectedValue = calculateExpectedValue;
function calculateMarketMetrics(yesPriceObj, noPriceObj, liquidity, resolutionDate) {
    const yesMid = (yesPriceObj.bid + yesPriceObj.ask) / 2;
    const noMid = (noPriceObj.bid + noPriceObj.ask) / 2;
    const spread = Math.abs(yesMid - noMid);
    const spreadPercent = (spread / Math.max(yesMid, noMid)) * 100;
    const liquidityScore = Math.min(liquidity / 10000, 1); // Normalize to 0-1
    const now = new Date();
    const resolution = new Date(resolutionDate);
    const daysUntilResolution = (resolution.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    // Markets that are too close to resolution have lower value
    const marketConcentration = Math.min(yesMid, noMid) / Math.max(yesMid, noMid);
    return {
        spread,
        spreadPercent,
        liquidityScore,
        volatility: 0., 5: , // Would calculate from price history
        timeToResolution: daysUntilResolution,
        marketConcentration,
    };
}
function calculateKellyCriteria(probability, odds) {
    /**
     * Kelly Criterion:  f = (bp - q) / b
     * f = fraction of bankroll to bet
     * b = odds
     * p = probability
     * q = 1 - p
     */
    const q = 1 - probability;
    const b = odds - 1;
    const f = (b * probability - q) / b;
    // Use fractional Kelly (1/4) for safety
    return Math.max(0, f / 4);
}
function calculateExpectedValue(probability, odds, wagerAmount) {
    /**
     * EV = (probability * payout) - (1 - probability) * wager
     */
    const payout = wagerAmount * odds;
    const loss = wagerAmount * (1 - probability);
    return probability * payout - (1 - probability) * loss;
}
//# sourceMappingURL=market-analyzer.js.map