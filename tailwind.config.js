/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barunah-primary': '#1e40af',
        'barunah-secondary': '#fbbf24',
        'barunah-accent': '#10b981',
        'barunah-dark': '#1f2937',
      },
      fontFamily: {
        'game': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 