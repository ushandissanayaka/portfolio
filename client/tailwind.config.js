module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808  ',
        secondary: "#e2062c",
        tertiary: "#00b7eb" // example color
      },
    },

    screens: {
      

      'lg': {'max': '2023px'},
      'sm': {'max': '1000px'},
     
    }
  },
  plugins: [],
};
