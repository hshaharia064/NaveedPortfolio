/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

        backgroundImage: {
        'custom-gradient': 'linear-gradient(to left top, #000000, #000000, #000000, #000000, #000000, #111111, #1c1b1b, #262525, #3e3d3d, #595757, #747272, #918f8f)',
      
       
        'btn-gradient': 'linear-gradient(to right, #292828, #232222, #1c1c1c, #161515, #0f0e0e, #111111, #131313, #151515, #1f1f1f, #292929, #343434, #3f3f3f)',
        'text-gradient': 'linear-gradient(to right, #000000, #080808, #0e0e0e, #141414, #181818, #252525, #323333, #404141, #5d5e5e, #7b7e7e, #9a9e9e, #bbc0c0)',
      },

      fontFamily : {
        poppins: ['Poppins', 'sans-serif'],
        island: ['Island Moments' , 'cursive'],
      }

    },
  },
  plugins: [],
}

