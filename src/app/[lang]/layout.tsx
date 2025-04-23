import { Providers } from '@/lib/Providers'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Langs } from '@/types/Lang'
import { dictionary } from '/content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Langs }>
}): Promise<Metadata> {
  const { lang } = await params

  return {
    title: dictionary[lang].homeTitle,
    description: dictionary[lang].homeDescription,
    openGraph: {
      title: dictionary[lang].homeTitle,
      description: dictionary[lang].homeDescription,
      url: `http://localhost:3000/${lang}`,
      locale: lang === Langs.en ? 'en_US' : 'es_ES',
    },
    alternates: {
      canonical: `http://localhost:3000/${lang}`,
      languages: {
        [Langs.en]: `http://localhost:3000/${Langs.en}`,
        [Langs.es]: `http://localhost:3000/${Langs.es}`,
        'x-default': `http://localhost:3000/${Langs.en}`,
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Langs }>
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>
        <Providers>
          <Header lang={lang} />
          <main className="flex-grow">{children}</main>
          <Footer lang={lang} />
        </Providers>
      </body>
    </html>
  )
}
