module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      boxShadow: {
        modal: '0px 4px 10px 5px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      spacing: {
        1.5: '10px',
        3.5: '14px'
      }
    }
  },
  plugins: []
}
