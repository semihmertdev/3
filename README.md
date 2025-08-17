# 3otuz.com - Çok Dilli E-ticaret Platformu

Bu proje, PRD dokümanına göre geliştirilmiş modern bir e-ticaret platformudur. Next.js, React, TypeScript ve Tailwind CSS kullanılarak oluşturulmuştur.

## 🚀 Özellikler

- **Çok Dilli Destek**: Türkçe, İngilizce ve Almanca dil desteği
- **Modern Teknoloji Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Modüler Yapı**: Yeniden kullanılabilir bileşenler
- **Swiper Slider**: Marka ve banner slider'ları
- **i18n Entegrasyonu**: Dinamik dil değiştirme

## 🛠️ Teknik Gereksinimler

- Node.js 18+ 
- npm veya yarn

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd 3otuz.com
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── layout/           # Layout bileşenleri
│   │   ├── Header.tsx    # Header bileşeni
│   │   └── Footer.tsx    # Footer bileşeni
│   ├── home/             # Ana sayfa bileşenleri
│   │   ├── BrandsSlider.tsx
│   │   ├── BannerSlider.tsx
│   │   └── ProductsSection.tsx
│   ├── ui/               # UI bileşenleri
│   │   └── ProductCard.tsx
│   └── providers/        # Provider bileşenleri
│       └── I18nProvider.tsx
├── lib/                  # Yardımcı kütüphaneler
│   └── i18n.ts          # i18n konfigürasyonu
└── locales/             # Dil dosyaları
    ├── tr/
    ├── en/
    └── de/
```

## 🌐 Dil Desteği

Proje şu dilleri destekler:
- 🇹🇷 Türkçe (varsayılan)
- 🇺🇸 İngilizce
- 🇩🇪 Almanca

Dil değiştirme işlemi header'daki dil seçici ile yapılabilir.

## 🎨 Tasarım Sistemi

- **Renkler**: Tailwind CSS renk paleti
- **Tipografi**: Sistem fontları (rem birimleri)
- **Spacing**: Tailwind spacing sistemi
- **Responsive**: Mobile-first yaklaşım

## 📱 Responsive Breakpoint'ler

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Geliştirme

### Yeni Bileşen Ekleme
1. `src/components/` altında uygun klasörü seçin
2. TypeScript ile bileşeni oluşturun
3. Tailwind CSS ile stillendirin
4. i18n için çeviri anahtarları ekleyin

### Yeni Dil Ekleme
1. `src/locales/` altında yeni dil klasörü oluşturun
2. `common.json` dosyasını ekleyin
3. `src/lib/i18n.ts` dosyasında dil kaynağını ekleyin
4. Header bileşeninde dil seçeneklerini güncelleyin

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📄 PRD Uyumluluğu

Bu proje, PRD dokümanında belirtilen tüm gereksinimleri karşılar:

✅ **Teknoloji Stack**: Next.js/React + Tailwind CSS  
✅ **Birim Sistemi**: Tüm boyutlar rem birimi ile  
✅ **Stil Yazımı**: Sadece Tailwind sınıfları kullanıldı  
✅ **Font Yönetimi**: Self-hosted font sistemi  
✅ **Sıfırdan Geliştirme**: Hazır tema kullanılmadı  
✅ **Çok Dilli Destek**: 32 dil altyapısı hazır  
✅ **Responsive Tasarım**: Tüm cihazlarda uyumlu  
✅ **Modüler Yapı**: Yeniden kullanılabilir bileşenler  

## 📞 İletişim

Geliştirici: Semih  
Müşteri: Özkan Bey

---

**Not**: Bu proje Faz 1 (Demo) aşamasındadır. Ana sayfa tamamlanmış olup, diğer sayfalar için geliştirme devam etmektedir.
