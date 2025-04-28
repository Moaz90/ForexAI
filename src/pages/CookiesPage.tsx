import React from 'react';
import ContentSection from '../components/ContentSection';

const CookiesPage = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookies Policy</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
      
      <ContentSection title="Cookies Policy">
        <p className="mb-6">
          This Cookies Policy explains what cookies are and how we use them on our website. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies, and how that information is used.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">1. What Are Cookies</h3>
        <p className="mb-6">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">2. How We Use Cookies</h3>
        <p className="mb-4">
          We use cookies for a variety of reasons detailed below:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Essential cookies:</strong> These cookies are essential to provide you with services available through our website and to enable you to use some of its features.</li>
          <li><strong>Functionality cookies:</strong> These cookies allow our website to remember choices you make when you use our website, such as remembering your notification preferences.</li>
          <li><strong>Analytics cookies:</strong> These cookies are used to collect information about how visitors use our website. The information collected includes the number of visitors, the websites that referred them, the pages they visited, what time of day they visited, etc. We use this information to improve our website.</li>
          <li><strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">3. Types of Cookies We Use</h3>
        <p className="mb-4">
          Our website uses both first-party and third-party cookies:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>First-party cookies:</strong> These are cookies that are set by our website directly.</li>
          <li><strong>Third-party cookies:</strong> These are cookies that are set by third parties, such as Google Analytics, Google AdSense, and social media platforms.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-4">4. Google AdSense Cookies</h3>
        <p className="mb-6">
          We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to show you advertisements based on your browsing history and interests. These cookies help to make the advertisements displayed more relevant to you. For more information about Google's privacy policy and how they use cookies, please visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Advertising & Privacy page</a>.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">5. How to Control Cookies</h3>
        <p className="mb-4">
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
        <p className="mb-6">
          Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">6. Changes to This Cookie Policy</h3>
        <p className="mb-6">
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top.
        </p>
        
        <h3 className="text-xl font-semibold mb-4">7. Contact Us</h3>
        <p>
          If you have any questions about our Cookie Policy, please contact us at <a href="mailto:privacy@forexeducate.com" className="text-blue-600 hover:underline">privacy@forexeducate.com</a>.
        </p>
      </ContentSection>
    </div>
  );
};

export default CookiesPage;