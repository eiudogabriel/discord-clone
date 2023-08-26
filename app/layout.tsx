import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ThemeProvider } from '@/components/providers/theme-provider'

const font = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'Have fun with your friends!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} storageKey='discord-theme'>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
