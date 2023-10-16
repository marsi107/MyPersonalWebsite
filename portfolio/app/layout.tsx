import './globals.css'
import type { Metadata } from 'next'
import { Lato, Raleway } from 'next/font/google'
import localFont from 'next/font/local'

//const hatton = localFont({ src: '../public/resources/fonts/PP Hatton Ultralight 200.otf' })
const hatton = localFont({
  src: [
    {
      path: '../public/resources/fonts/PP Hatton Ultralight 200.otf',
      weight: '200'
    },
    {
      path: '../public/resources/fonts/PP Hatton Medium 500.otf',
      weight: '500'
    }
  ],
  variable: '--font-hatton'
})
//const hatton = Hatton({
//  subsets: ['latin'],
//  display: 'swap',
//  variable: '--font-hatton',
//})
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: "400",
})
const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
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
      className={`${hatton.variable} ${raleway.variable} ${lato.variable} font-sans dark`}
    >
      <body className="bg-defColors-lBG text-defColors-dBG dark:bg-defColors-dBG dark:text-defColors-lBG font-lato" >{children}</body>
    </html>
  )
}
