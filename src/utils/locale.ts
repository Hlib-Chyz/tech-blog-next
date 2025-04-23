import { cookies } from 'next/headers'
import { Langs } from '@/types/Lang'
import { localeCookieName } from '@/constants'

export async function getLocale(): Promise<Langs> {
  const locale = (await cookies()).get(localeCookieName)?.value || 'en'
  return locale as Langs
}
