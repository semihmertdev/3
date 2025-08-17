import BrandsSlider from '@/components/home/BrandsSlider';
import BannerSlider from '@/components/home/BannerSlider';
import ProductsSection from '@/components/home/ProductsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <BrandsSlider />
      <BannerSlider />
      <ProductsSection />
    </main>
  );
}
