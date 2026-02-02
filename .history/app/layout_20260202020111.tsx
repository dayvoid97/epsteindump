import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The Epstein Files',
  description: 'Readable analysis of publicly released Epstein-related documents.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQLDPN3H1B"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQLDPN3H1B');
          `}
        </Script>
        {/* End Google Analytics */}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
