/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background : "#344CB7",
        secondaryBackground : "#577BC1",
        accent : "#FFEB00",
        surface: "#1E201E",
        onSurface: "#353635",
        border: "#4b4b4b"

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops ))",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "12xl": "12rem",
      },
    },
  },
  plugins: [
  ],
}

