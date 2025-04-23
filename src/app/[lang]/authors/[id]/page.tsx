import AuthorClient from '@/components/AuthorClient'
import { fetchAuthorById } from '@/lib/features/authorsSlice'
import { store } from '@/lib/store'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getLocale } from '@/utils/locale'
import { Langs } from '@/types/Lang'
import { dictionary } from '/content'

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
    }
  }

  return {
    title: `${author.name} | ${dictionary[lang].techBlog}`,
    description: author.bio,
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

  return <AuthorClient lang={lang} author={author} />
}
