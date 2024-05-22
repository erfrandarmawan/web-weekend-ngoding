/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel'],
        anton: ['Anton'],
        poppins: ['Poppins'],
        teachers: ['Teachers'],
        gayathri: ['Gayathri'],
        montaga: ['Montaga'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      "light",
      {
        senyawa: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#01004C",
          secondary: "#E56CCA"
        },
        tjendana: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#B89339",
          secondary: "#86353D"
        },
      },
    ],
  },
}

