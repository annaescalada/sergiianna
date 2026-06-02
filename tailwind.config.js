/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F5F0E8',
        'sand-dark': '#E8E0D0',
        cream: '#FDFAF5',
        ocean: '#2E7D96',
        'ocean-deep': '#1E4E5F',
        terracotta: '#C1714B',
        'terracotta-light': '#D4896A',
        olive: '#5C7048',
        'olive-light': '#7A9060',
        stone: '#8A7F72',
        'stone-dark': '#5C5248',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
