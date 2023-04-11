/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-[#A95394]",
    "bg-[#A95394]",
    "text-[#357A5B]",
    "bg-[#357A5B]",
    "text-[#F16325]",
    "bg-[#F16325]",
    "text-[#1FB6EB]",
    "bg-[#1FB6EB]",
  ],

  theme: {
    extend: {
      fontFamily: {
        Philosopher: ["Philosopher", "sans-serif"],
        Carattere: ["Carattere", "cursive"],
        ComicNeue: ["Comic Neue", "cursive"],
        EduNSWACTFoundation: ["Edu NSW ACT Foundation", "cursive"],
        EduQLDBeginner: ["Edu QLD Beginner", "cursive"],
        EduTASBeginner: ["Edu TAS Beginner", "cursive"],
        Lato: ["Lato", "sans-serif"],
        Montserrat: ["Montserrat", "serif"],
        MoonDance: ["Moon Dance", "cursive"],
        NotoSans: ["Noto Sans", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Poppins: ["Poppins", "sans-seri"],
        Quicksand: ["Quicksand", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
        Sofia: ["Sofia Sans Condensed", " sans-serif"],
        Avanir: ["Avenir Next LT Pro", " sans-serif"],
      },
      colors: {
        logo1: "#A95394",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
