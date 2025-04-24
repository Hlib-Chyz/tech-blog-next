import { Langs } from '@/types/Lang'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Page Not Found | My App',
  description:
    'Oops! The page you are looking for does not exist. Return to the homepage to explore more.',
}

export default async function NotFoundPage() {
  return (
    <html lang={Langs.en}>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
          <h1 className="text-6xl font-extrabold mb-4">404</h1>
          <p className="text-xl mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Go Back Home
          </Link>
        </div>
      </body>
    </html>
  )
}
