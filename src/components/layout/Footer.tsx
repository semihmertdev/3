'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Grid3X3, ShoppingCart, Heart, User, Twitter, Facebook, Youtube, Instagram, Linkedin, Smartphone, Download, Store } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  const languages = [
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  const paymentMethods = [
    'visa.svg',
    'mastercard.svg',
    'american-express.svg',
    'maestro.svg',
    'diners.svg',
    'pay.svg',
    'jcb.svg',
    'paypal.svg'
  ];

  const socialMedia = [
    { name: 'twitter', icon: Twitter, color: '#1DA1F2', hoverColor: '#0d8bd9' },
    { name: 'facebook', icon: Facebook, color: '#1877F2', hoverColor: '#0d6efd' },
    { name: 'youtube', icon: Youtube, color: '#FF0000', hoverColor: '#cc0000' },
    { name: 'instagram', icon: Instagram, color: '#E4405F', hoverColor: '#c13584' },
    { name: 'linkedin', icon: Linkedin, color: '#0A66C2', hoverColor: '#004182' }
  ];

  const appStores = [
    { 
      name: 'App Store', 
      icon: Smartphone,
      text: t('footer.download'),
      color: '#000000',
      hoverColor: '#333333'
    },
    { 
      name: 'Google Play', 
      icon: Download,
      text: t('footer.download'),
      color: '#01875F',
      hoverColor: '#016B4F'
    },
    { 
      name: 'App Gallery', 
      icon: Store,
      text: t('footer.explore'),
      color: '#FF0000',
      hoverColor: '#CC0000'
    }
  ];

  // SSR sırasında basit bir footer döndür
  if (!mounted) {
    return (
      <footer className="footer-box">
        <div className="container-md">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer-box">
      <div className="container-md">
        {/* Üst Kısım - Ödeme Yöntemleri ve Dil Seçici */}
        <div className="f-top-box df-computer">
          <div className="f-top-content">
            <div className="f-payment-methods">
              {paymentMethods.map((method) => (
                <Image
                  key={method}
                  className="f-payment-icon"
                  src={`/assets/images/icons/payment-icons/${method}`}
                  alt={`footer ${method.replace('.svg', '')} icon`}
                  width={55}
                  height={37}
                />
              ))}
            </div>
            <div className="f-language-box">
              <span style={{ fontSize: '25px' }}>{currentLanguage.flag}</span>
              <span className="f-language-text">{currentLanguage.name}</span>
            </div>
          </div>
        </div>

        {/* Ana Footer İçeriği - 5 Sütun */}
        <div className="f-middle-box df-computer">
          <div className="footer-grid">
            {/* 1. Sütun - Marka Bilgisi ve Sosyal Medya */}
            <div className="f-brand-info-box">
              <p className="f-brand-i-text">
                {t('footer.brandDescription')}
              </p>
              <div className="f-brand-i-social-i-boxes">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      className="modern-social-icon"
                      href="#"
                      style={{
                        '--social-color': social.color,
                        '--social-hover-color': social.hoverColor
                      } as React.CSSProperties}
                    >
                      <IconComponent size={24} strokeWidth={1.5} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 2. Sütun - Hızlı Linkler */}
            <nav className="f-links">
              <ul className="f-links-ul">
                <li className="f-link-li">
                  <h3 className="f-link-h">{t('footer.quickLinks')}</h3>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/">{t('footer.home')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/about">{t('footer.about')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/services">{t('footer.services')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/terms">{t('footer.terms')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/stores">{t('footer.stores')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/real-estate">{t('footer.realEstate')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/automotive">{t('footer.automotive')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/phone-tablet">{t('footer.phoneTablet')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/computer-office">{t('footer.computerOffice')}</Link>
                </li>
              </ul>
            </nav>

            {/* 3. Sütun - Livben */}
            <nav className="f-links">
              <ul className="f-links-ul">
                <li className="f-link-li">
                  <h3 className="f-link-h">{t('footer.livben')}</h3>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/team">{t('footer.team')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/privacy">{t('footer.privacy')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/career">{t('footer.career')}</Link>
                </li>
              </ul>
            </nav>

            {/* 4. Sütun - Yardım */}
            <nav className="f-links">
              <ul className="f-links-ul">
                <li className="f-link-li">
                  <h3 className="f-link-h">{t('footer.help')}</h3>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/help">{t('footer.helpCenter')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/contact">{t('footer.contact')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/faq">{t('footer.faq')}</Link>
                </li>
                <li className="f-link-li">
                  <Link className="f-link-a" href="/support">{t('footer.support')}</Link>
                </li>
              </ul>
            </nav>

            {/* 5. Sütun - Mobil Uygulama */}
            <div className="f-app-download-box">
              <h3 className="f-app-download-h">{t('footer.mobileApp')}</h3>
              <p className="f-app-download-text">
                {t('footer.mobileAppText')}
              </p>
              <div className="f-app-download-buttons">
                {appStores.map((store) => {
                  const IconComponent = store.icon;
                  return (
                    <Link
                      key={store.name}
                      className="modern-app-store-btn"
                      href="#"
                      style={{
                        '--store-color': store.color,
                        '--store-hover-color': store.hoverColor
                      } as React.CSSProperties}
                    >
                      <div className="app-store-icon">
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                                             <div className="app-store-text">
                         <span className="app-store-name">{store.name}</span>
                         <span className="app-store-desc">{store.text}</span>
                       </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright */}
        <div className="f-bottom-box">
          <p className="f-copyright-text">{t('footer.copyright')}</p>
        </div>
      </div>

      {/* Mobil Alt Menü */}
      <div className="bottom-fixed-menu df-mobile">
        <Link className="btm-fxd-link" href="/">
          <Home size={24} />
        </Link>
        <Link className="btm-fxd-link" href="/category">
          <Grid3X3 size={24} />
        </Link>
        <Link className="btm-fxd-link" href="/cart">
          <ShoppingCart size={24} />
        </Link>
        <Link className="btm-fxd-link" href="/favorites">
          <Heart size={24} />
        </Link>
        <Link className="btm-fxd-link" href="/profile">
          <User size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
