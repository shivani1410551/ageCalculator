/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "430px",
      md: "640px",
      lg: "760px",
      xl: "1375px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        Purple: "hsl(259, 100%, 65%)",
        Lightred: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        Offwhite: "hsl(0, 0%, 94%)",
        Lightgrey: "hsl(0, 0%, 86%)",
        Smokeygrey: "hsl(0, 1%, 44%)",
        Offblack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
