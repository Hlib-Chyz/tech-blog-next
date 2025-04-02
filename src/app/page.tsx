import LanguageSelector from '@/components/LanguageSelector'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
      <h1>{t('greeting')}</h1>
      <LanguageSelector />
    </main>
  )
}
