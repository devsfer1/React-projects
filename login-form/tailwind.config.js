module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#161616',
            
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}