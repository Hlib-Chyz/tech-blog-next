import { NextResponse } from 'next/server'
import posts from '@/data/posts.json'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const post = posts.find((post) => post.slug === slug)
  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
  return NextResponse.json(post)
}
