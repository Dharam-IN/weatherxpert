import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { ...colors.neutral },
        primary: { ...colors.violet, DEFAULT: colors.violet[500] },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
};

export default config;