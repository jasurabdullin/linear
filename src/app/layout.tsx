import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Linear – A better way to build products',
  description: 'A clone of Linear built with Next.js, Supabase, and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
