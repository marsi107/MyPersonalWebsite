import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Noto_Sans, Roboto } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})
const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosans',
  weight: "400",
})
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: "400"
})

export const metadata: Metadata = {
  title: 'Ruben Portfolio',
  description: 'Ruben Martinez Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={`${openSans.variable} ${notoSans.variable} ${roboto.variable} font-sans dark`}
    >
      <body className="bg-defColors-lBG text-defColors-dBG dark:bg-defColors-dBG dark:text-defColors-lBG font-noto" >{children}</body>
    </html>
  )
}
