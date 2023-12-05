
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Afrita',
  description: 'Afrita Dashboard',
}

export default function RootLayout({children}) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={inter.className}>
        <main className="max-h-screen bg-app-light-gray flex items-start overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
