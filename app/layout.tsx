import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Sparkles } from "@/components/sparkles"
import { MouseEffect } from "@/components/mouse-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'SANVEG 2025',
  description: 'Join us for an electrifying experience of creativity, problem-solving, and next-level coding!',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SANVEG 2025</title>
        <meta name="description" content="Join us for an electrifying experience of creativity, problem-solving, and next-level coding!" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
          {/* Background effects */}
          <div className="fixed inset-0 z-0">
            <Sparkles />
            <MouseEffect />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
