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
        orangish: "#13FFAA",
        bluish: "#1E67C6",
        purplish: "#CE84CF",
        pinkish: "#DD335C",
        greenish2: "#00cc99",
        yellowish: "#baebae"
      },
    },
  },
  plugins: [],
} satisfies Config;
