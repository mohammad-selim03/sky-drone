/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        theme: "background-color, color, border-color",
      },
    },
  },
  plugins: [],
};

export const darkMode = "class";
