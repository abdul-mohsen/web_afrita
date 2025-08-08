/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f1f4f9",
          100: "#d6e1f2",
          200: "#adc6e6",
          300: "#7fa2cd",
          400: "#567db4",
          500: "#1d3666", // Base color
          600: "#0e1d44",
          700: "#08142f",
          800: "#050e23",
          900: "#03081a",
          DEFAULT: "#1d3666", // Default theme color
        },
        secondry: "#FDBC2D",
        "slate-gray": "#9a9c9b",
        "app-gray": "#7C7C7C",
        "app-light-gray": "#F5F5F5",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
