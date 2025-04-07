import { fetchPosts } from '@/lib/features/postsSlice'
import { store } from '@/lib/store'
import PostsClient from '@/components/PostsClient'

export const metadata = {
  title: 'All Blog Posts | Tech Blog',
  description: 'Browse all tech articles on React, Next.js, CSS, and more.',
}

export default async function PostsPage() {
  await store.dispatch(fetchPosts())

  const { posts } = store.getState().posts

  const categories = Array.from(new Set(posts.map((post) => post.category)))
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <PostsClient posts={posts} categories={categories} tags={tags} />
    </div>
  )
}
