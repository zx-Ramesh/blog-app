import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: {
          DEFAULT: "#3B3C4A",
          1: "#F4F4F5",
          2: "#F6F6F7",
          3: "#97989F",
          4: "#696A75",
          5:"#E8E8EA",
          6:"#4B6BFB"
        },
        dark:{
          DEFAULT:"#181A2A",
          1:"#FFFFFF",
          2:"#97989F",
          3:"#4B6BFB",
          4:"#242535",
          5:"#141624",
          6:"#BABABF"

        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;
