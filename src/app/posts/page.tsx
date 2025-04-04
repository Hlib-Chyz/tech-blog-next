'use client'

import FilterBar from '@/components/FilterBar'
import PostCard from '@/components/PostCard'
import { RootState } from '@/lib/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'

// export const metadata = {
//   title: 'All Blog Posts | Tech Blog',
//   description: 'Browse all tech articles on React, Next.js, CSS, and more.',
// }

export default function PostsPage() {
  const posts = useSelector((state: RootState) => state.posts)
  const [filter, setFilter] = useState<{ category?: string; tag?: string }>({})
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  const filteredPosts = posts.filter((post) => {
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
