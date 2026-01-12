export const metadata = {
  title: 'Mentaat',
  description: 'Mentaat Logo',
  icons: {
    icon: '/mentaat-logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

