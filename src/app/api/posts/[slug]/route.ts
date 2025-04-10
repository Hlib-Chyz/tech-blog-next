import { NextResponse } from 'next/server'
import posts from '@/data/posts.json'
import { localeCookieName } from '@/constants'
import { Post } from '@/types/Post'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  // TODO
  const cookies = request.headers.get('cookie') || ''
  const localeMatch = cookies.match(new RegExp(`${localeCookieName}=([^;]+)`))
  const locale: 'en' | 'es' = (localeMatch ? localeMatch[1] : 'en') as
    | 'en'
    | 'es'
  const post = posts.find((post) => post.slug === slug)
  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
  const localizedPost: Post = {
    id: post.id,
    title: post.title[locale],
    excerpt: post.excerpt[locale],
    slug: post.slug,
    category: post.category[locale],
    tags: post.tags[locale],
    author: post.author[locale],
    authorId: post.authorId,
    date: post.date,
  }
  return NextResponse.json(localizedPost)
}
