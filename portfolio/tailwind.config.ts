/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        defColors: {
          main: "#38BDF8",
          dBG: "#333333",
          dGray: "#5F6A72",
          lBG: "#F9FAFB",
          lGray: "#E5E7EB",
          linkedin: "#0a66c2",
          git: "#6e5494",
        }
      },
      fontFamily: {
        // 👇 Add CSS variables
        hatton: ["var(--font-hatton)"],
        rale: ["var(--font-raleway)"],
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default module.exports
