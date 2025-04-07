import AuthorClient from '@/components/AuthorClient'
import { fetchAuthorById } from '@/lib/features/authorsSlice'
import { store } from '@/lib/store'
import { notFound } from 'next/navigation'

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  await store.dispatch(fetchAuthorById(id))
  const { author } = store.getState().authors

  if (!author) {
    notFound()
  }

  return <AuthorClient author={author} />
}
