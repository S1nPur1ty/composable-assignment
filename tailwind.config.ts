import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      gilroy: ["var(--font-gilroy)"],
    },
    extend: {
      colors: {
        primary: "#52F2B9",
        peppermint: "#81FFD9",
        titanium: "rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        white_02: "rgba(255, 255, 255, 0.02)",
        white_05: "rgba(255, 255, 255, 0.05)",
        dark: '#0F0F0F',
        trans_green: 'rgba(82,242,185,0.1)',
      },
      borderColor: {
        white_02: "rgba(255, 255, 255, 0.02)",
        white_05: "rgba(255, 255, 255, 0.05)",
      },
      width: {
        '30': '7.5rem',
      },
      minWidth: {
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};
export default config;
