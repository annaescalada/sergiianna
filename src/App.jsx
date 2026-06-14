import { useState } from 'react'
import { isPinStored } from './utils/pin'
import PinGate from './components/PinGate'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import CeremonySection from './components/CeremonySection'
import GiftsSection from './components/GiftsSection'
import Footer from './components/Footer'
import { WaveDivider, CoastalDivider } from './components/Botanical'

export default function App() {
  const [unlocked, setUnlocked] = useState(isPinStored())

  if (!unlocked) return <PinGate onSuccess={() => setUnlocked(true)} />

  return (
    <div className="min-h-screen bg-sand-pale max-w-lg mx-auto shadow-sm">
      <Navigation />
      <main>
        <HeroSection />
        <WaveDivider className="w-full -mt-1" />
        <CeremonySection />
        <CoastalDivider className="w-full -mt-1" />
        <GiftsSection />
        <WaveDivider className="w-full -mt-1" />
      </main>
      <Footer />
    </div>
  )
}
