'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const brands = [
  {
    name: 'Adidas',
    logo: 'adidas-13.svg',
    category: 'Sports'
  },
  {
    name: 'Puma',
    logo: 'puma-logo.svg',
    category: 'Sports'
  },
  {
    name: 'Nike',
    logo: 'nike-4-2.svg',
    category: 'Sports'
  },
  {
    name: 'US Polo',
    logo: 'polo-ralph-lauren.svg',
    category: 'Fashion'
  },
  {
    name: 'Mercedes',
    logo: 'mercedes-benz-6.svg',
    category: 'Automotive'
  },
  {
    name: 'Apple',
    logo: 'apple-13.svg',
    category: 'Technology'
  },
  {
    name: 'MSI',
    logo: 'msi-3.svg',
    category: 'Technology'
  },
  {
    name: 'Lenovo',
    logo: 'lenovo-logo-2015-1.svg',
    category: 'Technology'
  },
  {
    name: 'Xbox',
    logo: 'xbox-9.svg',
    category: 'Gaming'
  },
  {
    name: 'PlayStation',
    logo: 'playstation-wordmark.svg',
    category: 'Gaming'
  },
  {
    name: 'Altınyıldız',
    logo: 'brand-template.svg',
    category: 'Fashion'
  }
];

const BrandsSlider = () => {
  return (
    <section className="hm-brands-slider">
      <div className="brands-container">
        <div className="brands-slider-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={3}
            navigation={{
              nextEl: '.brands-next',
              prevEl: '.brands-prev',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 8,
                spaceBetween: 36,
              },
            }}
            className="brands-swiper"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="brand-item">
                  <div className="brand-logo-container">
                    <Image
                      src={`/assets/images/brands/${brand.logo}`}
                      alt={brand.name}
                      width={80}
                      height={80}
                      className="brand-logo"
                    />
                    <div className="brand-overlay">
                      <span className="brand-name">{brand.name}</span>
                      <span className="brand-category">{brand.category}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="brands-prev">
            <ChevronLeft size={20} />
          </button>
          <button className="brands-next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;
