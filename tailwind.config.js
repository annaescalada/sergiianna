/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#3A5230',
        'forest-dark': '#2A3D22',
        sage: '#6B8C5A',
        'sage-light': '#A8C49A',
        'sage-pale': '#EAF0E6',
        ivory: '#FAFAF7',
        'ivory-dark': '#F0EDE6',
        stone: '#6B6B6B',
        'stone-light': '#9A9A9A',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.5em',
      },
    },
  },
  plugins: [],
}
