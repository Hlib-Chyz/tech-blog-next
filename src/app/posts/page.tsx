import PostsClient from '@/components/PostsClient'
import { fetchPosts } from '@/lib/features/postsSlice'
import { store } from '@/lib/store'
import { getLocale } from '@/utils/locale'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Blog Posts | Tech Blog',
  description: 'Browse all tech articles on React, Next.js, CSS, and more.',
}

export default async function PostsPage() {
  const locale = await getLocale()
  await store.dispatch(fetchPosts(locale))

  const { posts } = store.getState().posts

  const categories = Array.from(new Set(posts.map((post) => post.category)))
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="p-8">
      <PostsClient posts={posts} categories={categories} tags={tags} />
    </div>
  )
}
