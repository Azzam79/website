const themes = require("daisyui/colors/themes");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#642b7c",
          "primary-focus": "#4506cb",
          "primary-content": "#ffffff",
          secondary: "#fa5721",
          "secondary-focus": "#642b7c",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#642b7c",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "fantasy", // first one will be the default theme
      "dark",
    ],
  },
};
