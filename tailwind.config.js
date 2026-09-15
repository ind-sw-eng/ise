/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
};
