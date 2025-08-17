# 3otuz.com - Multi-Language E-Commerce Frontend

A modern, responsive e-commerce frontend built with Next.js 15, featuring multi-language support, self-hosted fonts, and a clean, professional design that complies with strict technical requirements.

## 🚀 Features

### 🌍 Multi-Language Support
- **3 Languages**: Turkish (TR), English (EN), German (DE)
- **Dynamic Content**: All text content is translatable via i18next
- **Language Persistence**: Remembers user's language preference in localStorage
- **Server-Side Rendering**: SSR-compatible with hydration error prevention
- **Currency Support**: Language-specific currency display (TRY/USD/EUR)

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, smooth transitions, scale animations
- **Professional Layout**: Clean and modern design with proper spacing
- **Accessibility**: Keyboard navigation and screen reader support
- **Self-Hosted Fonts**: Inter font family with multiple weights

### 📱 Components

#### Header
- **Language Selector**: Beautiful dropdown with flag icons and language codes
- **Search Bar**: Product and brand search functionality
- **Navigation Menu**: Categories and main navigation links with translations
- **Shopping Cart**: Cart icon with item count
- **User Account**: Login/register section with responsive text

#### Banner Slider
- **5 Banner Slides**: Promotional content with high-quality images
- **Thumbnail Navigation**: Easy slide switching with overlay text
- **Auto-play**: Automatic slide transitions
- **Responsive Images**: Optimized for all screen sizes with WebP format
- **Badge System**: Dynamic badges (YENİ, HOT, POPÜLER, ÖZEL, TREND)

#### Products Section
- **12 Product Cards**: Featured products display with hover effects
- **Dynamic Categories**: Language-specific category and subcategory names
- **Price Display**: Currency-aware pricing with discount indicators
- **Country Tags**: Region-specific product availability (TR, EN, DE)
- **Favorite System**: Heart icon for wishlist functionality

#### Footer
- **Multi-column Layout**: Quick links, company info, help section
- **Social Media**: Social media platform links with dynamic colors
- **Mobile App**: App store download buttons with hover effects
- **Contact Information**: Company details and support

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Internationalization**: react-i18next + i18next-browser-languagedetector
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with WebP support
- **Slider**: Swiper.js
- **Fonts**: Self-hosted Inter font family
- **Build Tool**: Turbopack for faster development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 3otuz.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language Configuration

### Supported Languages
- **Turkish (TR)**: Default language with fallback
- **English (EN)**: International support
- **German (DE)**: European market support

### Translation Files
Translation files are located in `src/locales/`:
```
src/locales/
├── tr/
│   └── common.json    # Turkish translations
├── en/
│   └── common.json    # English translations
└── de/
    └── common.json    # German translations
```

### Adding New Languages
1. Create a new folder in `src/locales/`
2. Add `common.json` with translations
3. Update language configuration in `src/lib/i18n.ts`
4. Add language to the language selector in Header component

## 📁 Project Structure

```
3otuz.com/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with rem units
│   │   ├── layout.tsx           # Root layout with font loading
│   │   ├── page.tsx             # Home page
│   │   └── fonts/               # Self-hosted Inter fonts
│   ├── components/
│   │   ├── home/
│   │   │   ├── BannerSlider.tsx # Banner carousel with badges
│   │   │   ├── BrandsSlider.tsx # Brand logos slider
│   │   │   └── ProductsSection.tsx # Products grid
│   │   ├── layout/
│   │   │   ├── Footer.tsx       # Footer with social links
│   │   │   └── Header.tsx       # Header with language selector
│   │   ├── providers/
│   │   │   └── I18nProvider.tsx # i18n context provider
│   │   └── ui/
│   │       └── ProductCard.tsx  # Reusable product card
│   ├── lib/
│   │   └── i18n.ts              # i18next configuration
│   └── locales/                 # Translation files
├── public/
│   └── assets/
│       └── images/
│           ├── brands/          # Brand SVG logos
│           └── test-exm-images-after-remove/ # Product & banner images
└── [config files]
```

## 🎯 Key Features Implementation

### Language Switching
- Click the language selector in the header
- Choose from TR, EN, or DE with flag icons
- All content updates immediately without page reload
- Language preference is saved in localStorage
- Server-side rendering compatible

### Responsive Design
- **Desktop**: Full layout with all features and hover effects
- **Tablet**: Optimized navigation and spacing
- **Mobile**: Touch-friendly interface with responsive text sizing

### Product Display
- Dynamic product information based on selected language
- Country-specific pricing and availability tags
- Interactive product cards with hover effects
- Category and subcategory translations
- Price drop indicators with trending icons

### Banner System
- High-quality banner images with WebP optimization
- Dynamic badge system with different colors
- Thumbnail navigation with overlay text
- Responsive image sizing and positioning

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style & Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Tailwind CSS v4**: Utility-first CSS framework
- **rem Units**: All sizing uses rem instead of px (PRD compliance)
- **No Inline Styles**: All styling through Tailwind classes
- **Self-Hosted Fonts**: No external font dependencies

### Component Guidelines
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind classes
- Follow the established component structure
- Use i18n for all text content
- Implement proper hover effects and transitions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings for Next.js 15
3. Deploy automatically on push
4. Enable image optimization and edge functions

### Other Platforms
- **Netlify**: Compatible with Next.js 15
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 📝 Project Status

### ✅ Completed Features
- ✅ Multi-language header with beautiful dropdown
- ✅ Responsive banner slider with badges
- ✅ Product section with dynamic content
- ✅ Footer with social media and app store links
- ✅ Language switching functionality
- ✅ Self-hosted font system (Inter)
- ✅ PRD compliance (rem units, no inline styles)
- ✅ i18n integration with SSR support
- ✅ Responsive design for all screen sizes
- ✅ Image optimization with WebP support
- ✅ Modern UI with hover effects and animations

### 🔄 Current Status
- **Phase**: Demo/Evaluation Phase (PRD Faz 1)
- **Pages**: 1/19 (Home page completed)
- **Languages**: 3/32 (TR, EN, DE)
- **Performance**: Optimized with Turbopack
- **Code Quality**: High (TypeScript + ESLint)

### 📋 Next Steps (PRD Requirements)
- [ ] Complete remaining 18 pages
- [ ] Implement admin panel
- [ ] Add 29 more languages (total 32)
- [ ] SEO optimization
- [ ] Advanced search functionality
- [ ] Product filtering and sorting
- [ ] User authentication system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the coding standards
4. Test thoroughly across different languages
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For questions or support, please contact the development team.

---

**Last Updated**: January 2025
**Version**: 1.1.0
**Status**: Demo Phase - Ready for PRD Evaluation
**Next.js Version**: 15.4.6
**React Version**: 19.1.0
