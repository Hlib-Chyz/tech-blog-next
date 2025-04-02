import { Providers } from '@/lib/Providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

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
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
