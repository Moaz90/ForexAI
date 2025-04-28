import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignalsPage from './pages/SignalsPage';
import AnalysisPage from './pages/AnalysisPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import NotificationProvider from './context/NotificationContext';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-1DW61HRHDL'); 
ReactGA.set({ debug: true });
window.gtag('event', 'اسم_الحدث', {
  event_category: 'category',
  event_label: 'label',
  value: 123,
});
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

  return (
    <Router>
      <NotificationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signals" element={<SignalsPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </Layout>
      </NotificationProvider>
    </Router>
  );
}

export default App;