/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          150: "#404145",
          170: "#F5F5F5",
          250: "#E4E5E7",
          350: "#95979D",
          450: "#62646A",
          550: "#F8F7FF",
          650: "#020101",
          750: "#727272",
          850: "#F5F8FA",
          120: "#CBD6E2",
          130: "#33475B",
          140: "#6D6D6D",
          160: "#DADBDD",
        },
        blue: {
          110: "#48AEEE",
          130: "#EDF5FB",
          160: "#2E25AD",
          150: "#01A0C7",
          250: "#14A49C",
          350: "#333333",
          550: "#74767E",
          650: "#E4E5E7",
          750: "#7d7d7d",
          950: "#1E1E1E",
          120: "#131010",
          140: "#222325",
          170: "#9B6928",
          180: "#7EC6C8",
        },
        green: {
          150: "#3CA80A",
          250: "#5BD720",
          350: "#00B16D",
        },
        yellow: {
          150: "#E6EB13",
        },
      },
      screens: {
        xxs: "385px",
        "1xl": "1440px",
      },
    },
  },
  plugins: [],
};
