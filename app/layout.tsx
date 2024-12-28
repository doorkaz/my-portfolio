import { JSX } from 'react'
import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Retamales Pablo',
  description: 'Portafolio web de Pablo Retamales'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className='bg-neutral-900 w-screen h-full text-white'>
        {children}
      </body>
    </html>
  )
}
