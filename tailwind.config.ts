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
        ink: "#0D1B2A",
        slate: "#1B263B",
        tide: "#24415E",
        mist: "#EFF3F7",
        sand: "#F7F4ED",
        accent: "#9FB7D1",
        signal: "#F2B96D",
      },
      boxShadow: {
        card: "0 20px 60px rgba(13, 27, 42, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(159, 183, 209, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(159, 183, 209, 0.16) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
