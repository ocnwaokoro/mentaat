export const metadata = {
  title: 'Mentaat',
  description: 'Mentaat Logo',
  icons: {
    icon: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, height: '100%', overflow: 'hidden' }}>
      <body style={{ margin: 0, padding: 0, height: '100%', overflow: 'hidden' }}>{children}</body>
    </html>
  )
}

