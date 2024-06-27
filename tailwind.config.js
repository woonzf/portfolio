/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html',
            './src/js/*.js',],
  theme: {
    extend: {
      'colors': {
        'theme-1': '#f87171',
        'theme-2': '#facc15',
        'theme-3': '#0ea5e9',
        'light': '#f1f5f9',
        'dark': '#27272a',
      },
      'gridTemplateColumns': {
        'repeat-auto-30': 'repeat(auto-fill, 30px)',
        'repeat-auto-40': 'repeat(auto-fill, 40px)',
      },
      'animation': {
        'hello': 'slide-up 1s 1',
        'menu': 'bounce-menu 1.5s infinite',
        'bounce-scroll': 'bounce-scroll 1s infinite',
        'chevron-right': 'bounce-chevron-right 1s infinite',
        'chevron-left': 'bounce-chevron-left 1s infinite',
        'shrink-width': 'shrink-width 10s linear infinite',
        'appear-cycle': 'appear-cycle 10s infinite alternate',
        'appear-cycle-r': 'appear-cycle 10s infinite alternate-reverse',
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
        'bounce-scroll': {
          '0%, 100%': {
            transform: 'translateY(-150%) translateX(33%) rotate(-90deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
           },
          '50%': {
            transform: 'translateY(-100%) translateX(33%) rotate(-90deg)',
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
        'shrink-width': {
          '0': { width: '100%' },
          '100%': { width: '0' },
        },
        'appear-cycle': {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
