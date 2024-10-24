/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: "#d6d6d6",
      white: "#fff",
      black: "#000",
      red: "#9e040c",
      orange: "#ff9500",
    },

    backgroundColor: {
      black: "#000",
      white: "#fff",
      pink: "#ff9ea3",
      yellow: "#fffbdc",
      lightGreen: "#e1efe3",
      green: "#235c1b",
      gray: "#f4f4f4",
    },

    fontFamily: {
      studioProBold: "var(--studio-pro-bold)",
      studioProRegular: "var(--studio-pro-regular)",
    },

    extend: {
      borderRadius: {
        large: "var(--border-radius-large)",
      },
    },
  },
  plugins: [],
};
