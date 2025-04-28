import React, { useEffect, useState } from 'react';
import { RefreshCw, Info } from 'lucide-react';
import NotificationButton from '../components/NotificationButton';
import ContentSection from '../components/ContentSection';
import SignalCard from '../components/SignalCard';
import ResourceCard from '../components/ResourceCard';
import AdPlaceholder from '../components/AdPlaceholder';
import { signals, getLatestSignal, Signal } from '../data/signals';
import { resources } from '../data/resources';
import { useNotification } from '../context/NotificationContext';

const SignalsPage = () => {
  const [allSignals, setAllSignals] = useState<Signal[]>(signals);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [showInfoTooltip, setShowInfoTooltip] = useState<boolean>(false);
  const { sendNotification } = useNotification();
  
  // Simulate hourly updates with a shorter interval for demo purposes
  useEffect(() => {
    const updateInterval = setInterval(() => {
      updateSignals();
    }, 60000); // Update every minute for demo
    
    return () => clearInterval(updateInterval);
  }, []);
  
  const updateSignals = () => {
    setIsUpdating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newSignal = getLatestSignal();
      setAllSignals(prev => [newSignal, ...prev.slice(0, 5)]);
      setLastUpdated(new Date());
      setIsUpdating(false);
      
      // Send notification
      sendNotification(
        "New Trading Signal Available", 
        `${newSignal.type} signal for ${newSignal.pair} just added`
      );
    }, 1000);
  };
  
  const handleManualUpdate = () => {
    if (!isUpdating) {
      updateSignals();
    }
  };
  
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">AI-Generated Trading Signals</h1>
            <button 
              onClick={handleManualUpdate}
              disabled={isUpdating}
              className={`flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <RefreshCw className={`h-5 w-5 ${isUpdating ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
          
          <div className="flex items-center text-blue-200 mb-4">
            <p>
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <div className="relative ml-2">
              <button
                onMouseEnter={() => setShowInfoTooltip(true)}
                onMouseLeave={() => setShowInfoTooltip(false)}
                className="text-blue-200 hover:text-white"
              >
                <Info className="h-5 w-5" />
              </button>
              
              {showInfoTooltip && (
                <div className="absolute left-full ml-2 top-0 bg-white text-gray-800 p-3 rounded-lg shadow-lg text-sm w-64 z-10">
                  These signals are updated hourly and are for educational purposes only. They are not financial advice.
                </div>
              )}
            </div>
          </div>
          
          <p className="text-lg text-blue-100 max-w-2xl">
            Our AI analyzes market patterns and indicators to generate educational trading signals. Enable notifications to stay updated.
          </p>
        </div>
      </div>
      
      <NotificationButton />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSignals.map((signal) => (
            <SignalCard
              key={signal.id}
              type={signal.type}
              pair={signal.pair}
              explanation={signal.explanation}
              timestamp={signal.timestamp}
              isNew={signal.isNew}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 py-8">
        <AdPlaceholder className="container mx-auto px-4" />
      </div>
      
      <ContentSection title="Market News Education" showAd={true} adPosition="middle">
        <h3 className="text-xl font-semibold mb-4">The Importance of Economic News and Market Impact</h3>
        <p className="mb-4">
          Economic news releases are among the most influential factors that drive currency movements in the forex market. Understanding how these announcements affect currencies is essential for any trader:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Central Bank Decisions:</strong> Interest rate announcements and monetary policy statements from major central banks like the Federal Reserve, European Central Bank, or Bank of Japan can create significant volatility.</li>
          <li><strong>Employment Reports:</strong> Data like U.S. Non-Farm Payrolls or unemployment rates directly influence currency strength as they indicate economic health.</li>
          <li><strong>Inflation Metrics:</strong> Consumer Price Index (CPI) and Producer Price Index (PPI) reports signal inflationary pressures, which impact interest rate expectations.</li>
          <li><strong>GDP Releases:</strong> Gross Domestic Product figures provide a comprehensive measure of economic activity and can drive long-term currency trends.</li>
        </ul>
        
        <p className="mb-6">
          The impact of news on currency pairs depends on:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Deviation from expectations:</strong> Markets react more strongly to surprises than to anticipated results.</li>
          <li><strong>Current market sentiment:</strong> The same news can have different effects depending on existing market biases.</li>
          <li><strong>Liquidity conditions:</strong> News impact is amplified during low-liquidity periods.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">Why You Should Avoid Trading During Major News Releases</h3>
        <p className="mb-4">
          While news events create opportunities, they also present significant risks:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Slippage:</strong> Orders may be executed at prices far from your intended entry or exit points.</li>
          <li><strong>Spread widening:</strong> Brokers often increase spreads dramatically during news releases.</li>
          <li><strong>Stop-loss hunting:</strong> Sharp price spikes can trigger stop-loss orders before the market returns to previous levels.</li>
          <li><strong>False breakouts:</strong> Initial price movements may reverse quickly, trapping traders who react immediately.</li>
        </ul>
        
        <p className="mb-4">
          For most retail traders, especially beginners, it's prudent to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Close positions or tighten stop-losses before major announcements</li>
          <li>Wait 15-30 minutes after a news release before entering new positions</li>
          <li>Check economic calendars daily to plan trading around high-impact events</li>
          <li>If you must trade during news, reduce position sizes significantly</li>
        </ul>
        
        <p className="font-medium">
          Remember that consistent profitability comes from disciplined risk management, which sometimes means avoiding certain market conditions entirely.
        </p>
      </ContentSection>
      
      <ContentSection title="Useful Resources for Traders" id="tools">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              url={resource.url}
              icon={resource.icon}
            />
          ))}
        </div>
        
        <AdPlaceholder />
      </ContentSection>
    </div>
  );
};

export default SignalsPage;