/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Microsoft Design System Colors
        'microsoft-blue': '#0078D4',
        'microsoft-blue-dark': '#106EBE',
        'microsoft-green': '#107C10',
        'microsoft-orange': '#D83B01',
        'microsoft-yellow': '#FFB900',
        'microsoft-gray': {
          50: '#FAFAFA',
          100: '#F3F2F1',
          200: '#E5E5E5',
          300: '#D6D6D6',
          400: '#C8C6C4',
          500: '#605E5C',
          600: '#323130',
          700: '#3C3C3C',
          800: '#252526',
          900: '#1B1B1B',
          950: '#0F0F0F',
        }
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'Segoe UI Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 