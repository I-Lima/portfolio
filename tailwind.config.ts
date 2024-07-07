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
    },
  },
  plugins: [],
};
export default config;
