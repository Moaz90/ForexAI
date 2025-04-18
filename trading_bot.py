import os
import time
import json
import decimal
from datetime import datetime
from typing import Dict, List, Optional, TypedDict
from urllib.request import urlopen, Request
from urllib.error import URLError
from decimal import Decimal

class MarketData(TypedDict):
    timestamp: str
    open: float
    high: float
    low: float
    close: float
    volume: float

class PredictionResult(TypedDict):
    probability: float
    recommendedAction: str
    entryPrice: float
    stopLoss: float
    takeProfit: float

class MarketAnalysis(TypedDict):
    marketData: List[MarketData]
    emaValues: List[float]
    prediction: PredictionResult

class ForexTradingBot:
    def __init__(self):
        self.supabase_url = os.getenv('VITE_SUPABASE_URL')
        self.supabase_key = os.getenv('VITE_SUPABASE_ANON_KEY')
        self.alpha_vantage_key = os.getenv('ALPHA_VANTAGE_API_KEY')
        
        if not all([self.supabase_url, self.supabase_key, self.alpha_vantage_key]):
            raise ValueError("Missing required environment variables")

    def fetch_forex_data(self, symbol: str, interval: str) -> List[MarketData]:
        base_currency, quote_currency = symbol.split('/')
        url = f"https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol={base_currency}&to_symbol={quote_currency}&interval={interval}&apikey={self.alpha_vantage_key}"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
        
        try:
            req = Request(url, headers=headers)
            with urlopen(req) as response:
                data = json.loads(response.read().decode())
        except URLError as e:
            raise Exception(f"Failed to fetch forex data: {str(e)}")
        
        market_data: List[MarketData] = []
        time_series = data.get(f'Time Series FX ({interval})', {})
        
        for timestamp, values in time_series.items():
            market_data.append({
                'timestamp': timestamp,
                'open': float(values['1. open']),
                'high': float(values['2. high']),
                'low': float(values['3. low']),
                'close': float(values['4. close']),
                'volume': float(values['5. volume'])
            })
        
        return market_data

    def calculate_ema(self, data: List[MarketData], period: int) -> List[float]:
        multiplier = 2 / (period + 1)
        ema_values: List[float] = []
        
        # Initialize EMA with SMA
        sma = sum(price['close'] for price in data[:period]) / period
        ema_values.append(sma)
        
        # Calculate EMA for remaining periods
        for i in range(period, len(data)):
            ema = (data[i]['close'] - ema_values[-1]) * multiplier + ema_values[-1]
            ema_values.append(ema)
        
        return ema_values

    def analyze_market_conditions(
        self,
        data: List[MarketData],
        ema_values: List[float],
        current_price: float,
        level_multiplier: int
    ) -> PredictionResult:
        last_ema = ema_values[-1]
        price_action = data[-10:]  # Last 10 periods
        
        # Calculate volatility
        volatility = max(d['high'] for d in price_action) - min(d['low'] for d in price_action)
        
        # Calculate trend strength
        trend_strength = abs(current_price - last_ema) / volatility if volatility != 0 else 0
        
        # Calculate success probability based on historical patterns
        probability = min(0.95, trend_strength * 0.7)
        
        # Determine action based on price position relative to EMA
        recommended_action = 'WAIT'
        entry_price = current_price
        stop_loss = current_price
        take_profit = current_price
        
        pips = Decimal(str(level_multiplier)) * Decimal('0.0001')  # Convert level to pips
        
        if current_price < last_ema:
            recommended_action = 'BUY'
            entry_price = float(Decimal(str(last_ema)) - pips)
            stop_loss = float(Decimal(str(entry_price)) - pips * 2)
            take_profit = float(Decimal(str(entry_price)) + pips * 3)
        elif current_price > last_ema:
            recommended_action = 'SELL'
            entry_price = float(Decimal(str(last_ema)) + pips)
            stop_loss = float(Decimal(str(entry_price)) + pips * 2)
            take_profit = float(Decimal(str(entry_price)) - pips * 3)
        
        return {
            'probability': probability,
            'recommendedAction': recommended_action,
            'entryPrice': entry_price,
            'stopLoss': stop_loss,
            'takeProfit': take_profit
        }

    def get_market_analysis(
        self,
        symbol: str,
        interval: str,
        level_multiplier: int
    ) -> MarketAnalysis:
        # Fetch market data
        market_data = self.fetch_forex_data(symbol, interval)
        
        # Calculate EMA
        ema_values = self.calculate_ema(market_data, 40)
        
        # Get current price
        current_price = market_data[-1]['close']
        
        # Analyze market conditions and get predictions
        prediction = self.analyze_market_conditions(
            market_data,
            ema_values,
            current_price,
            level_multiplier
        )
        
        return {
            'marketData': market_data[-100:],  # Last 100 data points
            'emaValues': ema_values[-100:],
            'prediction': prediction
        }

    def start_trading_session(
        self,
        symbol: str,
        interval: str,
        level_multiplier: int
    ) -> None:
        try:
            # Get initial market analysis
            analysis = self.get_market_analysis(symbol, interval, level_multiplier)
            
            print(f"Started trading session for {symbol}")
            print(f"Current EMA: {analysis['emaValues'][-1]:.5f}")
            print(f"Recommendation: {analysis['prediction']['recommendedAction']}")
            print(f"Entry Price: {analysis['prediction']['entryPrice']:.5f}")
            print(f"Stop Loss: {analysis['prediction']['stopLoss']:.5f}")
            print(f"Take Profit: {analysis['prediction']['takeProfit']:.5f}")
            print(f"Success Probability: {analysis['prediction']['probability']*100:.1f}%")
            
            while True:
                analysis = self.get_market_analysis(symbol, interval, level_multiplier)
                
                if analysis['prediction']['recommendedAction'] != 'WAIT':
                    print("\nNew Trading Signal!")
                    print(f"Action: {analysis['prediction']['recommendedAction']}")
                    print(f"Entry Price: {analysis['prediction']['entryPrice']:.5f}")
                    print(f"Stop Loss: {analysis['prediction']['stopLoss']:.5f}")
                    print(f"Take Profit: {analysis['prediction']['takeProfit']:.5f}")
                    print(f"Success Probability: {analysis['prediction']['probability']*100:.1f}%")
                
                time.sleep(60)  # Update every minute
                
        except KeyboardInterrupt:
            print("\nStopping trading session...")
        except Exception as e:
            print(f"Error in trading session: {str(e)}")

def main():
    try:
        bot = ForexTradingBot()
        
        # Configuration
        symbol = 'EUR/USD'
        interval = '15m'
        level_multiplier = 30
        
        print(f"\nForex Trading Bot")
        print(f"Symbol: {symbol}")
        print(f"Interval: {interval}")
        print(f"Level Multiplier: {level_multiplier}")
        print("\nStarting trading session...\n")
        
        bot.start_trading_session(symbol, interval, level_multiplier)
        
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    main()