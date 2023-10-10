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
          first: "#EFEEF0",
          second: "#009688",
          third: "#7D4E9D",
          text: "#322F36",
          first_dark: "#322F36",
          second_dark: "#2E856E",
          third_dark: "#3F0094",
          text_dark: "#EFEEF0",
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
