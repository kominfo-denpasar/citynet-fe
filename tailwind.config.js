export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '900': '900px', // custom breakpoint
      },
    },
  },
  plugins: [
     require('@tailwindcss/line-clamp'),
  ],
}