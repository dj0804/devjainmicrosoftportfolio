import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Jain - Portfolio',
  description: 'Computer Science student | Future Microsoft Innovator | Building intelligent, cloud-ready solutions.',
  keywords: ['Dev Jain', 'Portfolio', 'Microsoft', 'AI', 'ML', 'Cloud Computing', 'React', 'Next.js'],
  authors: [{ name: 'Dev Jain' }],
  creator: 'Dev Jain',
  openGraph: {
    title: 'Dev Jain - Portfolio',
    description: 'Computer Science student | Future Microsoft Innovator | Building intelligent, cloud-ready solutions.',
    type: 'website',
    url: 'https://dev-jain-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Jain - Portfolio',
    description: 'Computer Science student | Future Microsoft Innovator | Building intelligent, cloud-ready solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 