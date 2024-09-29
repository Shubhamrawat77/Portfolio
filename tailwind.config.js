/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair:['Playfair', 'serif','Georgia'],
        Quicksend:['Quicksand', 'serif','Georgia']
      },
            backgroundImage: {
        'pc': "url('/src/assets/pc.jpg')",
        'mobile': "url('/src/assets/mobile.png')",
      }
    },
    
  },
  plugins: [],
}

