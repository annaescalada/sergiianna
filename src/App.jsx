import { useState } from 'react'
import { isPinStored } from './utils/pin'
import PinGate from './components/PinGate'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import CeremonySection from './components/CeremonySection'
import GiftsSection from './components/GiftsSection'
import Footer from './components/Footer'

export default function App() {
  const [unlocked, setUnlocked] = useState(isPinStored())

  if (!unlocked) {
    return <PinGate onSuccess={() => setUnlocked(true)} />
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <CeremonySection />
        <GiftsSection />
      </main>
      <Footer />
    </div>
  )
}
