# ✨ Shea's

E-commerce website for pure shea butter from Burkina Faso.

![Burkina Faso](https://img.shields.io/badge/Made%20in-Burkina%20Faso-green?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- npm or yarn

### Installation

```bash
# Clone or download the project
cd sheas-project

# Install dependencies
npm install

# Run in development mode
npm run dev
```

The site will be accessible at `http://localhost:3000`

## 📦 Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployment.

### Option 2: Netlify

```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist/` folder to [netlify.com](https://app.netlify.com/drop).

### Option 3: GitHub Pages

1. Modify `vite.config.js`:
   ```js
   base: '/sheas/'
   ```

2. Deploy:
   ```bash
   npm run build
   npm run deploy:gh-pages
   ```

### Option 4: Traditional Hosting (FTP)

```bash
# Build the project
npm run build

# Upload dist/ folder contents via FTP
```

## 🛠️ Project Structure

```
sheas-project/
├── index.html          # HTML page with SEO
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main component
    └── index.css       # Tailwind styles
```

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Interactive shopping cart
- ✅ Accessible FAQ accordion
- ✅ Contact form with validation
- ✅ Sticky navigation with hamburger menu
- ✅ SEO optimized (meta tags, JSON-LD)
- ✅ WCAG 2.1 accessibility
- ✅ Performance optimized (lazy loading, code splitting)

## 🎨 Customization

### Colors

Modify the palette in `tailwind.config.js`:

```js
colors: {
  karite: {
    500: '#f59e0b', // Main color
    // ...
  }
}
```

### Products

Modify the `produits` array in `src/App.jsx`.

### Texts

All texts are in `src/App.jsx` (story, FAQ, testimonials).

## 📱 Screenshots

- Hero with African pattern
- 6 product catalog
- "Our Story" section with statistics
- Customer testimonials
- Interactive FAQ
- Contact form

## 🤝 Fair Trade

This site promotes fair trade with women's cooperatives in Burkina Faso:
- Purchase price +40% above market
- Direct partnership with 5 cooperatives
- Support for 200+ women producers

## 🌍 Domain Recommendations

- **sheas.co** - Short, international
- **sheas.bf** - Burkina Faso domain
- **sheas.com** - Classic choice

## 💳 Payment Integration

Consider integrating:
- **Orange Money / Moov Money** (Burkina Faso)
- **PayDunya** (pan-African solution)
- **Stripe** (international customers)

## 📄 License

MIT © Shea's

---

🇧🇫 Proudly designed for Burkina Faso
