/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        neonHighway: "url(/src/assets/neon-highway.webp)",
        mainGradient:
          "linear-gradient(45deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .1))",
      },
    },
  },
  plugins: [],
};
