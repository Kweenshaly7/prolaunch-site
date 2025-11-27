module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7bb640',
        'primary-dark': '#5a8a2f',
        'primary-light': '#a8d66e',
        teal: '#19a08c',
        'teal-dark': '#0f6b5a',
        'teal-light': '#4ebfb0',
        forest: '#124745',
        'forest-light': '#1a6363',
        cloud: '#f8faf9',
        'cloud-light': '#fcfdfb',
        stone: '#d6e1df',
        'stone-dark': '#8b9a96'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7bb640 0%, #19a08c 100%)',
        'gradient-forest': 'linear-gradient(135deg, #124745 0%, #0f6b5a 100%)',
        'gradient-warm': 'linear-gradient(135deg, #7bb640 0%, #f59e0b 100%)'
      }
    },
  },
  plugins: [],
}
