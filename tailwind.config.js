// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%, 15%": { transform: "translateX(0%)" },
          "20%, 35%": { transform: "translateX(-100%)" },
          "40%, 55%": { transform: "translateX(-200%)" },
          "60%, 75%": { transform: "translateX(-300%)" },
          "80%, 95%": { transform: "translateX(-400%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slider: "slider 20s infinite",
      },
    },
  },
  plugins: [],
};
