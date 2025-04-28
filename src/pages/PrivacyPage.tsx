import React from 'react';
import ContentSection from '../components/ContentSection';

const PrivacyPage = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
      
      <ContentSection title="Privacy Policy">
        <p className="mb-6">
          At ForexEducate, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
        <p className="mb-4">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Identity Data:</strong> includes first name, last name, username.</li>
          <li><strong>Contact Data:</strong> includes email address.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website.</li>
          <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">2. How We Use Your Data</h3>
        <p className="mb-4">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
          <li>To provide educational content and resources related to forex trading.</li>
          <li>To send notifications about new trading signals if you have opted in to receive them.</li>
          <li>To improve our website and ensure content is presented in the most effective manner for you.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">3. Cookies</h3>
        <p className="mb-6">
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, see our Cookie Policy.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">4. Third-Party Advertising</h3>
        <p className="mb-6">
          We use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, please see our Cookie Policy.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">5. Data Security</h3>
        <p className="mb-6">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">6. Your Legal Rights</h3>
        <p className="mb-4">
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Right to withdraw consent.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">7. Changes to This Privacy Policy</h3>
        <p className="mb-6">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">8. Contact Us</h3>
        <p className="mb-4">
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:privacy@forexeducate.com" className="text-blue-600 hover:underline">privacy@forexeducate.com</a>
        </p>
      </ContentSection>
    </div>
  );
};

export default PrivacyPage;