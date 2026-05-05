import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071A33",
        slate: "#0B2F6F",
        tide: "#1455B3",
        mist: "#EFF6FF",
        sand: "#F7F4ED",
        accent: "#DCEBFF",
        signal: "#F2B96D",
      },
      boxShadow: {
        card: "0 24px 70px rgba(11, 47, 111, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(220, 235, 255, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 235, 255, 0.18) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
