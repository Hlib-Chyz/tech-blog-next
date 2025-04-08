import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">{t('footerText')}</p>
    </footer>
  )
}
