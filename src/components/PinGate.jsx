import { useState, useRef } from 'react'
import { hashPin, storePinSuccess } from '../utils/pin'
import { PIN_HASH, BRIDE, GROOM } from '../config'
import { BranchTopRight, BranchBottomLeft } from './Botanical'

export default function PinGate({ onSuccess }) {
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!pin.trim()) return
    setLoading(true)
    setError(false)
    const hash = await hashPin(pin.trim())
    if (hash === PIN_HASH) {
      storePinSuccess()
      onSuccess()
    } else {
      setError(true)
      setPin('')
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Botanical decorations */}
      <BranchTopRight className="absolute top-0 right-0 w-48 md:w-64 pointer-events-none" />
      <BranchBottomLeft className="absolute bottom-0 left-0 w-40 md:w-56 pointer-events-none" />

      <div className="relative z-10 text-center max-w-xs w-full">
        {/* Monogram */}
        <p className="section-label mb-6 fade-up">Benvinguts</p>

        <h1 className="font-script text-8xl text-forest leading-none mb-1 fade-up fade-up-1">
          {BRIDE}
        </h1>
        <p className="font-serif text-2xl text-sage-light font-light mb-1 fade-up fade-up-1">&amp;</p>
        <h1 className="font-script text-8xl text-forest leading-none mb-8 fade-up fade-up-2">
          {GROOM}
        </h1>

        <div className="divider-ornament fade-up fade-up-2">
          <span className="section-label">PIN d'accés</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 fade-up fade-up-3">
          <input
            ref={inputRef}
            type="password"
            value={pin}
            onChange={e => { setPin(e.target.value); setError(false) }}
            maxLength={20}
            placeholder="· · · · ·"
            autoFocus
            className={`
              w-full border-b-2 bg-transparent text-center text-xl tracking-widest
              text-forest font-serif placeholder-sage-light outline-none py-3
              transition-colors duration-200
              ${error ? 'border-red-400 shake' : 'border-sage-light focus:border-forest'}
            `}
          />
          {error && (
            <p className="text-red-400 text-xs font-sans mt-2">PIN incorrecte. Torna-ho a intentar.</p>
          )}
          <button
            type="submit"
            disabled={loading || !pin.trim()}
            className="btn-forest mt-6 w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Verificant…' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
