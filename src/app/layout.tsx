import { ReactNode } from 'react'
import './styles/global.css'
import { Nunito } from 'next/font/google'
import { Metadata } from 'next'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})
export const metadata: Metadata = {
  title: 'VerbalizaCX',
  icons: {
    icon: '/logoMinimalist.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        {children}
        <script src="/main.js" async />
      </body>
    </html>
  )
}
