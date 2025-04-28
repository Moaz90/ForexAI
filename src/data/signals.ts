export interface Signal {
  id: string;
  type: 'Buy' | 'Sell';
  pair: string;
  explanation: string;
  timestamp: string;
  isNew?: boolean;
}

const currentDate = new Date();

export const signals: Signal[] = [
  {
    id: '1',
    type: 'Buy',
    pair: 'EUR/USD',
    explanation: 'Approaching strong support level at 1.0920 with RSI showing oversold conditions. Potential upward bounce expected.',
    timestamp: new Date(currentDate.getTime() - 15 * 60000).toLocaleString(),
  },
  {
    id: '2',
    type: 'Sell',
    pair: 'GBP/JPY',
    explanation: 'Resistance zone identified at 152.80 with overbought RSI. Bearish divergence on 4-hour chart.',
    timestamp: new Date(currentDate.getTime() - 35 * 60000).toLocaleString(),
  },
  {
    id: '3',
    type: 'Sell',
    pair: 'USD/CAD',
    explanation: 'Failed breakout of key level at 1.3650 suggests bearish continuation. MACD showing negative momentum.',
    timestamp: new Date(currentDate.getTime() - 55 * 60000).toLocaleString(),
  },
  {
    id: '4',
    type: 'Buy',
    pair: 'AUD/USD',
    explanation: 'Double bottom pattern formed on the hourly chart with bullish confirmation. Stochastic moving out of oversold territory.',
    timestamp: new Date(currentDate.getTime() - 75 * 60000).toLocaleString(),
  },
  {
    id: '5',
    type: 'Buy',
    pair: 'XAU/USD',
    explanation: 'Golden cross on daily chart with increasing volume. Safe-haven demand rising due to geopolitical tensions.',
    timestamp: new Date(currentDate.getTime() - 95 * 60000).toLocaleString(),
  },
  {
    id: '6',
    type: 'Sell',
    pair: 'NZD/USD',
    explanation: 'Head and shoulders pattern completion with neckline break. Bearish pressure expected to continue.',
    timestamp: new Date(currentDate.getTime() - 115 * 60000).toLocaleString(),
  },
];

export function getLatestSignal(): Signal {
  return {
    id: '7',
    type: 'Buy',
    pair: 'EUR/JPY',
    explanation: 'Breakout confirmed above resistance with strong momentum. Potential continuation of uptrend.',
    timestamp: new Date().toLocaleString(),
    isNew: true,
  };
}