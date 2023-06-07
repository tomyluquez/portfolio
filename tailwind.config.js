/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    colors: {
      header: "#370617",
      blanco: "#fafafa",
      icons: "#ffdd67",
      negro: "#000000",
      rojo: "#d00000",
      gris: "#212121",
      html: "#E44D26",
      css: "#264DE4",
      js: "#F7DF1E",
      react: "#00D8FF",
      tailwind: "#38BDF8",
      node: "#8CC84B",
      git: "#F03C2E",
      transparente: "rgba(0, 0, 0, 0.8)",
    },
    fontFamily: {
      montserrat: ["Montserrat Alternates", "sans-serif"],
      roboto: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
