/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        neonHighway: "url(/src/assets/neon-highway.webp)",
      },
    },
  },
  plugins: [],
};
