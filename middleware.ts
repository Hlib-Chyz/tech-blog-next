// TODO
import { localeCookieName } from '@/constants'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (!req.cookies.get(localeCookieName)) {
    const acceptLanguage = req.headers.get('accept-language')?.split(',')[0]
    const preferredLocale =
      acceptLanguage && ['en', 'es'].includes(acceptLanguage)
        ? acceptLanguage
        : 'en'
    const res = NextResponse.next()
    res.cookies.set(localeCookieName, preferredLocale, { path: '/' })
    return res
  }
  return NextResponse.next()
}
