/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"']
    },
    extend: {
      colors: {
        'vesuvius-red':'#C91713',
      },
    },
  },
  plugins: [],
}

