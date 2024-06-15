/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html',
            './src/js/*.js',],
  theme: {
    extend: {
      'animation': {
        'hello': 'slide-up 1s 1',
        'menu': 'bounce-menu 1.5s infinite',
        'chevron-down': 'bounce-chevron-down 1s infinite',
        'chevron-right': 'bounce-chevron-right 1s infinite',
        'chevron-left': 'bounce-chevron-left 1s infinite',
      },
      'keyframes': {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bounce-menu': {
          '0%, 100%': {
            transform: 'translateY(-50%) rotate(-90deg) translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
           },
          '50%': {
            transform: 'translateY(-50%) rotate(-90deg) translateY(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'bounce-chevron-down': {
          '0%, 100%': {
            transform: 'translateX(-50%) translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
           },
          '50%': {
            transform: 'translateX(-50%) translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'bounce-chevron-right': {
          '0%, 100%': {
            transform: 'translateY(-50%) rotate(-90deg) translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
           },
          '50%': {
            transform: 'translateY(-50%) rotate(-90deg) translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'bounce-chevron-left': {
          '0%, 100%': {
            transform: 'translateY(-50%) rotate(90deg) translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
           },
          '50%': {
            transform: 'translateY(-50%) rotate(90deg) translateY(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
