import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: 'white',
      margin: 0,
      padding: 0
    }}>
      <Image
        src="/mentaat-logo.jpg"
        alt="Mentaat Logo"
        width={500}
        height={500}
        style={{ objectFit: 'contain' }}
      />
    </main>
  )
}

