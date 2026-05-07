import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: {
    relative: true,
    files: ['./index.html', './src/**/*.{js,jsx}']
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#070812',
        pearl: '#f7f8ff',
        aurora: {
          cyan: '#4deeea',
          blue: '#5f6cff',
          pink: '#f252ff',
          lime: '#d8ff63'
        }
      },
      boxShadow: {
        glow: '0 0 50px rgba(95, 108, 255, 0.35)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,0.18)'
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        float: 'float 7s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        }
      }
    }
  },
  plugins: [typography]
};
