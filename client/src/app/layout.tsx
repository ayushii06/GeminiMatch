import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'TechDhundho',
  description: 'My App is a...',
  icons:{
    icon:'.../../icon.png'
  }
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
            <Navbar/>
            {children}</div>
      </body>
    </html>
  )
}