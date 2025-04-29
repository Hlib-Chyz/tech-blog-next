import Card from '@/components/Card'
import LanguageSelector from '@/components/LanguageSelector'
import { Langs } from '@/types/Lang'
import { dictionary } from '/content'
import { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Langs }>
}): Promise<Metadata> {
  const { lang } = await params

  return {
    title: dictionary[lang].homeTitle,
    description: dictionary[lang].homeDescription,
    alternates: {
      canonical: `http://localhost:3000/${lang}`,
      languages: {
        [Langs.en]: `http://localhost:3000/${Langs.en}`,
        [Langs.es]: `http://localhost:3000/${Langs.es}`,
        'x-default': `http://localhost:3000/${Langs.en}`,
      },
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Langs }>
}) {
  const { lang } = await params

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: dictionary[lang].homeTitle,
    description: dictionary[lang].homeDescription,
    url: `http://localhost:3000/${lang}`,
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {dictionary[lang].greeting}
          </h1>
          <p className="text-gray-600 mb-6">
            {dictionary[lang].welcomeMessage}
          </p>
          <div className="mb-4">
            <LanguageSelector />
          </div>
          <div className="mb-4">
            <Card
              title={dictionary[lang].aboutUsTitle}
              description={dictionary[lang].aboutUsDescription}
              href="/about"
            />
          </div>
          <div className="mb-4">
            <Card
              title={dictionary[lang].postsTitle}
              description={dictionary[lang].postsDescription}
              href="/posts"
            />
          </div>
        </div>
      </div>
    </>
  )
}
