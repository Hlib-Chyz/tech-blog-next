import { Langs } from '@/types/Lang'
import { Metadata } from 'next'
import { dictionary } from '/content'

export const metadata: Metadata = {
  title: 'About Us | Tech Blog',
  description:
    'Learn more about our platform where developers can write and read tech articles on React, Next.js, CSS, and more.',
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Langs }>
}) {
  const { lang } = await params
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {dictionary[lang].aboutUsTitle}
      </h1>
      <p className="text-lg text-gray-700">
        {dictionary[lang].aboutUsDescription}
      </p>
    </div>
  )
}
