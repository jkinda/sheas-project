/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette personnalisée Karité du Faso
        amber: {
          50: '#fffbf0',
          100: '#f9f2d6',
          200: '#f0dfa8',
          300: '#e6c770',
          400: '#dea838', // Rich Shea Gold
          500: '#d97706', // Deep Gold / Amber (Standard Tailwind Amber-600 moved to 500 for richness?) No, let's use custom.
          // Let's try a custom Rich Gold palette
          600: '#c51b54', // Vibrant Bordeaux/Red for hover
          700: '#a31545', // Lighter Bordeaux
          800: '#800020', // Bordeaux Red / Maroon
          900: '#500014', // Dark Bordeaux
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
