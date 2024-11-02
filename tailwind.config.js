/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: "var(--color-gray)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      red: "var(--color-red)",
      lightRed: "var(--color-lightRed)",
      lightPink: "var(--color-lightPink)",
      beige: "var(--color-beige)",
      brown: "var(--color-brown)",

      orange: "var(--color-orange)",
      pink: "var(--color-pink)",
      yellow: "var(--color-yellow)",
      lightGreen: "var(--color-lightGreen)",
      green: "var(--color-green)",
    },

    backgroundColor: {
      gray: "var(--color-gray)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      red: "var(--color-red)",
      lightRed: "var(--color-lightRed)",
      lightPink: "var(--color-lightPink)",
      beige: "var(--color-beige)",
      brown: "var(--color-brown)",

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
      fontSize: {
        huge: "clamp(3rem, calc(120/2000*100vw), 7.5rem)",
        h2: "clamp(2.25rem,calc(48/2000*100vw), 3rem)",
        h4: "clamp(1.25rem,calc(24/2000*100vw), 1.5rem)",
      },

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

// gray: {
//   DEFAULT: "rgb(227, 227, 227)",
//   20: "rgba(227, 227, 227, 0.2)",
//   50: "rgba(227, 227, 227, 0.5)",
// },
// white: "var(--color-white)",
// black: "var(--color-black)",
// red: "var(--color-red)",
// lightRed: "var(--color-lightRed)",
// lightPink: "var(--color-lightPink)",
// beige: "var(--color-beige)",
// brown: "var(--color-brown)",

// orange: "var(--color-orange)",
// pink: "var(--color-pink)",
// yellow: "var(--color-yellow)",
// lightGreen: "var(--color-lightGreen)",
// green: "var(--color-green)",
