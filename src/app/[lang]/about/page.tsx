import { Langs } from '@/types/Lang'
import { Metadata } from 'next'
import { dictionary } from '/content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Langs }>
}): Promise<Metadata> {
  const { lang } = await params
  return {
    title: dictionary[lang].metadataAboutTitle,
    description: dictionary[lang].metadataAboutDescription,
  }
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
