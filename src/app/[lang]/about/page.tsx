import { Langs } from '@/types/Lang'
import { Metadata } from 'next'
import { dictionary } from '/content'
import { JsonLd } from '@/components/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Langs }>
}): Promise<Metadata> {
  const { lang } = await params
  return {
    title: dictionary[lang].metadataAboutTitle,
    description: dictionary[lang].metadataAboutDescription,
    alternates: {
      canonical: `http://localhost:3000/${lang}/about`,
      languages: {
        [Langs.en]: `http://localhost:3000/${Langs.en}/about`,
        [Langs.es]: `http://localhost:3000/${Langs.es}/about`,
        'x-default': `http://localhost:3000/${Langs.en}/about`,
      },
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Langs }>
}) {
  const { lang } = await params

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: dictionary[lang].organizationName,
    url: `https://yourdomain.com/${lang}/about`,
    logo: 'https://yourdomain.com/logo.png',
    description: dictionary[lang].organizationDescription,
    sameAs: [
      'https://facebook.com/yourpage',
      'https://twitter.com/yourpage',
      'https://linkedin.com/company/yourpage',
    ],
  }
  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          {dictionary[lang].aboutUsTitle}
        </h1>
        <p className="text-lg text-gray-700">
          {dictionary[lang].aboutUsDescription}
        </p>
      </div>
    </>
  )
}
