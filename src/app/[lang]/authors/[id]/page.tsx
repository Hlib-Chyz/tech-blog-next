import AuthorClient from '@/components/AuthorClient'
import { fetchAuthorById } from '@/lib/features/authorsSlice'
import { store } from '@/lib/store'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getLocale } from '@/utils/locale'
import { Langs } from '@/types/Lang'
import { dictionary } from '/content'
import authors from '@/data/authors.json'
import { JsonLd } from '@/components/JsonLd'

export async function generateStaticParams() {
  const locales = Object.values(Langs)
  const params = []

  for (const locale of locales) {
    for (const author of authors) {
      params.push({ lang: locale, id: author.id })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; lang: Langs }>
}): Promise<Metadata> {
  const { id, lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchAuthorById({ id, locale }))
  const { author } = store.getState().authors

  if (!author) {
    return {
      title: dictionary[lang].metadataAuthorTitle,
      description: dictionary[lang].metadataAuthorDescription,
      alternates: {
        canonical: `http://localhost:3000/${lang}/authors/${id}`,
        languages: {
          [Langs.en]: `http://localhost:3000/${Langs.en}/authors/${id}`,
          [Langs.es]: `http://localhost:3000/${Langs.es}/authors/${id}`,
          'x-default': `http://localhost:3000/${Langs.en}/authors/${id}`,
        },
      },
    }
  }

  return {
    title: `${author.name} | ${dictionary[lang].techBlog}`,
    description: author.bio,
    alternates: {
      canonical: `http://localhost:3000/${lang}/authors/${id}`,
      languages: {
        [Langs.en]: `http://localhost:3000/${Langs.en}/authors/${id}`,
        [Langs.es]: `http://localhost:3000/${Langs.es}/authors/${id}`,
        'x-default': `http://localhost:3000/${Langs.en}/authors/${id}`,
      },
    },
  }
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string; lang: Langs }>
}) {
  const { id, lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchAuthorById({ id, locale }))
  const { author } = store.getState().authors

  if (!author) {
    notFound()
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.bio,
    sameAs: [], // Add social media or website links if available
    worksFor: {
      '@type': 'Organization',
      name: 'My App',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `http://localhost:3000/${lang}/authors/${id}`,
    },
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <AuthorClient lang={lang} author={author} />
    </>
  )
}
