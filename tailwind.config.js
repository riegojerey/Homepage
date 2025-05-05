/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kanagawa: {
          // Main colors inspired by The Great Wave off Kanagawa
          wave: '#1F1F28', // Dark background
          foam: '#DCD7BA', // Light text
          deep: '#16161D', // Deeper background
          ocean: '#2A2A37', // Lighter background
          accent: '#7E9CD8', // Primary accent
          secondary: '#957FB8', // Secondary accent
          highlight: '#DCA561', // Highlight color
          sakura: '#FF5D62', // Error/attention color
          // Additional Japanese-inspired colors
          matcha: '#98BB6C', // Soft green
          momiji: '#E46876', // Autumn red
          fuji: '#938AA9', // Soft purple
          bamboo: '#87A987', // Muted green
          ink: '#363646', // Dark gray
          paper: '#C8C093', // Light warm gray
          gold: '#E6C384', // Warm gold
        }
      },
      fontFamily: {
        'noto-jp': ['var(--font-noto-serif-jp)'],
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'ink-spread': 'ink-spread 2s ease-out forwards',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'ink-spread': {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      }
    },
  },
  plugins: [],
} 