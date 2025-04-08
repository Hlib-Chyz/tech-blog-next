'use client'

import Link from 'next/link'

export default function PostClient({ post }: { post: Post }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-2">
        By{' '}
        <Link
          href={`/authors/${post.authorId}`}
          className="text-blue-500 hover:underline"
        >
          {post.author}
        </Link>{' '}
        on {post.date}
      </p>
      <p className="mt-4">{post.excerpt}</p>
    </div>
  )
}
