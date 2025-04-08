'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function LanguageSelector() {
  const t = useTranslations()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSelectedLocale] = useState('en')

  const handleLocaleChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
    setSelectedLocale(locale)
    window.location.reload()
  }

  return (
    <div className="flex justify-center items-center mt-4 gap-[12px]">
      <button
        onClick={() => handleLocaleChange('en')}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
      >
        {t('languageEnglish')}
      </button>
      <button
        onClick={() => handleLocaleChange('es')}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
      >
        {t('languageSpanish')}
      </button>
    </div>
  )
}
