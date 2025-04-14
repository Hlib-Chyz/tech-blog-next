import { cookies } from 'next/headers'
import { Locale } from '@/types/Locale'
import { localeCookieName } from '@/constants'

export async function getLocale(): Promise<Locale> {
  const locale = (await cookies()).get(localeCookieName)?.value || 'en'
  return locale as Locale
}
