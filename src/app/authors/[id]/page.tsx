'use client'

import { RootState } from '@/lib/store'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { useSelector } from 'react-redux'

export default function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const authors = useSelector((state: RootState) => state.authors)
  const author = authors.find((a) => a.id === id)

  if (!author) {
    notFound()
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{author.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{author.bio}</p>
      <h2 className="text-2xl font-semibold mb-4">Articles</h2>
      <ul className="list-disc list-inside">
        {author.articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/posts/${article.slug}`}
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
