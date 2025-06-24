import { ReactNode } from 'react'
import type { Metadata } from 'next'
import '@app/globals.css'

export const metadata: Metadata = {
    title: 'Plutus 2025',
    description: 'From Ruins to Riches, the Economics and Commerce fest by Greenwood High',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            {/* Apply a super obvious Tailwind class */}
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
