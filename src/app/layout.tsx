import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import './sakura.css'

const inter = Inter({ subsets: ['latin'] })
const notoSerifJP = Noto_Serif_JP({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
})

export const metadata: Metadata = {
  title: 'Your Portfolio | Kanagawa Theme',
  description: 'A modern portfolio with Kanagawa dark theme and smooth animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoSerifJP.variable}`}>
      <body className={`${inter.className} bg-kanagawa-wave text-kanagawa-foam min-h-screen`}>
        <div className="fixed inset-0 pointer-events-none shoji-grid opacity-5" />
        {children}
      </body>
    </html>
  )
} 