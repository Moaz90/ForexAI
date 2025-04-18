import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TradingSession = {
  id: string;
  is_active: boolean;
  currency_pair: string;
  timeframe: string;
  ema_period: number;
  level_multiplier: number;
  created_at: string;
  updated_at: string;
};

export type Transaction = {
  id: string;
  transaction_type: 'BUY' | 'SELL';
  currency_pair: string;
  entry_price: number;
  exit_price?: number;
  profit_loss?: number;
  ema_value: number;
  level_multiplier: number;
  market_trend: string;
  trading_session_type: 'Asian' | 'European' | 'American';
  created_at: string;
  closed_at?: string;
};

export type PerformanceMetrics = {
  id: string;
  win_rate: number;
  total_trades: number;
  profitable_trades: number;
  losing_trades: number;
  total_profit_loss: number;
  created_at: string;
  updated_at: string;
};

export type StrategySettings = {
  id: string;
  ema_period: number;
  level_multiplier: number;
  buy_stop_distance: number;
  sell_stop_distance: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export async function createTradingSession(
  currency_pair: string,
  timeframe: string,
  ema_period: number = 40,
  level_multiplier: number = 30
) {
  const { data, error } = await supabase
    .from('trading_sessions')
    .insert([
      {
        currency_pair,
        timeframe,
        ema_period,
        level_multiplier,
        is_active: true
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function recordTransaction(
  session_id: string,
  transaction_type: 'BUY' | 'SELL',
  currency_pair: string,
  entry_price: number,
  ema_value: number,
  level_multiplier: number,
  market_trend: string,
  trading_session_type: 'Asian' | 'European' | 'American'
) {
  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        session_id,
        transaction_type,
        currency_pair,
        entry_price,
        ema_value,
        level_multiplier,
        market_trend,
        trading_session_type
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updatePerformanceMetrics(
  session_id: string,
  metrics: Partial<PerformanceMetrics>
) {
  const { data, error } = await supabase
    .from('performance_metrics')
    .upsert([
      {
        session_id,
        ...metrics,
        updated_at: new Date().toISOString()
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateStrategySettings(
  session_id: string,
  settings: Partial<StrategySettings>
) {
  const { data, error } = await supabase
    .from('strategy_settings')
    .upsert([
      {
        session_id,
        ...settings,
        updated_at: new Date().toISOString()
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}