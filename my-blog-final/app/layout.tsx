import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lusheisteys Blog',
  description: 'The realest blog out there',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
        {children}
        </main>
        </body>
    </html>
  )
}
