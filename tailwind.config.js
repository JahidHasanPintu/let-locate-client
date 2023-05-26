module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        'screen': '115vh',
      }
    },
  },
  daisyui: {
    themes: [
      {
        finixtheme: {
          primary: "#0A4D68",
          secondary: "#088395",
          accent: "#05BFDB",
          neutral: "#00FFCA",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}