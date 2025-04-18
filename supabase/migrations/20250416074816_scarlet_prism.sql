/*
  # Forex Trading Bot Database Schema

  1. New Tables
    - `trading_sessions`
      - Stores active trading sessions and their configurations
      - Includes bot status, currency pair, timeframe, and strategy settings
    
    - `transactions`
      - Records all trading transactions
      - Includes entry/exit points, profit/loss, and trade context
    
    - `performance_metrics`
      - Tracks bot performance statistics
      - Stores win rates, total trades, and other metrics
    
    - `strategy_settings`
      - Stores EMA settings and level multipliers
      - Maintains historical strategy configurations

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
*/

-- Trading Sessions Table
CREATE TABLE IF NOT EXISTS trading_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  is_active boolean DEFAULT false,
  currency_pair text NOT NULL,
  timeframe text NOT NULL,
  ema_period integer DEFAULT 40,
  level_multiplier integer DEFAULT 30,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE trading_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own trading sessions"
  ON trading_sessions
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  session_id uuid REFERENCES trading_sessions(id),
  transaction_type text NOT NULL CHECK (transaction_type IN ('BUY', 'SELL')),
  currency_pair text NOT NULL,
  entry_price decimal(10,5) NOT NULL,
  exit_price decimal(10,5),
  profit_loss decimal(10,5),
  ema_value decimal(10,5) NOT NULL,
  level_multiplier integer NOT NULL,
  market_trend text NOT NULL,
  trading_session_type text NOT NULL CHECK (trading_session_type IN ('Asian', 'European', 'American')),
  created_at timestamptz DEFAULT now(),
  closed_at timestamptz
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own transactions"
  ON transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Performance Metrics Table
CREATE TABLE IF NOT EXISTS performance_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  session_id uuid REFERENCES trading_sessions(id),
  win_rate decimal(5,2) NOT NULL,
  total_trades integer NOT NULL DEFAULT 0,
  profitable_trades integer NOT NULL DEFAULT 0,
  losing_trades integer NOT NULL DEFAULT 0,
  total_profit_loss decimal(10,2) NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their performance metrics"
  ON performance_metrics
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Strategy Settings Table
CREATE TABLE IF NOT EXISTS strategy_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  session_id uuid REFERENCES trading_sessions(id),
  ema_period integer NOT NULL DEFAULT 40,
  level_multiplier integer NOT NULL DEFAULT 30,
  buy_stop_distance integer NOT NULL,
  sell_stop_distance integer NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE strategy_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their strategy settings"
  ON strategy_settings
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);