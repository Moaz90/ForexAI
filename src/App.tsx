import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, TrendingUp, Timer, AlertCircle, ArrowUpCircle, ArrowDownCircle, RefreshCw } from 'lucide-react';
import { getMarketAnalysis, startTradingSession, type MarketAnalysis } from './lib/market-data';
import { format } from 'date-fns';
import { WelcomeModal } from './components/WelcomeModal';
import { AdSense } from './components/AdSense';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';


import ReactGA from 'react-ga4';
ReactGA.initialize('G-1DW61HRHDL'); 
ReactGA.set({ debug: true });
window.gtag('event', 'اسم_الحدث', {
  event_category: 'category',
  event_label: 'label',
  value: 123,
});

const timeFrames = ['1m', '5m', '15m', '30m', '1h', '4h', '1d'];
const currencyPairs = ['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'AUD/USD', 'USD/CAD'];

function App() {

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-1DW61HRHDL', {
        page_path: location.pathname,
      });
    } else {
      console.error("Google Analytics is not loaded correctly.");
    }
  }, [location]);

  const [isRunning, setIsRunning] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('15m');
  const [selectedPair, setSelectedPair] = useState('EUR/USD');
  const [marketAnalysis, setMarketAnalysis] = useState<MarketAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<string>('0:00:00');
  const [nextUpdate, setNextUpdate] = useState<number>(300);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  useEffect(() => {
    const hideWelcomeModal = localStorage.getItem('hideWelcomeModal');
    if (hideWelcomeModal === 'true') {
      setShowWelcomeModal(false);
    }
  }, []);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;
    let updateInterval: NodeJS.Timeout;

    if (isRunning) {
      timerInterval = setInterval(() => {
        if (startTime) {
          const now = new Date();
          const diff = now.getTime() - startTime.getTime();
          const hours = Math.floor(diff / 3600000);
          const minutes = Math.floor((diff % 3600000) / 60000);
          const seconds = Math.floor((diff % 60000) / 1000);
          setElapsedTime(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        }
      }, 1000);

      updateInterval = setInterval(() => {
        setNextUpdate(prev => {
          if (prev <= 1) {
            fetchMarketAnalysis();
            return 300;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
      clearInterval(updateInterval);
    };
  }, [isRunning, startTime]);

  const fetchMarketAnalysis = async () => {
    try {
      setError(null);
      const analysis = await getMarketAnalysis(selectedPair, selectedTimeFrame, 30);
      setMarketAnalysis(analysis);
    } catch (error) {
      console.error('Error fetching market analysis:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch market analysis');
      setIsRunning(false);
    }
  };

  const handleStartStop = async () => {
    try {
      setError(null);
      if (!isRunning) {
        await startTradingSession(selectedPair, selectedTimeFrame, 30);
        setIsRunning(true);
        setStartTime(new Date());
        fetchMarketAnalysis();
      } else {
        setIsRunning(false);
        setStartTime(null);
        setElapsedTime('0:00:00');
        setNextUpdate(300);
      }
    } catch (error) {
      console.error('Error handling start/stop:', error);
      setError(error instanceof Error ? error.message : 'Failed to start trading session');
      setIsRunning(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
        
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 mobile-full">
                <Link to="/" className="flex items-center space-x-2">
                  <Brain className="h-8 w-8 text-indigo-600" />
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Advanced Forex Trading AI</h1>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 mobile-full mobile-stack">
                <select
                  value={selectedPair}
                  onChange={(e) => setSelectedPair(e.target.value)}
                  className="px-3 py-2 border border-gray-300  rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50 transition-colors mobile-full mobile-padding"
                  disabled={isRunning}
                >
                  {currencyPairs.map(pair => (
                    <option key={pair} value={pair}>{pair}</option>
                  ))}
                </select>
                <button
                  onClick={handleStartStop}
                  className={`snake-button flex items-center justify-center px-6 py-2 rounded-md text-white font-medium transition-all duration-300 transform hover:scale-105 mobile-full mobile-padding relative ${
                    isRunning
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                  } shadow-lg hover:shadow-xl`}
                >
                  <svg className={isRunning ? 'inactive' : 'active'}>
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="6"
                    />
                  </svg>
                  <span className="relative z-10">
                    {isRunning ? 'Stop Trading Bot' : 'Activate Trading Bot'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-6">
                  {isRunning && (
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
                      <div className="flex flex-wrap gap-6 justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="bg-indigo-100 p-2 rounded-full">
                            <Timer className="h-6 w-6 text-indigo-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Session Duration</div>
                            <div className="font-mono text-lg text-indigo-600">{elapsedTime}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="bg-orange-100 p-2 rounded-full">
                            <RefreshCw className="h-6 w-6 text-orange-600 animate-spin" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Next Signal Update</div>
                            <div className="font-mono text-lg text-orange-600">{nextUpdate}s</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center">
                        <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                        <div>
                          <h3 className="text-red-800 font-medium">System Alert</h3>
                          <p className="text-red-600 mt-1">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {marketAnalysis && (
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="bg-indigo-100 p-2 rounded-full">
                              <TrendingUp className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Market Intelligence Signal</h2>
                          </div>
                          <div className="text-sm text-gray-500">
                            Last Updated: {format(new Date(), 'HH:mm:ss')}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className={`p-6 rounded-xl shadow-inner ${
                            marketAnalysis.prediction.recommendedAction === 'BUY' 
                              ? 'bg-green-50 border border-green-200' 
                              : marketAnalysis.prediction.recommendedAction === 'SELL'
                              ? 'bg-red-50 border border-red-200'
                              : 'bg-gray-50 border border-gray-200'
                          }`}>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-medium text-gray-700">AI Trading Signal</span>
                              <div className="flex items-center space-x-3">
                                {marketAnalysis.prediction.recommendedAction === 'BUY' && (
                                  <div className="flex items-center space-x-2 text-green-600">
                                    <ArrowUpCircle className="h-8 w-8" />
                                    <span className="text-xl font-bold">LONG POSITION</span>
                                  </div>
                                )}
                                {marketAnalysis.prediction.recommendedAction === 'SELL' && (
                                  <div className="flex items-center space-x-2 text-red-600">
                                    <ArrowDownCircle className="h-8 w-8" />
                                    <span className="text-xl font-bold">SHORT POSITION</span>
                                  </div>
                                )}
                                {marketAnalysis.prediction.recommendedAction === 'WAIT' && (
                                  <div className="flex items-center space-x-2 text-gray-600">
                                    <Timer className="h-8 w-8" />
                                    <span className="text-xl font-bold">HOLD POSITION</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Market Analysis</h3>
                            <div className="space-y-4 text-gray-700">
                              <p className="leading-relaxed">{marketAnalysis.prediction.marketCondition}</p>
                              <p className="leading-relaxed">{marketAnalysis.prediction.tradingOpportunity}</p>
                            </div>
                          </div>

                          <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                              Technical Analysis Insights
                            </h3>
                            <ul className="space-y-3">
                              {marketAnalysis.prediction.technicalFactors.map((factor, index) => (
                                <li key={index} className="flex items-center text-indigo-700">
                                  <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3" />
                                  {factor}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                            <h3 className="text-lg font-semibold text-purple-900 mb-4">
                              Fundamental Market Drivers
                            </h3>
                            <ul className="space-y-3">
                              {marketAnalysis.prediction.fundamentalFactors.map((factor, index) => (
                                <li key={index} className="flex items-center text-purple-700">
                                  <div className="h-2 w-2 bg-purple-500 rounded-full mr-3" />
                                  {factor}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 font-medium">Signal Confidence Level</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-indigo-600 rounded-full"
                                    style={{ width: `${marketAnalysis.prediction.probability * 100}%` }}
                                  />
                                </div>
                                <span className="font-mono font-bold text-indigo-600">
                                  {(marketAnalysis.prediction.probability * 100).toFixed(1)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

            <AdSense 
            client="ca-pub-9135473927777985"
             slot="4611003438" 
             className="adsbygoogle" />
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <AdSense
                      client="ca-pub-9135473927777985"
                      slot="7403436353"
                      format="auto"
                      className="adsbygoogle"
                      style={{ minHeight: '600px' }}
                    />
                  </div>
                </div>
              </div>
            </main>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;