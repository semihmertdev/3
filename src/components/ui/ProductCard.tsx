'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { TrendingDown, Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  quantity: string;
  price: string;
  image: string;
  hasPriceDrop?: boolean;
  hasFavorite?: boolean;
  hasOverlay?: boolean;
  overlayText?: string;
  countryTag?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="cty-product">
      <div className="cty-product-content">
        {/* Üst Etiketler */}
        <div className="cty-prd-top-tags">
          {product.countryTag && (
            <div className="cty-prd-country-tag">
              <span>{product.countryTag}</span>
            </div>
          )}
          {product.hasPriceDrop && (
            <div className="cty-prd-price-drop-tag">
              <TrendingDown size={12} className="cty-prd-price-drop-icon" />
              <span>{t('product.priceDrop')}</span>
            </div>
          )}
        </div>

        {/* Favori İkonu */}
        <div className="cty-prd-favorite-box">
          <Heart size={15} className={`cty-prd-favorite-icon ${product.hasFavorite ? 'favorite-active' : ''}`} />
        </div>

        {/* Overlay Etiketi */}
        {product.hasOverlay && product.overlayText && (
          <div className="cty-prd-overlay-tag">
            <span>{product.overlayText}</span>
          </div>
        )}
        
        {/* Ürün Resmi */}
        <div className="cty-prd-i-box">
          <Image
            className="cty-prd-image"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
        
        {/* Ürün Bilgileri */}
        <div className="cty-prd-info-box">
          <div className="cty-prd-info-category">{product.category}</div>
          <div className="cty-prd-info-subcategory">{product.subcategory}</div>
          <div className="cty-prd-info-quantity">{product.quantity}</div>
          
          {/* Fiyat ve Sepete Ekle */}
          <div className="cty-prd-info-price-box">
            <span className="cty-prd-info-p-txt">{product.price}</span>
            <button className="cty-prd-info-p-i-box">
              <ShoppingCart size={15} className="cty-prd-info-p-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
