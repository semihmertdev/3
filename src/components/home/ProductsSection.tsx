'use client';

import { useTranslation } from 'react-i18next';
import ProductCard from '../ui/ProductCard';

const ProductsSection = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      name: 'iPhone 16 Pro Max',
      category: t('product.categories.phone'),
      subcategory: t('product.subcategories.smartphone'),
      quantity: '120',
      price: `25.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/16pm.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 2,
      name: 'Apple Watch Series 9',
      category: t('product.categories.technology'),
      subcategory: t('product.subcategories.smartwatch'),
      quantity: '89',
      price: `54.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/applew.webp',
      hasPriceDrop: true,
      hasFavorite: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 3,
      name: 'Apple AirPods Pro',
      category: t('product.categories.technology'),
      subcategory: t('product.subcategories.headphones'),
      quantity: '75',
      price: `9.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/airpods.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 4,
      name: 'iPad Pro 12.9',
      category: t('product.categories.technology'),
      subcategory: t('product.subcategories.tablet'),
      quantity: '60',
      price: `14.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/ipadpro.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 5,
      name: 'MacBook Pro 14',
      category: t('product.categories.computer'),
      subcategory: t('product.subcategories.computer'),
      quantity: '45',
      price: `89.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/mbpro.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 6,
      name: 'Samsung Galaxy S24',
      category: t('product.categories.phone'),
      subcategory: t('product.subcategories.smartphone'),
      quantity: '95',
      price: `32.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/s24.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 7,
      name: 'Sony WH-1000XM5',
      category: t('product.categories.technology'),
      subcategory: t('product.subcategories.headphones'),
      quantity: '68',
      price: `12.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/sony5.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 8,
      name: 'Dell XPS 13',
      category: t('product.categories.computer'),
      subcategory: t('product.subcategories.computer'),
      quantity: '52',
      price: `67.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/dell.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 9,
      name: 'Samsung Galaxy Tab S9',
      category: t('product.categories.technology'),
      subcategory: t('product.subcategories.tablet'),
      quantity: '38',
      price: `18.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/tabs9.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 10,
      name: 'Google Pixel 8 Pro',
      category: t('product.categories.phone'),
      subcategory: t('product.subcategories.smartphone'),
      quantity: '72',
      price: `28.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/google.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 11,
      name: 'Microsoft Surface Pro',
      category: t('product.categories.computer'),
      subcategory: t('product.subcategories.computer'),
      quantity: '41',
      price: `45.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/surfacepro.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    },
    {
      id: 12,
      name: 'Bose QuietComfort 45',
      category: t('product.categories.technology'),
      subcategory: t('product.subcategories.headphones'),
      quantity: '55',
      price: `8.999 ${t('header.currency')}`,
      image: '/assets/images/test-exm-images-after-remove/bose.webp',
      hasPriceDrop: true,
      countryTag: t('header.countryCode')
    }
  ];

  return (
    <section className="cty-products-box">
      <div className="container-md">
        <div className="cty-small-title">
          <h2>{t('home.products.title')}</h2>
          <p className="cty-small-t-thin">{t('home.products.subtitle')}</p>
        </div>
        
        <div className="cty-products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="df-w-a-center">
          <button className="cty-products-load-more">
            {t('home.products.loadMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
