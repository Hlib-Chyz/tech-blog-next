import { NextResponse } from 'next/server'
import authors from '@/data/authors.json'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  console.log(2)
  const { id } = params

  const author = authors.find((author) => author.id === id)

  if (!author) {
    return NextResponse.json({ error: 'Author not found' }, { status: 404 })
  }

  return NextResponse.json(author)
}
