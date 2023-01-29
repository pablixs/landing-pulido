/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // important:true,
  important: true,
  content: ['views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"}
      },
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [
    require("daisyui"),
  ],
}
