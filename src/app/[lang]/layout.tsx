import { Providers } from '@/lib/Providers'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Langs } from '@/types/Lang'

export const metadata: Metadata = {
  title: {
    default: 'Tech Blog',
    template: '%s | Tech Blog',
  },
  description: 'A platform to share and learn about tech articles.',
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
