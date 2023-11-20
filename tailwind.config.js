module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: { max: "1460px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      mobile: { max: "480px" },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "8xl": ["5rem", "5rem"],
        "9xl": ["7rem", "7rem"],
        "10xl": ["9rem", "9rem"],
      },
      width: {
        "width-clamp": "var(--width-clamp)",
      },
      margin: {
        "width-clamp": "calc((100% - var(--width-clamp)) / 2)",
      },
      extend: {
        blur: {
          xs: "2px",
          sm: "4px",
          md: "8px",
          lg: "12px",
          xl: "16px",
          "2xl": "24px",
          "3xl": "40px",
        },
      },
      padding: {
        "width-clamp": "calc((100% - var(--width-clamp)) / 2)",
      },
      colors: {
        "off-black": "var(--off-black)",
        "off-white": "var(--off-white)",
        gray: "var(--gray)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
        "error-color": "var(--error-color)",
      },
    },
  },
  plugins: [],
  variants: {},
};
