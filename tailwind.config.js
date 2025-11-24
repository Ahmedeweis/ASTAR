// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6', // Violet/Purple for primary actions
        secondary: '#a78bfa', // Lighter violet
        dark: '#0B0B0F', // Very dark background
        'dark-lighter': '#1A1A1F', // Slightly lighter dark for cards
        'text-gray': '#9CA3AF',
        accent: '#D8B4FE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming a clean sans-serif
        display: ['Playfair Display', 'serif'], // For headers if needed, or just use sans
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')", // Placeholder
      }
    },
  },
  plugins: [],
}