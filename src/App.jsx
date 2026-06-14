import { useState } from 'react'
import { isPinStored, getStoredGuest } from './utils/pin'
import PinGate from './components/PinGate'
import HeroSection from './components/HeroSection'
import TextSection from './components/TextSection'
import LogosSection from './components/LogosSection'
import ParallaxSection from './components/ParallaxSection'
import RSVPSection from './components/RSVPSection'

export default function App() {
  const [guest, setGuest] = useState(isPinStored() ? getStoredGuest() : null)

  if (!guest) return <PinGate onSuccess={() => setGuest(getStoredGuest())} />

  return (
    <div className="min-h-screen bg-sand-pale w-full fade-in">
      <HeroSection />
      <TextSection guest={guest} />
      <LogosSection guest={guest} />
      <ParallaxSection />
      <RSVPSection />
    </div>
  )
}
