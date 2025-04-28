import React from 'react';
import { BarChart, Calendar, LineChart, Newspaper } from 'lucide-react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Investing.com',
    description: 'Comprehensive financial portal with real-time quotes, charts, financial tools, breaking news and analysis.',
    url: 'https://www.investing.com/',
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    id: '2',
    title: 'ForexFactory.com',
    description: 'Leading forex trading forum with economic calendar, market forecasts and technical analysis.',
    url: 'https://www.forexfactory.com/',
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    id: '3',
    title: 'TradingView.com',
    description: 'Advanced financial visualization platform with social networking and technical analysis tools.',
    url: 'https://www.tradingview.com/',
    icon: <BarChart className="h-6 w-6" />,
  },
  {
    id: '4',
    title: 'DailyFX.com',
    description: 'Professional forex trading news and analysis, market forecasts and educational resources.',
    url: 'https://www.dailyfx.com/',
    icon: <Newspaper className="h-6 w-6" />,
  },
];