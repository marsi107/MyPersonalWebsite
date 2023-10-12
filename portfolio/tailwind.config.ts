import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        defColors: {
          main: "#38BDF8",
          dBG: "#333333",
          dGray: "#5F6A72",
          lBG: "#F9FAFB",
          lGray: "#F3F4F6",
        }
      },
      fontFamily: {
        // 👇 Add CSS variables
        open: ["var(--font-opensans)"],
        noto: ["var(--font-notosans)"],
        rob: ["var(--font-roboto)"],
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
export default config
