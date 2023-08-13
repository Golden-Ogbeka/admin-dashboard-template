/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],

  theme: {
    extend: {
      textColor: {
        primary: '#1D4ED8',
        success: '#25AD25',
        secondary: '#F0AC27',
        error: "#DC2626"
      },
      backgroundColor: {
        primary: '#1D4ED8',
        secondary: '#F0AC27',
        error: '#DC2626',
        grey: "#DEDCDC"
      },
      borderColor: {
        primary: '#D0D5DD',
      },
      fontFamily: {
        primary: "Inter, sans-serif",
        secondary: "Plus Jakarta Sans, sans-serif",
        poppins: "Poppins, sans-serif"
      },
      padding: {
        primary: '5vw',
      },
      minHeight: {
        main: 'calc(100vh - 80px)',
      },
      height: {
        main: 'calc(100vh - 80px)',
      },
    },
  },
};
