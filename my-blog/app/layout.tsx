import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/myProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
        <MyProfilePic />
        {children}</body>
    </html>
  )
}
