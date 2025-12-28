/**
 * Dome API Integration
 * 
 * Fetches market data from Polymarket and Kalshi via Dome API
 * to enrich Sapience condition forecasts with additional market signals
 */

import axios from 'axios';

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

export class DomeAPIClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.domeapi.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Fetch markets from Polymarket
   */
  async getPolymarkets(limit: number = 50): Promise<DomeMarket[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/polymarket/markets`, {
        headers: {
          'X-API-Key': this.apiKey,
          'Content-Type': 'application/json',
        },
        params: {
          status: 'active',
          limit,
        },
        timeout: 5000,
      });

      return this.normalizeMarkets(response.data, 'polymarket');
    } catch (error: any) {
      if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
        return [];
      }
      return [];
    }
  }

  /**
   * Fetch markets from Kalshi
   */
  async getKalshiMarkets(limit: number = 50): Promise<DomeMarket[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/kalshi/markets`, {
        headers: {
          'X-API-Key': this.apiKey,
          'Content-Type': 'application/json',
        },
        params: {
          status: 'active',
          limit,
        },
        timeout: 5000,
      });

      return this.normalizeMarkets(response.data, 'kalshi');
    } catch (error: any) {
      if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
        return [];
      }
      return [];
    }
  }

  /**
   * Fetch all markets from both platforms
   */
  async getAllMarkets(): Promise<DomeMarket[]> {
    const [polymarkets, kalshiMarkets] = await Promise.all([
      this.getPolymarkets(),
      this.getKalshiMarkets(),
    ]);

    return [...polymarkets, ...kalshiMarkets];
  }

  /**
   * Find markets similar to a Sapience condition
   */
  async findSimilarMarkets(question: string): Promise<DomeMarket[]> {
    const allMarkets = await this.getAllMarkets();
    
    const questionLower = question.toLowerCase();
    const keywords = this.extractKeywords(questionLower);

    return allMarkets
      .map(market => ({
        market,
        similarity: this.calculateSimilarity(questionLower, market.question.toLowerCase(), keywords),
      }))
      .filter(({ similarity }) => similarity > 0.3)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3)
      .map(({ market }) => market);
  }

  /**
   * Get aggregated market sentiment across platforms
   */
  async getMarketSentiment(question: string): Promise<{
    avgYesPrice: number;
    avgVolume: number;
    platforms: number;
    markets: DomeMarket[];
  }> {
    const markets = await this.findSimilarMarkets(question);

    if (markets.length === 0) {
      return {
        avgYesPrice: 0.5,
        avgVolume: 0,
        platforms: 0,
        markets: [],
      };
    }

    const avgYesPrice = markets.reduce((sum, m) => sum + m.yesPrice, 0) / markets.length;
    const avgVolume = markets.reduce((sum, m) => sum + m.volume24h, 0) / markets.length;
    const platforms = new Set(markets.map(m => m.platform)).size;

    return {
      avgYesPrice,
      avgVolume,
      platforms,
      markets,
    };
  }

  /**
   * Normalize market data from different platforms
   */
  private normalizeMarkets(data: any, platform: 'polymarket' | 'kalshi'): DomeMarket[] {
    if (!data || !Array.isArray(data.markets)) {
      return [];
    }

    return data.markets.map((m: any) => ({
      id: m.id || m.market_id,
      question: m.question || m.title,
      platform,
      yesPrice: m.yes_price || m.price || 0.5,
      noPrice: m.no_price || (1 - (m.yes_price || 0.5)),
      volume24h: m.volume_24h || m.volume || 0,
      liquidity: m.liquidity || m.open_interest || 0,
      endDate: m.end_date || m.close_time || m.expiration,
      tags: m.tags || [],
    }));
  }

  /**
   * Extract important keywords from question
   */
  private extractKeywords(text: string): string[] {
    const stopWords = ['will', 'be', 'the', 'a', 'an', 'by', 'before', 'after', 'on', 'in', 'at'];
    
    return text
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.includes(word))
      .slice(0, 5);
  }

  /**
   * Calculate text similarity between questions
   */
  private calculateSimilarity(text1: string, text2: string, keywords: string[]): number {
    let keywordScore = 0;
    keywords.forEach(keyword => {
      if (text2.includes(keyword)) keywordScore += 0.2;
    });

    const words1 = new Set(text1.split(/\s+/));
    const words2 = new Set(text2.split(/\s+/));
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    const overlapScore = intersection.size / Math.max(words1.size, words2.size);

    return Math.min(keywordScore + overlapScore, 1);
  }
}
