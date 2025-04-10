import { NextResponse } from 'next/server'
import posts from '@/data/posts.json'
import { Post } from '@/types/Post'
import { localeCookieName } from '@/constants'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  // TODO
  console.log('Cookies in request:', request.headers.get('cookie'))
  const cookieStore = await cookies()
  const localeMatch = cookieStore.get(localeCookieName)?.value
  const locale: 'en' | 'es' = (localeMatch ? localeMatch[1] : 'en') as
    | 'en'
    | 'es'
  return NextResponse.json(
    posts.map((post) => {
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
      return localizedPost
    }),
  )
}
