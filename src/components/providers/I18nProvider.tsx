'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('tr');

  useEffect(() => {
    // Client-side'da dil algılama
    const detectedLanguage = localStorage.getItem('i18nextLng') || 
                           navigator.language?.split('-')[0] || 
                           'tr';
    
    // Desteklenen diller
    const supportedLanguages = ['tr', 'en', 'de'];
    const language = supportedLanguages.includes(detectedLanguage) ? detectedLanguage : 'tr';
    
    setCurrentLanguage(language);
    
    // i18n'i güncelle
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
    
    setMounted(true);
  }, []);

  // SSR sırasında basit bir fallback
  if (!mounted) {
    return (
      <div suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export default I18nProvider;
