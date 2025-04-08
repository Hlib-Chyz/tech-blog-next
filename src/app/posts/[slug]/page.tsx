import { notFound } from 'next/navigation'
import PostClient from '@/components/PostClient'
import { store } from '@/lib/store'
import { fetchPostById } from '@/lib/features/postsSlice'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const { slug } = params
  await store.dispatch(fetchPostById(slug))
  const { post } = store.getState().posts

  if (!post) {
    return {
      title: 'Post Not Found | Tech Blog',
      description: 'The post you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  await store.dispatch(fetchPostById(slug))
  const { post } = store.getState().posts

  if (!post) {
    notFound()
  }

  return <PostClient post={post} />
}
