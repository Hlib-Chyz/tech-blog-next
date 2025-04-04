import Link from 'next/link'
import { Post } from '@/types/Post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-lg font-semibold text-blue-600 hover:underline">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
      <div className="text-sm text-gray-500 mt-4">
        <span>Category: {post.category}</span>
        <span className="ml-4">Tags: {post.tags.join(', ')}</span>
      </div>
    </div>
  )
}
