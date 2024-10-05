/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'min-color2': '#1F4068',
        'min-color1': '#37B7C3',
        'bagckcol': '#EEEDEB',
        'text-color': '#222831'
      },
      backgroundImage: {
        'hero-bag': "url('/hero.jpg')",
        'hero-bag-respo': "url('/team-1.jpg')",
      },
      margin: {
        'ma-contaner': '80px',
        'ma-contaner-resp': '30px',
      }
    },
  },
  plugins: [],
}

