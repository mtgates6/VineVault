import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VineVault - Your Wine Journey Starts Here',
  description: 'Discover, rate, and share your wine experiences with fellow enthusiasts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 