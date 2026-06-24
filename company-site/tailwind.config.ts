import type { Config } from "tailwindcss";
import rootConfig from "../tailwind.config";

const config: Config = {
  ...rootConfig,
  content: ["./app/**/*.{ts,tsx}", "../components/**/*.{ts,tsx}", "../content/**/*.{ts,tsx}", "../lib/**/*.{ts,tsx}"],
};

export default config;
