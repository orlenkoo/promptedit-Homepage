/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bfd2ff',
          300: '#93b3ff',
          400: '#608aff',
          500: '#3b65ff',
          600: '#2546f5',
          700: '#1d36dd',
          800: '#1c2fb2',
          900: '#1d2e8c',
        },
        accent: {
          400: '#ffd166',
          500: '#ffb703',
          600: '#fb8500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(59, 101, 255, 0.45)',
        'glow-lg': '0 25px 60px -15px rgba(59, 101, 255, 0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
