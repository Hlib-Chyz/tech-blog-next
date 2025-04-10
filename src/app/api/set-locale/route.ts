import { localeCookieName } from '@/constants'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { locale } = await req.json()
  console.log('Cookies in request:', req.headers.get('cookie'))
  const res = NextResponse.json({ success: true })
  res.cookies.set(localeCookieName, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
  })

  return res
}
