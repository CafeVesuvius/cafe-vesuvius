/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
  plugins: [
    require('flowbite/plugin')
  ],
}

