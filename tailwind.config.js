/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-light': '#142033',
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#b28534',
          muted: '#c9973a',
        },
        ink: '#142033',
        muted: '#677084',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      animation: {
        'spin-slow': 'spin 760ms linear infinite',
      },
    },
  },
  plugins: [],
}
