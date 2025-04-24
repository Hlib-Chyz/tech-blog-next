import '@/app/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'A platform to share and learn about tech articles.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
