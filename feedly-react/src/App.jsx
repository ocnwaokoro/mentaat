import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Homepage = lazy(() => import('./pages/homepage'))
const ThreatIntel = lazy(() => import('./pages/threat-intel'))
const MarketIntel = lazy(() => import('./pages/market-intel'))
const NewsReader = lazy(() => import('./pages/news-reader'))
const AppPro = lazy(() => import('./pages/app-pro'))
const SignIn = lazy(() => import('./pages/sign-in'))

function PageFallback() {
  return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden>Loading…</div>
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/threat-intel" element={<ThreatIntel />} />
        <Route path="/market-intel" element={<MarketIntel />} />
        <Route path="/news-reader" element={<NewsReader />} />
        <Route path="/app-pro" element={<AppPro />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Suspense>
  )
}
