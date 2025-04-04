import { Author } from '@/types/Autor'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'John Doe',
    bio: 'A passionate frontend developer and React enthusiast.',
    articles: [
      {
        title: 'Getting Started with React',
        slug: 'getting-started-with-react',
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    bio: 'An expert in Next.js and SEO optimization.',
    articles: [
      {
        title: 'Next.js SEO Best Practices',
        slug: 'nextjs-seo-best-practices',
      },
    ],
  },
]

export default function AuthorPage({ params }: { params: { id: string } }) {
  const author = mockAuthors.find((a) => a.id === params.id)

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
