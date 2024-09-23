/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      desktop: "1920px",
      notebook: "1270px",
    },
    extend: {
      backgroundImage: {
        'bigcar' : "url('$lib/background.png')"
      },
      fontFamily: {
        quest: ["Questrial", "sans-serif"],
        sofia:"'Sofia Sans',sans-serif",
        'spy': ['SpyAgency', 'sans-serif'],
  
      },
    },
  },
  plugins: [],
};
