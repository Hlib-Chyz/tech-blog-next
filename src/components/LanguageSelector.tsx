'use client'

import axios from 'axios'

export default function LanguageSelector() {
  const handleLocaleChange = async (locale: string) => {
    await axios.post('api/set-locale', {
      body: JSON.stringify({ locale }),
    })
    window.location.reload()
  }

  return (
    <div className="flex justify-center items-center mt-4 gap-[12px]">
      <button
        onClick={() => handleLocaleChange('en')}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
      >
        English
      </button>
      <button
        onClick={() => handleLocaleChange('es')}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
      >
        Española
      </button>
    </div>
  )
}
