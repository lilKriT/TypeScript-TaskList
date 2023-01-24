/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        glass: "0 5px 30px rgba(0, 0, 0, .1)",
      },
      backgroundImage: {
        neonHighway: "url(/src/assets/neon-highway.webp)",
        glassGradient:
          "linear-gradient(45deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .02))",
      },
    },
  },
  plugins: [],
};
