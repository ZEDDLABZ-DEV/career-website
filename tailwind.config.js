/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'authority': '#1A2B48',
        'success-gold': '#D4AF37',
        'growth-blue': '#007BFF',
        'clean-white': '#FAFAFA',
      },
      fontFamily: {
        'heading': ['Manrope', 'sans-serif'],
        'display': ['Crimson Pro', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
