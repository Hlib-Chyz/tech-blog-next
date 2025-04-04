import Card from '@/components/Card'
import LanguageSelector from '@/components/LanguageSelector'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {t('greeting')}
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to our application! Please select your preferred language
          below.
        </p>
        <div className="mb-4">
          <LanguageSelector />
        </div>
        <div className="mb-4">
          <Card
            title="About Us"
            description="Learn more about our mission and values."
            href="/about"
          />
        </div>
        <div className="mb-4">
          <Card
            title="Posts"
            description="Browse all tech articles on React, Next.js, CSS, and more."
            href="/posts"
          />
        </div>
      </div>
    </div>
  )
}
