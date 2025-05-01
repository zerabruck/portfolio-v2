module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // add more paths as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff', // Example blue
        secondary: '#ff6347', // Example tomato
        // Add your additional colors here
      },
    },
  },
  plugins: [],
}