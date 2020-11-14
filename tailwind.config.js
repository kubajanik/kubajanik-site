module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    borderColor: ['hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    textColor: ['hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    textOpacity: ['dark'],
    borderOpacity: ['dark'],
    borderStyle: ['dark'],
    opacity: ['disabled'],
    cursor: ['disabled'],
    pointerEvents: ['disabled']
  },
  plugins: [require('@danestves/tailwindcss-darkmode')()],
}
