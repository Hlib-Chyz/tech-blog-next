import { localeCookieName } from '@/constants'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { locale } = await req.json()
  const cookieStore = await cookies()
  cookieStore.set(localeCookieName, locale)
  return NextResponse.json({ success: true })
}
