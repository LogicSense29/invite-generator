/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#fffcf2',
          100: '#fff9e6',
          200: '#ffefbf',
          300: '#ffe18c',
          400: '#ffd054',
          500: '#fcb92c',
          600: '#e69a19',
          700: '#bf7613',
          800: '#995c14',
          900: '#7d4c15',
          950: '#462708',
        },
        'emerald-dark': '#013220',
        'champagne': '#F7E7CE',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'script': ['"Great Vibes"', 'cursive'],
      }
    },
  },
  plugins: [],
}
