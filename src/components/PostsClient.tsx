'use client'

import { useState } from 'react'
import PostCard from '@/components/PostCard'
import FilterBar from '@/components/FilterBar'
import { Post } from '@/types/Post'

export default function PostsClient({
  posts,
  categories,
  tags,
}: {
  posts: Post[]
  categories: string[]
  tags: string[]
}) {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleFilterChange = (filter: { category?: string; tag?: string }) => {
    const { category, tag } = filter
    let filtered = posts

    if (category) {
      filtered = filtered.filter((post) => post.category === category)
    }

    if (tag) {
      filtered = filtered.filter((post) => post.tags.includes(tag))
    }

    setFilteredPosts(filtered)
  }

  return (
    <div>
      <FilterBar
        categories={categories}
        tags={tags}
        onFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
