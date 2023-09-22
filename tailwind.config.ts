import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D5B79",
        secondary: "#2EC0BB",
        heading: "#233036",
        body: "#F6F6F6",
        lightyellow: "#FFF3D9",
        greenlight: "#CCF0EE",
        purplelight: "#AEA3E1",
      },
    },
  },
  plugins: [],
};
export default config;
