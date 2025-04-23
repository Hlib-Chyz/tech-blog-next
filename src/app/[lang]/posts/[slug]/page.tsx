import { notFound } from 'next/navigation'
import PostClient from '@/components/PostClient'
import { store } from '@/lib/store'
import { fetchPostById } from '@/lib/features/postsSlice'
import { Metadata } from 'next'
import { getLocale } from '@/utils/locale'
import { Langs } from '@/types/Lang'
import { dictionary } from '/content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Langs }>
}): Promise<Metadata> {
  const { slug, lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchPostById({ slug, locale }))
  const { post } = store.getState().posts

  if (!post) {
    return {
      title: dictionary[lang].metadataPostTitle,
      description: dictionary[lang].metadataPostDescription,
    }
  }

  return {
    title: `${post.title} | ${dictionary[lang].techBlog}`,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; lang: Langs }>
}) {
  const { slug, lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchPostById({ slug, locale }))
  const { post } = store.getState().posts

  if (!post) {
    notFound()
  }

  return <PostClient post={post} lang={lang} />
}
