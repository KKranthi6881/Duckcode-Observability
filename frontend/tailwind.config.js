/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe080',
          300: '#ffd24d',
          400: '#ffc51a',
          500: '#f0b400', // Primary yellow
          600: '#cc9900',
          700: '#997300',
          800: '#664d00',
          900: '#332600',
        },
        secondary: {
          50: '#e6f4f9',
          100: '#b3def0',
          200: '#80c8e6',
          300: '#4db2dc',
          400: '#1a9cd3',
          500: '#0086c0', // Secondary blue
          600: '#0071a3',
          700: '#005580',
          800: '#003a57',
          900: '#001d2b',
        },
        neutral: {
          50: '#f5f7fa',
          100: '#e9edf2',
          200: '#d2dbe4',
          300: '#b6c2d3',
          400: '#94a3ba',
          500: '#7386a0',
          600: '#5d6b81',
          700: '#465062',
          800: '#2f3541',
          900: '#1a1d24',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}