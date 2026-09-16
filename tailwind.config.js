/** @type {import('tailwindcss').Config} */

// Colours and typography taken from itu.dk, so this site reads as part of the
// university's own web presence: purple for the chrome, teal for actions, and
// the pastel band colours ITU uses to separate sections.
const itu = {
  purple: "#5d2652",
  "purple-80": "#7d5175",
  "purple-20": "#dfd4dc",
  "purple-05": "#f7f4f6",
  teal: "#1e7873",
  "teal-dark": "#18605c",
  "teal-20": "#d2e4e3",
  mint: "#addbc5",
  "mint-20": "#eff8f3",
  "pale-green": "#cee2d0",
  "pale-green-20": "#f5faf6",
  cream: "#fff799",
  "cream-20": "#fffdeb",
  beige: "#ffdfad",
  "beige-20": "#fff9ee",
  rose: "#fbd3d1",
  ocean: "#005e7e",
  arctic: "#90d6ec",
  gold: "#c09944",
  forest: "#22463a",
  ink: "#333333",
};

module.exports = {
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.{html,md}",
    "./_posts/*.md",
    "./_projects/*.md",
    "./*.{html,md}",
  ],
  theme: {
    extend: {
      colors: { itu },
      fontFamily: {
        sans: ['"Open Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Barlow Condensed"', '"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
