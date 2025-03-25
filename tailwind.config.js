/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'text': 'var(--color-text)',
        'bg': 'var(--color-bg)',
      },
    },
  },
  plugins: [],
};
