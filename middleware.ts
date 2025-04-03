import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const cookieName = 'NEXT_LOCALE'
  if (!req.cookies.get(cookieName)) {
    const acceptLanguage = req.headers.get('accept-language')?.split(',')[0]
    const preferredLocale =
      acceptLanguage && ['en', 'es'].includes(acceptLanguage)
        ? acceptLanguage
        : 'en'
    const res = NextResponse.next()
    res.cookies.set(cookieName, preferredLocale, { path: '/' })
    return res
  }
  return NextResponse.next()
}
