'use client'

import FilterBar from '@/components/FilterBar'
import PostCard from '@/components/PostCard'
import { Langs } from '@/types/Lang'
import { Post } from '@/types/Post'
import { useState } from 'react'
import { dictionary } from '/content'

export default function PostsClient({
  posts,
  categories,
  tags,
  lang,
}: {
  posts: Post[]
  categories: string[]
  tags: string[]
  lang: Langs
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
      <h1 className="text-2xl font-bold mb-4">{dictionary[lang].postsTitle}</h1>
      <FilterBar
        categories={categories}
        tags={tags}
        onFilterChange={handleFilterChange}
        lang={lang}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} lang={lang} />
        ))}
      </div>
    </div>
  )
}
