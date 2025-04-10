import { NextResponse } from 'next/server'
import authors from '@/data/authors.json'
import { Author } from '@/types/Author'
import { localeCookieName } from '@/constants'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  // TODO
  const cookies = request.headers.get('cookie') || ''
  const localeMatch = cookies.match(new RegExp(`${localeCookieName}=([^;]+)`))
  const locale: 'en' | 'es' = (localeMatch ? localeMatch[1] : 'en') as
    | 'en'
    | 'es'
  const author = authors.find((author) => author.id === id)
  if (!author) {
    return NextResponse.json({ error: 'Author not found' }, { status: 404 })
  }
  const localizedAuthor: Author = {
    id: author.id,
    name: author.name[locale],
    bio: author.bio[locale],
    articles: author.articles.map((article) => ({
      title: article.title[locale],
      slug: article.slug,
    })),
  }
  return NextResponse.json(localizedAuthor)
}
