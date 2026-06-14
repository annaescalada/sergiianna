/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pine: '#3A5220',
        'pine-dark': '#2D4018',
        'pine-mid': '#4A7A30',
        'pine-light': '#7AAB5A',
        'pine-pale': '#C8D9B8',
        ocean: '#1A6080',
        'ocean-dark': '#124A62',
        'ocean-mid': '#3B8AB0',
        'ocean-light': '#7ABDD6',
        'ocean-pale': '#D4EBF5',
        terra: '#C4623A',
        'terra-dark': '#9E4A28',
        'terra-light': '#D4845A',
        sand: '#E8C87A',
        'sand-light': '#F5EDDA',
        'sand-pale': '#FDFAF4',
        stone: '#6B6560',
        'stone-light': '#9A948E',
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
