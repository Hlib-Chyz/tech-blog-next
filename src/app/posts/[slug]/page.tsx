import { notFound } from 'next/navigation'
import { Post } from '@/types/Post'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = mockPosts.find((p) => p.slug === params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
  }
}

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to get started.',
    slug: 'getting-started-with-react',
    category: 'React',
    tags: ['JavaScript', 'Frontend'],
    author: 'John Doe',
    authorId: '1',
    date: '2023-04-01',
  },
  {
    id: '2',
    title: 'Next.js SEO Best Practices',
    excerpt: 'Optimize your Next.js app for search engines.',
    slug: 'nextjs-seo-best-practices',
    category: 'Next.js',
    tags: ['SEO', 'Web Development'],
    author: 'Jane Smith',
    authorId: '2',
    date: '2023-03-15',
  },
]

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = mockPosts.find((p) => p.slug === params.slug)

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
