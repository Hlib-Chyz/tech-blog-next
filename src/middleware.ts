import { localeCookieName } from '@/constants'
import { Langs } from '@/types/Lang'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

const locales = [Langs.en, Langs.es]
export const defaultLocale = Langs.en

function getLocaleFromCookie(request: NextRequest): string | undefined {
  return request.cookies.get(localeCookieName)?.value
}

function getLocaleFromAcceptLanguage(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const negotiator = new Negotiator({
    headers: { 'accept-language': acceptLanguage },
  })
  const languages = negotiator.languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  if (pathnameHasLocale) {
    return
  }
  const locale =
    getLocaleFromCookie(request) || getLocaleFromAcceptLanguage(request)

  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
