import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sideBar: "#6B120A",
        Cmaroon: "#6B120A",
        Cyellow: "#F7A668",
        Corange: "#EB5D50",
        Cgreen: "#7BB896",
        Cblue: "#1073E6",
        Cbrown: "#856562",
        CbrightGreen: "#72E128",
        Cgrey: "#D9D9D9",
        Cblack: "#353535",
        bgClr: "#F1F1F1",
        greyHeading: "#969596",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
