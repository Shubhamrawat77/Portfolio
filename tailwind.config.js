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
        'custom-gradient-first': 'linear-gradient(309deg, rgb(166, 221, 255) 2.25225%, rgb(51, 194, 255) 48.0785%, rgb(0, 119, 255) 100%)',
        'custom-gradient-second': 'radial-gradient(119% 105% at 100% 100%, rgba(171, 171, 171, .25) 0%, rgba(255, 255, 255, 0) 100%)',
        'custom-gradient-third': 'radial-gradient(100% 64% at 50% 100%, #002618 0%, rgb(0, 0, 0) 100%)',
        'custom-gradient-forth':'radial-gradient(75% 75% at 50% 100%, #5c1913 0%, rgb(0, 0, 0) 100%)',
        'custom-gradient-fifth':'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);',
         'custom-gradient-last':'radial-gradient(129% 80% at 98.3% 100%, #00446b 0%, rgb(0, 0, 0) 100%)'
      },
      dropShadow: {
        'text-xl': '0px 4px 8px rgba(0, 130, 217, .85)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    
  },
  plugins: [],
}

