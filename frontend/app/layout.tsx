import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OptiPlus - Eyecare Services',
  description: 'Client Management System for OptiPlus Eyecare Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Provider wrapper can be added here later for state management */}
        {children}
      </body>
    </html>
  )
}