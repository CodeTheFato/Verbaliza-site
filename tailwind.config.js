module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  plugins: [
    require('flowbite/plugin'),
    // ,
    // require('daisyui')
  ],
  // daisyui: {
  //   themes: false,
  //   base: false,
  //   darkTheme: false,
  // },
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-nunito)'],
      },
    },
  },
}
