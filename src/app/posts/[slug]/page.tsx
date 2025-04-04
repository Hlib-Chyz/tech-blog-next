'use client'

import { RootState } from '@/lib/store'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { useSelector } from 'react-redux'

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }): Promise<Metadata> {
//   const post = mockPosts.find((p) => p.slug === params.slug)
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//       description: 'The post you are looking for does not exist.',
//     }
//   }

//   return {
//     title: `${post.title} | Tech Blog`,
//     description: post.excerpt,
//   }
// }

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const posts = useSelector((state: RootState) => state.posts)
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

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
