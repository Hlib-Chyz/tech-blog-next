import { Providers } from '@/lib/Providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import '@/app/globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A sample Next.js application',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <NextIntlClientProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
