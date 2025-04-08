import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFoundPage() {
  const t = useTranslations()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-6xl font-extrabold mb-4">{t('notFoundTitle')}</h1>
      <p className="text-xl mb-6">{t('notFoundMessage')}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        {t('notFoundButton')}
      </Link>
    </div>
  )
}
