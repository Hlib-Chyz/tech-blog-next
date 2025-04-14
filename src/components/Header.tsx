import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Header() {
  const t = useTranslations()

  return (
    <header className="bg-gray-800 text-white p-4">
      <Link href="/" className="text-xl font-bold hover:underline">
        <h1>{t('myNextJsApp')}</h1>
      </Link>
    </header>
  )
}
