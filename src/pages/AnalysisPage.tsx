import React from 'react';
import ContentSection from '../components/ContentSection';
import AdPlaceholder from '../components/AdPlaceholder';

const AnalysisPage = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Types of Forex Analysis</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Understanding the different approaches to analyzing forex markets is essential for developing a well-rounded trading strategy.
          </p>
        </div>
      </div>
      
      <ContentSection title="Technical Analysis" showAd={true} adPosition="top">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">What is Technical Analysis?</h3>
            <p className="mb-4">
              Technical analysis is the study of historical price movements and patterns to forecast future price movements. It's based on the premise that market prices reflect all available information and that price movements are not random but move in identifiable patterns and trends that repeat over time.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Key Technical Analysis Tools</h3>
            <h4 className="font-medium mb-2">Support and Resistance</h4>
            <p className="mb-4">
              Support levels are prices where a currency pair has historically struggled to fall below, often due to increased buying interest. Resistance levels are prices where a currency pair has struggled to rise above, often due to increased selling pressure.
            </p>
            
            <h4 className="font-medium mb-2">Chart Patterns</h4>
            <p className="mb-4">
              Recognizable formations that can signal continuation or reversal of trends:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Reversal patterns:</strong> Head and shoulders, double tops/bottoms</li>
              <li><strong>Continuation patterns:</strong> Flags, pennants, triangles</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Trend Analysis</h4>
            <p className="mb-4">
              Identifying the direction of market movement:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Uptrend:</strong> Series of higher highs and higher lows</li>
              <li><strong>Downtrend:</strong> Series of lower highs and lower lows</li>
              <li><strong>Range/Sideways:</strong> No clear directional movement</li>
            </ul>
            
            <h4 className="font-medium mb-2">Technical Indicators</h4>
            <p className="mb-4">
              Mathematical calculations based on price and/or volume:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Trend indicators:</strong> Moving averages, MACD, ADX</li>
              <li><strong>Momentum indicators:</strong> RSI, Stochastic Oscillator</li>
              <li><strong>Volatility indicators:</strong> Bollinger Bands, ATR</li>
              <li><strong>Volume indicators:</strong> OBV, Volume Profile</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">Practical Application</h4>
              <p>
                Effective technical analysis rarely relies on a single indicator or pattern. Instead, traders look for confluence – when multiple technical factors align to suggest the same outcome. For example, a resistance level coinciding with an overbought RSI reading and a bearish divergence creates a stronger case for a potential reversal than any of these signals alone.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Fundamental Analysis" showAd={true} adPosition="middle">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">What is Fundamental Analysis?</h3>
          <p className="mb-4">
            Fundamental analysis in forex examines economic indicators, social factors, and government policies to determine a currency's intrinsic value. Unlike technical analysis, which focuses on price movements, fundamental analysis looks at the underlying forces that drive currency valuations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Economic Indicators</h3>
            <h4 className="font-medium mb-2">Interest Rates</h4>
            <p className="mb-4">
              Perhaps the most influential factor in currency valuation. Higher interest rates tend to attract foreign capital, increasing demand for the domestic currency. Central bank statements and minutes are carefully analyzed for hints about future rate changes.
            </p>
            
            <h4 className="font-medium mb-2">Inflation</h4>
            <p className="mb-4">
              Measured by CPI (Consumer Price Index) and PPI (Producer Price Index), inflation affects purchasing power and influences central bank policies. Unexpected inflation rates can cause significant currency movements.
            </p>
            
            <h4 className="font-medium mb-2">GDP (Gross Domestic Product)</h4>
            <p className="mb-4">
              The broadest measure of a country's economic activity. Strong GDP growth typically strengthens a currency, while weak or negative growth can weaken it. Quarterly GDP reports and revisions are major market-moving events.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Employment Data</h4>
            <p className="mb-4">
              Job creation, unemployment rates, and wage growth indicate economic health and consumer spending potential. The U.S. Non-Farm Payrolls report is one of the most closely watched economic releases globally.
            </p>
            
            <h4 className="font-medium mb-2">Trade Balance</h4>
            <p className="mb-4">
              The difference between a country's exports and imports. Persistent trade deficits can pressure a currency downward over time, while surpluses may strengthen it.
            </p>
            
            <h4 className="font-medium mb-2">Geopolitical Factors</h4>
            <p className="mb-4">
              Elections, trade agreements, sanctions, and conflicts can dramatically impact currency values, often creating volatility and long-term trends. Safe-haven currencies like the USD, JPY, and CHF tend to strengthen during global uncertainty.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Long-Term vs. Short-Term Impact</h4>
              <p>
                Fundamental factors operate on different timeframes. Interest rates and monetary policy may influence long-term trends, while economic releases often create short-term volatility. Professional traders align their timeframes with the appropriate fundamental catalysts.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <div className="bg-gray-50 py-8">
        <AdPlaceholder className="container mx-auto px-4" />
      </div>
      
      <ContentSection title="Sentiment Analysis" showAd={true} adPosition="bottom">
        <h3 className="text-xl font-semibold mb-4">What is Sentiment Analysis?</h3>
        <p className="mb-6">
          Sentiment analysis examines the collective psychology of market participants. It attempts to gauge whether traders and investors are bullish or bearish on a particular currency pair, and when sentiment reaches extremes, it can signal potential turning points in the market.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Market Sentiment Indicators</h3>
            <h4 className="font-medium mb-2">Commitment of Traders (COT) Report</h4>
            <p className="mb-4">
              Published weekly by the CFTC, this report shows the net long or short positions of different trader categories in the futures market. Large imbalances in positioning can indicate potential market reversals when they reach extremes.
            </p>
            
            <h4 className="font-medium mb-2">Put/Call Ratio</h4>
            <p className="mb-4">
              While primarily used in options markets, this indicator can reflect sentiment in related currency markets. A high put/call ratio suggests bearish sentiment, while a low ratio indicates bullishness.
            </p>
            
            <h4 className="font-medium mb-2">Retail Positioning Data</h4>
            <p className="mb-4">
              Some brokers publish the percentage of their clients who are long or short on various currency pairs. Since retail traders are often wrong at market extremes, this can be used as a contrarian indicator.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">The Psychology of Market Participants</h3>
            <h4 className="font-medium mb-2">Fear and Greed</h4>
            <p className="mb-4">
              These powerful emotions often drive markets to extremes. Excessive fear can create oversold conditions, while greed can lead to overbought markets. Recognizing these emotional states can help identify potential reversal points.
            </p>
            
            <h4 className="font-medium mb-2">Contrarian Trading</h4>
            <p className="mb-4">
              This approach involves taking positions opposite to prevailing market sentiment when it reaches extremes. The theory is that if "everyone" is bullish and already long, there may be few buyers left to push prices higher.
            </p>
            
            <h4 className="font-medium mb-2">News Sentiment Analysis</h4>
            <p className="mb-4">
              Advanced traders analyze the tone and volume of financial news coverage related to currencies. Some use algorithmic tools that quantify news sentiment through natural language processing.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Combining Analysis Methods</h4>
              <p>
                The most sophisticated forex traders integrate technical, fundamental, and sentiment analysis to form a comprehensive market view. This multi-faceted approach helps identify high-probability trading opportunities while managing risk effectively.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default AnalysisPage;