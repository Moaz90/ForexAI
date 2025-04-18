import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' }
];

export function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={`flex items-center space-x-2 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
      <Globe className="h-4 w-4 text-gray-500" />
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50 transition-colors"
        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} dir={lang.code === 'ar' ? 'rtl' : 'ltr'}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}