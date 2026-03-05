import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Career Charm - Your Professional DNA, Decoded',
  description: "India's First Logic-Driven Career Intelligence Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-clean-white font-heading text-authority">
        {children}
      </body>
    </html>
  )
}
