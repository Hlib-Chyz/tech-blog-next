'use client'

import { Author } from '@/types/Author'
import { Langs } from '@/types/Lang'
import Link from 'next/link'
import { dictionary } from '/content'

export default function AuthorClient({
  author,
  lang,
}: {
  author: Author
  lang: Langs
}) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{author.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{author.bio}</p>
      <h2 className="text-2xl font-semibold mb-4">
        {dictionary[lang].authorArticlesTitle}
      </h2>
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
