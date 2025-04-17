import AuthorClient from '@/components/AuthorClient'
import { fetchAuthorById } from '@/lib/features/authorsSlice'
import { store } from '@/lib/store'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getLocale } from '@/utils/locale'
import { Langs } from '@/types/Lang'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const { id } = params
  const locale = await getLocale()
  await store.dispatch(fetchAuthorById({ id, locale }))
  const { author } = store.getState().authors

  if (!author) {
    return {
      title: 'Author Not Found | Tech Blog',
      description: 'The author you are looking for does not exist.',
    }
  }

  return {
    title: `${author.name} | Tech Blog`,
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
