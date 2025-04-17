import Card from '@/components/Card'
import LanguageSelector from '@/components/LanguageSelector'
import { dictionary } from '/content'
import { Langs } from '@/types/Lang'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Langs }>
}) {
  const { lang } = await params
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {dictionary[lang].greeting}
        </h1>
        <p className="text-gray-600 mb-6">{dictionary[lang].welcomeMessage}</p>
        <div className="mb-4">
          <LanguageSelector />
        </div>
        <div className="mb-4">
          <Card
            title={dictionary[lang].aboutUsTitle}
            description={dictionary[lang].aboutUsDescription}
            href="/about"
          />
        </div>
        <div className="mb-4">
          <Card
            title={dictionary[lang].postsTitle}
            description={dictionary[lang].postsDescription}
            href="/posts"
          />
        </div>
      </div>
    </div>
  )
}
