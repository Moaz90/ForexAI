import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.7";
import { format } from "npm:date-fns@2.30.0";
import Decimal from "npm:decimal.js@10.4.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface MarketData {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface PredictionResult {
  probability: number;
  recommendedAction: 'BUY' | 'SELL' | 'WAIT';
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
}

async function fetchForexData(symbol: string, interval: string, apiKey: string): Promise<MarketData[]> {
  if (!apiKey) {
    throw new Error("Alpha Vantage API key is required");
  }

  const [fromSymbol, toSymbol] = symbol.split('/');
  const url = `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&interval=${interval}&apikey=${apiKey}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Alpha Vantage API error: ${response.statusText}`);
  }

  const data = await response.json();
  const timeSeriesKey = `Time Series FX (${interval})`;
  
  if (!data[timeSeriesKey]) {
    throw new Error("Invalid response from Alpha Vantage API");
  }
  
  return Object.entries(data[timeSeriesKey]).map(([timestamp, values]: [string, any]) => ({
    timestamp,
    open: parseFloat(values['1. open']),
    high: parseFloat(values['2. high']),
    low: parseFloat(values['3. low']),
    close: parseFloat(values['4. close']),
    volume: parseFloat(values['5. volume'])
  }));
}

function calculateEMA(data: MarketData[], period: number): number[] {
  const multiplier = 2 / (period + 1);
  const emaValues: number[] = [];
  
  // Initialize EMA with SMA
  let sma = data.slice(0, period).reduce((sum, price) => sum + price.close, 0) / period;
  emaValues.push(sma);
  
  // Calculate EMA for remaining periods
  for (let i = period; i < data.length; i++) {
    const ema = (data[i].close - emaValues[emaValues.length - 1]) * multiplier + emaValues[emaValues.length - 1];
    emaValues.push(ema);
  }
  
  return emaValues;
}

function analyzeMarketConditions(
  data: MarketData[],
  emaValues: number[],
  currentPrice: number,
  levelMultiplier: number
): PredictionResult {
  const lastEMA = emaValues[emaValues.length - 1];
  const priceAction = data.slice(-10); // Last 10 periods
  
  // Calculate volatility
  const volatility = new Decimal(Math.max(...priceAction.map(d => d.high)) - Math.min(...priceAction.map(d => d.low)));
  
  // Calculate trend strength
  const trendStrength = new Decimal(Math.abs(currentPrice - lastEMA)).div(volatility);
  
  // Calculate success probability based on historical patterns
  const probability = Math.min(0.95, trendStrength.times(0.7).toNumber());
  
  // Determine action based on price position relative to EMA
  let recommendedAction: 'BUY' | 'SELL' | 'WAIT' = 'WAIT';
  let entryPrice = currentPrice;
  let stopLoss = currentPrice;
  let takeProfit = currentPrice;
  
  const pips = new Decimal(levelMultiplier).times(0.0001); // Convert level to pips
  
  if (currentPrice < lastEMA) {
    recommendedAction = 'BUY';
    entryPrice = new Decimal(lastEMA).minus(pips).toNumber();
    stopLoss = new Decimal(entryPrice).minus(pips.times(2)).toNumber();
    takeProfit = new Decimal(entryPrice).plus(pips.times(3)).toNumber();
  } else if (currentPrice > lastEMA) {
    recommendedAction = 'SELL';
    entryPrice = new Decimal(lastEMA).plus(pips).toNumber();
    stopLoss = new Decimal(entryPrice).plus(pips.times(2)).toNumber();
    takeProfit = new Decimal(entryPrice).minus(pips.times(3)).toNumber();
  }
  
  return {
    probability,
    recommendedAction,
    entryPrice,
    stopLoss,
    takeProfit
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { symbol, interval, levelMultiplier, apiKey } = await req.json();
    
    if (!apiKey) {
      throw new Error("Alpha Vantage API key is required");
    }
    
    // Fetch market data
    const marketData = await fetchForexData(symbol, interval, apiKey);
    
    // Calculate EMA
    const emaValues = calculateEMA(marketData, 40);
    
    // Get current price
    const currentPrice = marketData[marketData.length - 1].close;
    
    // Analyze market conditions and get predictions
    const prediction = analyzeMarketConditions(
      marketData,
      emaValues,
      currentPrice,
      levelMultiplier
    );
    
    return new Response(
      JSON.stringify({
        marketData: marketData.slice(-100), // Last 100 data points
        emaValues: emaValues.slice(-100),
        prediction
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});