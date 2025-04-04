'use client'

import { useState } from 'react'
import PostCard from '@/components/PostCard'
import FilterBar from '@/components/FilterBar'
import { Post } from '@/types/Post'

// export const metadata = {
//   title: 'All Blog Posts | Tech Blog',
//   description: 'Browse all tech articles on React, Next.js, CSS, and more.',
// }

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

export default function PostsPage() {
  const [filter, setFilter] = useState<{ category?: string; tag?: string }>({})
  const categories = Array.from(new Set(mockPosts.map((post) => post.category)))
  const tags = Array.from(new Set(mockPosts.flatMap((post) => post.tags)))

  const filteredPosts = mockPosts.filter((post) => {
    if (filter.category && post.category !== filter.category) return false
    if (filter.tag && !post.tags.includes(filter.tag)) return false
    return true
  })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <FilterBar
        categories={categories}
        tags={tags}
        onFilterChange={(newFilter) => setFilter({ ...filter, ...newFilter })}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
