import { useState, useRef } from 'react'
import { hashPin, storePinSuccess } from '../utils/pin'
import { PIN_HASH, BRIDE, GROOM } from '../config'
import pingateBg from '/Pingate.png'

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
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative"
      style={{ backgroundImage: `url(${pingateBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Subtle dark gradient at bottom so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 text-center w-full max-w-xs">
        <h1 className="font-script text-6xl text-white leading-none mb-2">
          Benvingut/da
        </h1>
        <p className="font-serif italic text-white/80 text-lg mb-8 tracking-wide">
          Introdueix el PIN
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <input
            ref={inputRef}
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            value={pin}
            onChange={e => { setPin(e.target.value); setError(false) }}
            maxLength={4}
            placeholder="••••"
            autoFocus
            className={`pin-input w-full text-center text-xl tracking-widest text-white font-serif outline-none py-4 px-4 rounded-sm transition-colors duration-200 ${error ? 'shake' : ''}`}
            style={{ background: 'transparent', border: '2px solid #ffffff', caretColor: '#ffffff' }}
          />
          {error && (
            <p className="text-white text-xs font-sans mt-2 tracking-widest uppercase drop-shadow">
              PIN incorrecte
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !pin.trim()}
            className="mt-4 w-full py-4 font-sans font-bold tracking-widest uppercase text-sm rounded-sm active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: '#ffffff', border: '2px solid #ffffff', color: '#3A5220' }}
          >
            {loading ? 'Verificant…' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
