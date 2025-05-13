import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;