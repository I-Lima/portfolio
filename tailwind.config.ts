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
      bgBlack: "#021025",
      black: "#000",
      white: "#FFF",
      bgWhite: "#F5F5F5",
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
        "text-slide": {
          "0%, 33.33%": {
            transform: "translateY(0%)",
          },
          "40%, 66.66%": {
            transform: "translateY(-25%)",
          },
          "73.330%, 100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        wave: "wave 1s infinite",
        "text-slide": "text-slide 8s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
