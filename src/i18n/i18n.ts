import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// Handle HTML dir attribute for RTL languages
const handleLanguageChange = (lng: string) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  
  // Force re-render of components that might need layout adjustments
  document.body.style.opacity = '0.99';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 0);
};

i18n.on('languageChanged', handleLanguageChange);

// Set initial direction
handleLanguageChange(i18n.language);

export default i18n;