const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.js",
    "./components/**/*.tsx",
    "./nextra-theme-docs/**/*.js",
    "./nextra-theme-docs/**/*.tsx",
    "./nextra-theme-docs/**/*.css",
    "./pages/**/*.md",
    "./pages/**/*.mdx",
    "./pages/**/*.tsx",
    "./theme.config.js",
    "./styles.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`"Inter"`, "sans-serif"],
        mono: ["Source Code Pro"],
      },
      colors: {
        dark: "#000",
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  darkMode: "class",
};
