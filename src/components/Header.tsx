import { Langs } from '@/types/Lang'
import Link from 'next/link'
import { dictionary } from '/content'

export default function Header({ lang }: { lang: Langs }) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Link href="/" className="text-xl font-bold hover:underline">
        <h1>{dictionary[lang].myNextJsApp}</h1>
      </Link>
    </header>
  )
}
