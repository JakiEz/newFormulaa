/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      desktop: "1920px",
      notebook: "1270px",
    },
    extend: {
      fontFamily: {
        quest: ["Questrial", "sans-serif"],
        sofia:"'Sofia Sans',sans-serif",
        spyagency: "'spyagency', sans-serif"
  
      },
    },
  },
  plugins: [],
};
