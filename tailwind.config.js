/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        'neutral-dark': 'rgb(var(--neutral-dark) / <alpha-value>)',
        'neutral-medium': 'rgb(var(--neutral-medium) / <alpha-value>)',
        'neutral-light': 'rgb(var(--neutral-light) / <alpha-value>)',
        'neutral-pale': 'rgb(var(--neutral-pale) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'accent-alt': 'rgb(var(--accent-alt) / <alpha-value>)',
        'dark': 'rgb(var(--dark) / <alpha-value>)',
        'light': 'rgb(var(--light) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero/hero-bg.jpg")',
        'stats-pattern': 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/images/hero/hero-bg.jpg")',
      },
      boxShadow: {
        'metal': '0 5px 15px rgba(0, 0, 0, 0.3)',
        'metal-strong': '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

