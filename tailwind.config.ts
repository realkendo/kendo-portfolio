import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangish: "#FF9913",
        bluish: "#1E67C6",
        purplish: "#CE84CF",
        pinkish: "#DD335C",
        greenish: "#00ff77",
        yellowish: "#dddd55"
      },
    },
  },
  plugins: [],
} satisfies Config;
