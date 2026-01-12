import Image from 'next/image'

// SCALE FACTORS: Adjust these values to scale both logo and text proportionally
// MOBILE_SCALE: Scale factor for mobile devices (screens < 768px)
// DESKTOP_SCALE: Scale factor for desktop devices (screens >= 768px)
// Higher values = larger, Lower values = smaller
const MOBILE_SCALE = 2.0
const DESKTOP_SCALE = 5.0

export default function Home() {
  // Base sizes that will be scaled
  const baseSigilSize = 64 // Base sigil size in pixels
  const baseFontSize = 36 // Base font size in pixels
  const baseGap = 0 // Base gap between sigil and text in pixels
  
  // Calculate scaled sizes for both mobile and desktop
  const mobileSigilSize = baseSigilSize * MOBILE_SCALE
  const mobileFontSize = baseFontSize * MOBILE_SCALE
  const mobileGap = baseGap * MOBILE_SCALE
  
  const desktopSigilSize = baseSigilSize * DESKTOP_SCALE
  const desktopFontSize = baseFontSize * DESKTOP_SCALE
  const desktopGap = baseGap * DESKTOP_SCALE
  
  const styles = `
    :root {
      --bg0: #070a10;
      --bg1: #0b1220;
      --bg2: #101b30;
      --glow: #2b3f66;
    }

    .logo-container {
      height: clamp(${mobileSigilSize * 0.6}px, ${mobileSigilSize * 0.15}vw, ${mobileSigilSize}px);
      width: clamp(${mobileSigilSize * 0.6}px, ${mobileSigilSize * 0.15}vw, ${mobileSigilSize}px);
    }

    .logo-container img {
      filter: brightness(0) invert(1);
    }
    
    .logo-text {
      font-size: clamp(${mobileFontSize * 0.56}px, ${mobileFontSize * 0.125}vw, ${mobileFontSize}px);
    }
    
    .main-container {
      gap: ${mobileGap}px;
      background:
        radial-gradient(900px 520px at 50% 38%,
          rgba(43,63,102,0.55) 0%,
          rgba(16,27,48,0.28) 40%,
          rgba(11,18,32,0.10) 65%,
          rgba(7,10,16,0.00) 78%),
        linear-gradient(135deg,
          rgba(255,255,255,0.06) 0%,
          rgba(255,255,255,0.00) 40%,
          rgba(0,0,0,0.12) 100%),
        radial-gradient(1200px 800px at 50% 55%,
          var(--bg2) 0%,
          var(--bg1) 55%,
          var(--bg0) 100%);
      position: relative;
    }

    .main-container::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(1200px 900px at 50% 50%,
          rgba(0,0,0,0.00) 45%,
          rgba(0,0,0,0.40) 100%),
        repeating-linear-gradient(0deg,
          rgba(255,255,255,0.018) 0px,
          rgba(255,255,255,0.018) 1px,
          rgba(0,0,0,0.00) 2px,
          rgba(0,0,0,0.00) 4px);
      opacity: 0.55;
      mix-blend-mode: overlay;
    }
    
    @media (min-width: 768px) {
      .logo-container {
        height: clamp(${desktopSigilSize * 0.6}px, ${desktopSigilSize * 0.15}vw, ${desktopSigilSize}px);
        width: clamp(${desktopSigilSize * 0.6}px, ${desktopSigilSize * 0.15}vw, ${desktopSigilSize}px);
      }
      
      .logo-text {
        font-size: clamp(${desktopFontSize * 0.56}px, ${desktopFontSize * 0.125}vw, ${desktopFontSize}px);
      }
      
      .main-container {
        gap: ${desktopGap}px;
      }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="main-container" style={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: '16px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0
      }}>
        <div className="logo-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          position: 'relative',
          zIndex: 1
        }}>
          <Image
            src="/mentaat-logo.svg"
            alt="Mentaat Logo"
            width={desktopSigilSize}
            height={desktopSigilSize}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
            priority
          />
        </div>
        <h1 className="logo-text" style={{
          fontFamily: '"Univers 55 Roman", "Univers55-Roman", Univers, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: 700,
          letterSpacing: '0.02em',
          margin: 0,
          padding: 0,
          color: '#ffffff',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          position: 'relative',
          zIndex: 1
        }}>
          MENTAAT
        </h1>
      </main>
    </>
  )
}

