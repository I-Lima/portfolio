import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      customBlue: "#0AC8FF",
      customGreen: "#00D0D0",
      customGray: "#CDCDCD",
      bgBlack: "#000814",
      black: "#000",
      white: "#FFF",
      bgWhite: "#f8f8ff",
    },
    fontFamily: {
      "gentium-book-plus": ["--font-gentium-book-plus"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        wave: "wave 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
