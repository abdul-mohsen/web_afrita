import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Afrita',
  description: 'Afrita Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>
      <head />
      <body className={inter.className}>
        <main className="max-h-screen bg-app-light-gray flex items-start overflow-hidden">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
