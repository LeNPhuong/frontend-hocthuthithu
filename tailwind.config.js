/** @type {import('tailwindcss').Config} */
import tailwindanm from "tailwindcss-animated";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter"] },
    },
    screens: {
      sm: "1px",
      // => @media (min-width: 640px) { ... }

      md: "390px",
      // => @media (min-width: 768px) { ... }

      lg: "600px",
      // xlmini: "767px",
      // => @media (min-width: 1024px) { ... }
      xl: "900px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [tailwindanm],
};
