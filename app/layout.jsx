
import { Inter } from 'next/font/google'
import './globals.css'
import { Aside, Nav } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({children}) {
    return (
      <html lang="en" dir='rtl'>
        <body className={inter.className}>
          <main className="max-h-screen bg-app-light-gray flex items-start overflow-hidden">
            <section className='asides max-w-fit min-h-screen pr-8 bg-white'>
                <Aside/>
            </section>
            <section className='page w-full h-screen '>
              <section className=' w-full'>
                  <Nav/>
              </section>
              <section className='wrapper h-[calc(100vh-108px)] overflow-y-auto padding-l py-6 pr-8'>
                {children}
              </section>
            </section>
          </main>
        </body>
      </html>
    )
}