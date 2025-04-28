import React from 'react';
import ContentSection from '../components/ContentSection';

const TermsPage = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
      
      <ContentSection title="Terms and Conditions">
        <p className="mb-6">
          These terms and conditions ("Terms") govern your use of the ForexEducate website and all content, services, and products available at or through the website. Please read these Terms carefully before accessing or using our website.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
        <p className="mb-6">
          By accessing or using our website, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">2. Educational Purpose</h3>
        <p className="mb-6">
          The content on ForexEducate is strictly for educational and informational purposes only. We do not provide financial advice, investment advice, or trading advice. All information provided on this site is general in nature and does not take into account your personal objectives, financial situation, or needs.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">3. Risk Warning</h3>
        <p className="mb-6">
          Forex trading involves substantial risk of loss and is not suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">4. Trading Signals</h3>
        <p className="mb-6">
          The trading signals provided on our website are for educational purposes only and should not be construed as investment advice or a recommendation to buy or sell any financial instrument. These signals are generated using algorithmic analysis and do not consider your personal circumstances. Past performance is not indicative of future results, and no representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">5. Intellectual Property</h3>
        <p className="mb-6">
          The content on ForexEducate, including text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of ForexEducate or its content suppliers and protected by copyright and intellectual property laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service or content without express written permission from us.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">6. User Contributions</h3>
        <p className="mb-6">
          Any content, including comments or feedback, that you submit to our website may be used by us for any lawful purpose. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">7. Third-Party Links</h3>
        <p className="mb-6">
          Our website may contain links to third-party websites or services that are not owned or controlled by ForexEducate. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that ForexEducate shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">8. Limitation of Liability</h3>
        <p className="mb-6">
          In no event shall ForexEducate, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">9. Changes to Terms</h3>
        <p className="mb-6">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">10. Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:terms@forexeducate.com" className="text-blue-600 hover:underline">terms@forexeducate.com</a>.
        </p>
      </ContentSection>
    </div>
  );
};

export default TermsPage;