'use client'

import { Langs } from '@/types/Lang'
import { Post } from '@/types/Post'
import Link from 'next/link'
import { dictionary } from '/content'

export default function PostClient({
  post,
  lang,
}: {
  post: Post
  lang: Langs
}) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-2">
        {dictionary[lang].by}{' '}
        <Link
          href={`/authors/${post.authorId}`}
          className="text-blue-500 hover:underline"
        >
          {post.author}
        </Link>{' '}
        {dictionary[lang].on} {post.date}
      </p>
      <p className="mt-4">{post.excerpt}</p>
    </div>
  )
}
