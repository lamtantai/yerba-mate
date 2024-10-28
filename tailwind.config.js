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
      white: "var(--color-white)",
      black: "var(--color-black)",
      red: "var(--color-red)",
      orange: "var(--color-orange)",
      pink: "var(--color-pink)",
      yellow: "var(--color-yellow)",
      lightGreen: "var(--color-lightGreen)",
      green: "var(--color-green)",
    },

    backgroundColor: {
      gray: "#f4f4f4",
      white: "var(--color-white)",
      black: "var(--color-black)",
      red: "var(--color-red)",
      orange: "var(--color-orange)",
      pink: "var(--color-pink)",
      yellow: "var(--color-yellow)",
      lightGreen: "var(--color-lightGreen)",
      green: "var(--color-green)",
    },

    fontFamily: {
      studioProBold: "var(--studio-pro-bold)",
      studioProRegular: "var(--studio-pro-regular)",
    },

    extend: {
      borderRadius: {
        large: "var(--border-radius-large)",
      },

      height: {
        button: "2.5rem",
      },

      width: {
        button: "2.5rem",
      },

      padding: {
        small: "var(--padding-small)",
        medium: "var(--padding-medium)",
      },
    },
  },
  plugins: [],
};
