import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
      center: true,

      screens: {
        sm: "36rem",
        md: "42rem",
        lg: "64rem",
        xl: "80rem",
      },
    },
    extend: {
      padding: {
        "1/10": "10%",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(60deg,#0c45e7 42.92%,#00f4fb 84.41%)",
        "gradient-blue-linear-left":
          "linear-gradient(270deg,#0c45e7 42.92%,#00f4fb 84.41%)",
        "gradient-blue-linear-right":
          "linear-gradient(90deg,#0c45e7 42.92%,#00f4fb 84.41%)",
        "gradient-fade":
          "linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.08))",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "var(--ExtraBold)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#0c45e7",
        secondary: "#00f4fb",
        blue: "#010e5b",
        blue_fade: "rgba(0,13,61,0)",
        white_hover: "hsla(0, 0%, 100%, .2)",
      },
    },
  },
  plugins: [],
};
export default config;
