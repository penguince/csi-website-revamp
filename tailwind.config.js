/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand blue - use for large text/buttons (3:1 contrast on white)
        'csi-blue': '#2d88de',
        // WCAG AA compliant link color - 4.87:1 contrast on white
        'csi-link': '#0a58ca',
        // Dark text - 6.52:1 contrast on white
        'csi-dark': '#53626e',
        // Light background
        'csi-gray': '#f1f1f1',
        // Focus ring color - 4.87:1 contrast (meets 3:1 for UI components)
        'csi-focus': '#0a58ca',
      },
    },
  },
  plugins: [],
}
