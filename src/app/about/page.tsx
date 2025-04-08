import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'About Us | Tech Blog',
  description:
    'Learn more about our platform where developers can write and read tech articles on React, Next.js, CSS, and more.',
}

export default function AboutPage() {
  const t = useTranslations()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('aboutUsTitle')}</h1>
      <p className="text-lg text-gray-700">{t('aboutUsDescription')}</p>
    </div>
  )
}
