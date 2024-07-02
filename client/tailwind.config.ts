import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        light: {
          background: "#FAFAFA",
          logo: "#000000",
          mainText: "#1F1F1F",
          subText: "#666666",
          description: "#AAAAAA",
        },
        dark: {
          background: "#1F1F1F",
          logo: "#FFFFFF",
          mainText: "#FAFAFA",
          subText: "#AAAAAA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
