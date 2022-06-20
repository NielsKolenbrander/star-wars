module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/src/assets/bg-stars.png')"
      }
    },
  },
  plugins: [],
}
