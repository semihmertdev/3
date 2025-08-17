import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language files
import trCommon from '../locales/tr/common.json';
import enCommon from '../locales/en/common.json';
import deCommon from '../locales/de/common.json';

const resources = {
  tr: {
    common: trCommon,
  },
  en: {
    common: enCommon,
  },
  de: {
    common: deCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    lng: 'tr', // Server-side için sabit dil
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    
    defaultNS: 'common',
    ns: ['common'],
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;
