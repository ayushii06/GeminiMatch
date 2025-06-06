'use client'
import { Inter } from 'next/font/google'
import Navbar from '../components/common/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 💡 This must be inside a Client Component
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

// ✅ Move conditional logic to a separate Client Component
import { usePathname } from 'next/navigation'

function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const hideNavbarRoutes = ['/auth/login', '/auth/signup']

  const shouldShowNavbar = !hideNavbarRoutes.includes(pathname)

  return (
    <div id="root">
      {shouldShowNavbar && <Navbar />}
      {children}
    </div>
  )
}
