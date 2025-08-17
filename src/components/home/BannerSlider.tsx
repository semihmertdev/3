'use client';

import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { ArrowRight, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const BannerSlider = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: t('home.banners.banner1.title'),
      subtitle: t('home.banners.banner1.subtitle'),
      description: t('home.banners.banner1.description'),
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      layout: 'normal',
      cta: t('home.banners.banner1.cta'),
      hasShare: true,
      badge: t('home.banners.banner1.badge'),
      badgeColor: '#10b981'
    },
    {
      id: 2,
      title: t('home.banners.banner2.title'),
      subtitle: t('home.banners.banner2.subtitle'),
      description: t('home.banners.banner2.description'),
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      layout: 'reverse',
      cta: t('home.banners.banner2.cta'),
      hasShare: true,
      badge: t('home.banners.banner2.badge'),
      badgeColor: '#ef4444'
    },
    {
      id: 3,
      title: t('home.banners.banner3.title'),
      subtitle: t('home.banners.banner3.subtitle'),
      description: t('home.banners.banner3.description'),
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      layout: 'normal',
      cta: t('home.banners.banner3.cta'),
      hasShare: true,
      badge: t('home.banners.banner3.badge'),
      badgeColor: '#3b82f6'
    },
    {
      id: 4,
      title: t('home.banners.banner4.title'),
      subtitle: t('home.banners.banner4.subtitle'),
      description: t('home.banners.banner4.description'),
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      layout: 'reverse',
      cta: t('home.banners.banner4.cta'),
      hasShare: true,
      badge: t('home.banners.banner4.badge'),
      badgeColor: '#8b5cf6'
    },
    {
      id: 5,
      title: t('home.banners.banner5.title'),
      subtitle: t('home.banners.banner5.subtitle'),
      description: t('home.banners.banner5.description'),
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      layout: 'normal',
      cta: t('home.banners.banner5.cta'),
      hasShare: true,
      badge: t('home.banners.banner5.badge'),
      badgeColor: '#f59e0b'
    }
  ];

  const thumbnailBanners = [
    {
      id: 1,
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      overlayText: t('home.banners.thumbnailText'),
      active: true
    },
    {
      id: 2,
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      overlayText: t('home.banners.thumbnailText'),
      active: false
    },
    {
      id: 3,
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      overlayText: t('home.banners.thumbnailText'),
      active: false
    },
    {
      id: 4,
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      overlayText: t('home.banners.thumbnailText'),
      active: false
    },
    {
      id: 5,
      image: '/assets/images/test-exm-images-after-remove/lassabanner.jpg',
      overlayText: t('home.banners.thumbnailText'),
      active: false
    }
  ];

  return (
    <section className="hm-banners-slider">
      <div className="container-md">
        {/* Ana Banner Slider */}
        <div className="banner-slider-container">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="swiper-top"
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={banner.id}>
                <div className={`banner-slide ${banner.layout === 'reverse' ? 'banner-slide-reverse' : ''}`}>
                  <div className="banner-content">
                    <div className="banner-badge" style={{ backgroundColor: banner.badgeColor }}>
                      {banner.badge}
                    </div>
                    <div className="banner-text-content">
                      <h2 className="banner-title">
                        {banner.title}
                      </h2>
                      <h3 className="banner-subtitle">
                        {banner.subtitle}
                      </h3>
                      <p className="banner-description">
                        {banner.description.replace(/'/g, '&apos;')}
                      </p>
                      <div className="banner-actions">
                        <button className="banner-cta-btn">
                          <span>{banner.cta}</span>
                          <div className="btn-icon">
                            <ArrowRight size={16} />
                          </div>
                        </button>
                        {banner.hasShare && (
                          <button className="banner-share-btn">
                            <Share2 size={16} />
                            <span>{t('home.banners.share')}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="banner-image-container">
                    <Image
                      className="banner-image"
                      src={banner.image}
                      alt={banner.title}
                      width={1600}
                      height={600}
                      quality={100}
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom">
            <ChevronRight size={24} />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom"></div>
        </div>

        {/* Thumbnail Slider */}
        <div className="thumbnail-slider-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={5}
            navigation={{
              nextEl: '.thumbnail-next',
              prevEl: '.thumbnail-prev',
            }}
            className="swiper-thumbnails"
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 14,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
          >
            {thumbnailBanners.map((banner, index) => (
              <SwiperSlide key={`thumb-${banner.id}`}>
                <div className={`thumbnail-item ${activeSlide === index ? 'thumbnail-active' : ''}`}>
                  <div className="thumbnail-image-container">
                    <Image
                      src={banner.image}
                      alt="banner thumbnail"
                      width={300}
                      height={150}
                      quality={90}
                      className="thumbnail-image"
                    />
                    <div className="thumbnail-overlay">
                      <div className="thumbnail-text">
                        {banner.overlayText}
                      </div>
                      <div className="thumbnail-badge">
                        <span className="badge-main">+1 YIL GARANTİ</span>
                        <span className="badge-sub">LASSA&apos;DAN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Navigation */}
          <button className="thumbnail-prev">
            <ChevronLeft size={20} />
          </button>
          <button className="thumbnail-next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
