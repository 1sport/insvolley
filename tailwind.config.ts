import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#303030",
        "primary-100": "#040C18",
        "primary-150": "#031B34",
        "primary-200": "#1E3859",
        "primary-300": "#0F4279",
        "primary-400": "#003F7E",
        "primary-500": "#2365E6",
        "primary-600": "#3F74DF",
        yellow: "#FFE144"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, rgba(174,103,250,1) 0%, rgba(244,152,103,1) 97%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
