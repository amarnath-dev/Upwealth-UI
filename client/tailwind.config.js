/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "background-color": "#F0F0F3",
        "primary-color": "#F0F0F3",
        "accent-color": "#C07708",
        //Text
        "primary-text": "#000000",
        "sub-text": "#202020",
      }
    },
  },
  plugins: [],
}

