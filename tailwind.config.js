/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fox: {
          cream: '#fff7e8',
          paper: '#fffaf0',
          ink: '#4a382c',
          russet: '#d95f2e',
          amber: '#f2ad4b',
          moss: '#7c9a5d',
          lake: '#7fb8b8',
          dusk: '#76628f',
        },
      },
      fontFamily: {
        display: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      boxShadow: {
        panel: '0 22px 60px rgba(89, 54, 28, 0.16)',
        soft: '0 12px 28px rgba(89, 54, 28, 0.10)',
      },
    },
  },
  plugins: [],
};
