# Career Charm - Next.js Website

A modern, responsive website for Career Charm built with Next.js 14 and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS with custom theme
- 📱 Fully responsive design
- ✨ Advanced animations and effects
- 🎯 TypeScript support
- 🚀 Optimized performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ccweb/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Careers.tsx       # Careers section component
│   ├── Features.tsx      # Features section component
│   ├── FinalCTA.tsx      # Final CTA section
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section component
│   ├── MobileCTA.tsx     # Mobile CTA bar
│   ├── Navigation.tsx    # Navigation component
│   ├── Pricing.tsx       # Pricing section component
│   ├── ScrollProgress.tsx # Scroll progress bar
│   └── StickyBar.tsx     # Sticky conversion bar
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json         # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'authority': '#1A2B48',
  'success-gold': '#D4AF37',
  'growth-blue': '#007BFF',
  'clean-white': '#FAFAFA',
}
```

### Fonts

Fonts are configured in `tailwind.config.js` and imported in `app/globals.css`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **React** - UI library

## License

All rights reserved.
