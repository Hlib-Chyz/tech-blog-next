import { Langs } from '@/types/Lang'
import { dictionary } from '/content'

export default function Footer({ lang }: { lang: Langs }) {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">{dictionary[lang].footerText}</p>
    </footer>
  )
}
