/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
        "Bebasneue": ["Bebas Neue", "sans-serif"],
      },
      colors: {
        "background-color": "#F0F0F3",
        "primary-color": "#F0F0F3",
        "accent-color": "#C07708",
        //Text
        "primary-text": "#000000",
        "sub-text": "#202020",
      },
      backgroundImage: {
        "home-background-img": "url('./src/assets/images/home-bg.png')",
        "contact-background-img": "url('./src/assets/images/contact-bg.png')",
        "eclipse-one": "url('./src/assets/images/eclipse-one.png')",
        "eclipse-two": "url('./src/assets/images/eclipse-two.png')",
        "eclipse-text": "url('./src/assets/images/eclipse-text.png')",
        "eclipse-circle-img": "url('./src/assets/images/eclipse-img.png')",
      }
    },
  },
  plugins: [],
}

