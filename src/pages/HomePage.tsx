import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import AdPlaceholder from '../components/AdPlaceholder';

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Master Forex Trading with Educational Resources"
        subtitle="Learn to navigate the currency markets with confidence through our comprehensive guides and insights."
        ctaText="View Trading Signals"
        ctaLink="/signals"
        image="#"
      />
      
      <ContentSection title="Introduction to Forex Trading" showAd={true} adPosition="top">
        <h3 className="text-xl font-semibold mb-4">What is Forex?</h3>
        <p className="mb-4">
          The Foreign Exchange market (Forex) is the global marketplace where currencies are traded. With a daily volume exceeding $6.6 trillion, it's the largest and most liquid financial market in the world, operating 24 hours a day, five days a week.
        </p>
        <p className="mb-6">
          Unlike stock markets which have physical locations, Forex is an over-the-counter market where trading is conducted electronically through computer networks between traders worldwide.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">How Forex Works and Market Hours</h3>
        <p className="mb-4">
          Currencies are always traded in pairs, such as EUR/USD or GBP/JPY. The first currency (EUR in EUR/USD) is the base currency, and the second (USD) is the quote currency. The price represents how much of the quote currency is needed to buy one unit of the base currency.
        </p>
        <p className="mb-6">
          The Forex market operates in sessions, following the business hours of major financial centers around the world:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Sydney: 9:00 PM - 6:00 AM GMT</li>
          <li>Tokyo: 12:00 AM - 9:00 AM GMT</li>
          <li>London: 8:00 AM - 4:00 PM GMT</li>
          <li>New York: 1:00 PM - 10:00 PM GMT</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">Major Currencies and Pairs</h3>
        <p className="mb-4">
          There are several categories of currency pairs:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Major pairs:</strong> These involve the US dollar paired with other major currencies like EUR/USD, USD/JPY, GBP/USD, and USD/CHF.</li>
          <li><strong>Minor pairs:</strong> These don't include the US dollar, such as EUR/GBP or AUD/NZD.</li>
          <li><strong>Exotic pairs:</strong> These combine a major currency with the currency of a smaller or emerging economy, like USD/TRY or EUR/PLN.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">Who Moves the Market</h3>
        <p className="mb-4">
          Several key participants influence the Forex market:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Central Banks:</strong> Their monetary policies, interest rate decisions, and interventions can dramatically impact currency values.</li>
          <li><strong>Commercial Banks:</strong> Major players that handle large transactions for clients and engage in speculative trading.</li>
          <li><strong>Investment Managers:</strong> They trade currencies to manage international portfolios.</li>
          <li><strong>Hedge Funds:</strong> Often make large, speculative positions based on anticipated currency movements.</li>
          <li><strong>Retail Traders:</strong> Individual traders who participate through online trading platforms.</li>
        </ul>
      </ContentSection>
      
      <div className="bg-gray-50 py-8">
        <AdPlaceholder className="container mx-auto px-4" />
      </div>
      
      <ContentSection 
        title="How to Turn a $1000 Forex Account into $1 Million" 
        id="trading-plan"
        showAd={true}
        adPosition="bottom"
      >
        <h3 className="text-xl font-semibold mb-4">The Reality of Compounding in Trading</h3>
        <p className="mb-4">
          While turning $1,000 into $1 million requires extraordinary discipline and consistent performance, understanding the mathematics of compounding can show how it's theoretically possible over time.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">Capital Management: The Foundation</h3>
        <p className="mb-4">
          The most critical aspect of long-term trading success is proper capital management. Here are the key principles:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Risk per trade:</strong> Never risk more than 1-2% of your account on any single trade.</li>
          <li><strong>Drawdown management:</strong> If you lose 5% of your account, reduce position sizes by half until you recover.</li>
          <li><strong>Profit taking:</strong> Have clear profit targets based on technical levels, not arbitrary percentages.</li>
          <li><strong>Scaling:</strong> As your account grows, maintain the same percentage risk rather than increasing it.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">Risk-to-Reward Ratio: The Growth Engine</h3>
        <p className="mb-4">
          A positive risk-to-reward ratio is essential for account growth, even with a win rate below 50%:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Aim for at least a 1:2 risk-to-reward ratio (risk $1 to potentially gain $2).</li>
          <li>With a 1:3 ratio, you can be profitable with just a 30% win rate.</li>
          <li>Example: If you risk 1% per trade with a 1:3 ratio and 40% win rate:
            <ul className="list-disc pl-6 mt-2">
              <li>40 winning trades: +120% (40 trades × 3% gain each)</li>
              <li>60 losing trades: -60% (60 trades × 1% loss each)</li>
              <li>Net result: +60% over 100 trades</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">Compounding Logic: The Path to a Million</h3>
        <p className="mb-4">
          Here's a simplified projection of how compounding can work, assuming a consistent 5% monthly return:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 p-2">Year</th>
                <th className="border border-gray-300 p-2">Starting Balance</th>
                <th className="border border-gray-300 p-2">Ending Balance</th>
                <th className="border border-gray-300 p-2">Annual Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Year 1</td>
                <td className="border border-gray-300 p-2">$1,000</td>
                <td className="border border-gray-300 p-2">$1,796</td>
                <td className="border border-gray-300 p-2">79.6%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Year 2</td>
                <td className="border border-gray-300 p-2">$1,796</td>
                <td className="border border-gray-300 p-2">$3,225</td>
                <td className="border border-gray-300 p-2">79.6%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Year 5</td>
                <td className="border border-gray-300 p-2">$18,679</td>
                <td className="border border-gray-300 p-2">$33,546</td>
                <td className="border border-gray-300 p-2">79.6%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Year 10</td>
                <td className="border border-gray-300 p-2">$201,827</td>
                <td className="border border-gray-300 p-2">$362,476</td>
                <td className="border border-gray-300 p-2">79.6%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Year 15</td>
                <td className="border border-gray-300 p-2">$2,179,459</td>
                <td className="border border-gray-300 p-2">$3,914,295</td>
                <td className="border border-gray-300 p-2">79.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 italic mb-6">
          Note: This is a theoretical model and doesn't account for withdrawals, varying market conditions, or psychological challenges.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">Importance of Discipline and Patience</h3>
        <p className="mb-4">
          The greatest obstacles to achieving these returns are psychological:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Overtrading:</strong> Taking too many trades reduces your edge and increases costs.</li>
          <li><strong>Revenge trading:</strong> Trying to recover losses quickly often leads to larger losses.</li>
          <li><strong>Impatience:</strong> Expecting to become wealthy quickly leads to excessive risk-taking.</li>
          <li><strong>Inconsistency:</strong> Changing strategies frequently prevents you from developing expertise.</li>
        </ul>
        <p className="mb-4">
          Successful traders follow their trading plan religiously, even when it's difficult to do so. They understand that compounding works best when you protect your capital during drawdowns and maximize gains during favorable periods.
        </p>
        <p className="font-medium">
          Remember: The path to growing a small account into a substantial one is a marathon, not a sprint. Focus on consistent execution, proper risk management, and emotional discipline rather than chasing unrealistic returns.
        </p>
      </ContentSection>
    </div>
  );
};

export default HomePage;