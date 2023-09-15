import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PersonModal from '@/components/Modals/PersonModal'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GregList',
  description: 'GregList, where you find things!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PersonModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
