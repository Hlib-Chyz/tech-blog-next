import { NextResponse } from 'next/server'
import authors from '@/data/authors.json'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const author = authors.find((author) => author.id === id)
  if (!author) {
    return NextResponse.json({ error: 'Author not found' }, { status: 404 })
  }
  return NextResponse.json(author)
}
