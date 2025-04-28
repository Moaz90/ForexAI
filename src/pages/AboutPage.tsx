import React from 'react';
import ContentSection from '../components/ContentSection';
import AdPlaceholder from '../components/AdPlaceholder';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ForexEducate</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Learn more about our educational platform for forex traders.
          </p>
        </div>
      </div>
      
      <ContentSection title="Our Mission" showAd={true} adPosition="top">
        <p className="mb-6">
          At ForexEducate, our mission is to provide comprehensive, accessible, and objective educational resources for forex traders of all experience levels. We believe that proper education is the foundation of trading success, and we're committed to helping traders develop the knowledge and skills needed to navigate the complex world of currency markets.
        </p>
        
        <p className="mb-6">
          Unlike many forex websites, we focus purely on education rather than selling trading systems or promoting specific brokers. Our content is designed to help you understand market mechanisms, develop sound analytical skills, and create your own trading strategies based on proven principles.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">Our Values</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Educational Integrity:</strong> We provide balanced, realistic information about forex trading, acknowledging both its opportunities and risks.</li>
          <li><strong>Transparency:</strong> We clearly distinguish between objective analysis and subjective opinions, and we disclose the limitations of any tools or methods we discuss.</li>
          <li><strong>Continuous Improvement:</strong> We regularly update our educational content to reflect changing market conditions and evolving best practices.</li>
          <li><strong>Trader-Centric Approach:</strong> Our resources are designed based on real trader needs and questions, with a focus on practical application.</li>
        </ul>
      </ContentSection>
      
      <div className="bg-gray-50 py-8">
        <AdPlaceholder className="container mx-auto px-4" />
      </div>
      
      <ContentSection title="Disclaimer" showAd={true} adPosition="bottom">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">Risk Warning</h3>
          <p className="mb-4">
            Forex trading involves substantial risk of loss and is not suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
          <p>
            The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if you have any doubts.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Educational Purpose</h3>
        <p className="mb-6">
          All content on ForexEducate is published for educational and informational purposes only. The trading signals, analyses, and market information we provide are not personalized investment advice, nor are they an offer to buy or sell any financial instruments. 
        </p>
        
        <p className="mb-6">
          Our AI-generated signals are created for educational purposes to demonstrate how technical and fundamental analysis might be applied to identify potential trading opportunities. These signals should not be the sole basis for any trading decisions. Always conduct your own research and consider your financial situation before making any trades.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">No Guarantees</h3>
        <p className="mb-6">
          Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this website. The past performance of any trading system or methodology is not necessarily indicative of future results.
        </p>
        
        <p>
          Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite.
        </p>
      </ContentSection>
    </div>
  );
};

export default AboutPage;