/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        custom: ['CustomFontName']
      },

      colors: {
        tashi: {
          primary: '#0D0D26',
          secondary: '#2C124E',
          tertiary: '#AF98CB',
          
        }
      },
      backgroundImage: {
        'gradient-tashi': 'linear-gradient(90deg, #0D0D26, #2C124E)',

      
        
      },
    },
  },
  plugins: [],
}

