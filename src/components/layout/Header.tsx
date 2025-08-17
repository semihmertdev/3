'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Grid3X3 } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  // SSR sırasında basit bir header döndür
  if (!mounted) {
    return (
      <header className="header-box">
        <div className="h-top-bar">
          <div className="container-md">
            <div className="h-top-bar-content">
              <div className="h-top-links">
                <Link href="/">Homepage</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/blog-detail">Blog Detail</Link>
                <Link href="/category">Category</Link>
              </div>
              <div className="h-top-right">
                <span>Return Policy</span>
                <span>Help Center</span>
                <span>Open Store</span>
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-main-header">
          <div className="container-md">
            <div className="h-main-content">
              <div className="h-logo-section">
                <div className="h-logo">OTUZ</div>
                <div className="h-blog-badge">
                  <span>Blog</span>
                  <div className="h-checkbox"></div>
                </div>
              </div>
              <div className="h-search-section">
                <div className="h-search-box">
                  <input type="text" placeholder="Aradığınız ürün veya markayı yazınız.." />
                  <button className="h-search-btn">
                    <Search size={20} />
                  </button>
                </div>
              </div>
              <div className="h-user-section">
                <div className="h-cart">
                  <div className="cart-icon-container">
                    <ShoppingCart size={24} />
                    <div className="cart-badge">4</div>
                  </div>
                  <div className="text-content">
                    <span>SEPETİM</span>
                    <span>1.366,99 TRY</span>
                  </div>
                </div>
                <div className="h-login">
                  <User size={24} />
                  <div className="text-content">
                    <span>GİRİŞ YAP</span>
                    <span>veya kayıt ol</span>
                  </div>
                </div>
                <div className="h-language">
                  <span className="text-xl">{currentLanguage.flag}</span>
                  <span>{currentLanguage.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-navigation">
          <div className="container-md">
            <div className="h-nav-content">
              <div className="h-categories">
                <Grid3X3 size={20} />
                <span>{t('header.categories')}</span>
              </div>
              <nav className="h-nav-links">
                <Link href="/jobs">{t('header.jobs')}</Link>
                <Link href="/tablet-phone">{t('header.navigation.tabletPhone')}</Link>
                <Link href="/accessory">{t('header.navigation.accessory')}</Link>
                <Link href="/stores">{t('header.navigation.stores')}</Link>
                <Link href="/electronics">{t('header.navigation.electronics')}</Link>
                <Link href="/computer-office">{t('header.navigation.computerOffice')}</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header-box">
      {/* Üst Yeşil Bar */}
      <div className="h-top-bar">
        <div className="container-md">
          <div className="h-top-bar-content">
            <div className="h-top-links">
              <Link href="/">{t('header.homepage')}</Link>
              <Link href="/blog">{t('header.blog')}</Link>
              <Link href="/blog-detail">{t('header.blogDetail')}</Link>
              <Link href="/category">{t('header.category')}</Link>
            </div>
            <div className="h-top-right">
              <span>{t('header.returnPolicy')}</span>
              <span>{t('header.helpCenter')}</span>
              <span>{t('header.openStore')}</span>
              <span>{t('header.currency')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="h-main-header">
        <div className="container-md">
          <div className="h-main-content">
            <div className="h-logo-section">
              <div className="h-logo">OTUZ</div>
              <div className="h-blog-badge">
                <span>Blog</span>
                <div className="h-checkbox"></div>
              </div>
            </div>
            <div className="h-search-section">
              <div className="h-search-box">
                <input type="text" placeholder={t('header.search')} />
                <button className="h-search-btn">
                  <Search size={20} />
                </button>
              </div>
            </div>
            <div className="h-user-section">
              <div className="h-cart">
                <div className="cart-icon-container">
                  <ShoppingCart size={24} />
                  <div className="cart-badge">4</div>
                </div>
                <div className="text-content">
                  <span>{t('header.cart')}</span>
                  <span>1.366,99 {t('header.currency')}</span>
                </div>
              </div>
              <div className="h-login">
                <User size={24} />
                <div className="text-content">
                  <span>{t('header.login')}</span>
                  <span>{t('header.loginSubtext')}</span>
                </div>
              </div>
              <div className="relative">
                <div className="h-language" onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
                  <span className="text-xl">{currentLanguage.flag}</span>
                  <span className="ml-2">{currentLanguage.name}</span>
                </div>
                <div className={`absolute top-full right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-white z-50 min-w-48 overflow-hidden transition-all duration-300 ${isLanguageMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}>
                  <div className="p-3">
                    <div className="space-y-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-2 px-4 py-4 rounded-xl transition-all duration-300 text-left group bg-transparent border border-transparent hover:bg-gray-50 hover:scale-105 hover:shadow-lg ${
                            i18n.language === lang.code 
                              ? 'bg-transparent text-green-700 border-transparent' 
                              : 'text-black hover:text-green-600'
                          }`}
                        >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="ml-2">{lang.name}</span>
                        {i18n.language === lang.code && (
                          <svg className="ml-auto w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigasyon Barı */}
      <div className="h-navigation">
        <div className="container-md">
          <div className="h-nav-content">
            <div className="h-categories">
              <Grid3X3 size={20} />
              <span>{t('header.categories')}</span>
            </div>
            <nav className="h-nav-links">
              <Link href="/jobs">{t('header.jobs')}</Link>
              <Link href="/tablet-phone">{t('header.navigation.tabletPhone')}</Link>
              <Link href="/accessory">{t('header.navigation.accessory')}</Link>
              <Link href="/stores">{t('header.navigation.stores')}</Link>
              <Link href="/electronics">{t('header.navigation.electronics')}</Link>
              <Link href="/computer-office">{t('header.navigation.computerOffice')}</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
