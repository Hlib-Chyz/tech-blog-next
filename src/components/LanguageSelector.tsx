'use client'

import { useState } from 'react'

export default function LanguageSelector() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSelectedLocale] = useState('en')
  const handleLocaleChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
    setSelectedLocale(locale)
    window.location.reload()
  }

  return (
    <div>
      <button onClick={() => handleLocaleChange('en')}>English</button>
      <button onClick={() => handleLocaleChange('es')}>Española</button>
    </div>
  )
}
