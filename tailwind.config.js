/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./layout/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  safelist: [
    "max-h-[800px]"
  ],
  theme: {
    extend: {
      fontFamily: {
        city: ['"Montagu Slab"', 'sans-serif'],
    },
  },
  plugins: [],
},
}
