import { useState, useRef } from 'react'
import { hashPin, storePinSuccess } from '../utils/pin'
import { PIN_HASH, BRIDE, GROOM } from '../config'

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
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: 'linear-gradient(160deg, #1E4E5F 0%, #2E7D96 45%, #5C7048 100%)',
      }}
    >
      {/* Decoració fons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-terracotta/10" />
      </div>

      <div className="relative z-10 text-center max-w-sm w-full">
        {/* Ornament */}
        <div className="text-sand/40 text-5xl font-serif mb-6 leading-none">❧</div>

        <h1 className="font-serif text-5xl font-light text-cream mb-2 fade-up">
          {BRIDE} <span className="text-sand/60 font-thin">&</span> {GROOM}
        </h1>
        <p className="font-sans font-light tracking-widest text-sand/70 text-xs uppercase mb-12 fade-up fade-up-delay-1">
          La nostra boda
        </p>

        <form onSubmit={handleSubmit} className="fade-up fade-up-delay-2">
          <p className="text-sand/80 font-sans font-light text-sm mb-6">
            Introdueix el PIN per accedir
          </p>

          <input
            ref={inputRef}
            type="password"
            value={pin}
            onChange={e => { setPin(e.target.value); setError(false) }}
            maxLength={20}
            placeholder="• • • • •"
            autoFocus
            className={`
              w-full bg-white/10 border text-cream text-center text-2xl tracking-widest
              font-serif placeholder-white/30 px-6 py-4 outline-none
              transition-all duration-200 rounded-sm
              focus:bg-white/15 focus:border-sand/60
              ${error
                ? 'border-terracotta-light animate-[shake_0.4s_ease]'
                : 'border-white/20'
              }
            `}
          />

          {error && (
            <p className="text-terracotta-light text-sm font-sans mt-3 fade-up">
              PIN incorrecte. Torna-ho a intentar.
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !pin.trim()}
            className="mt-6 w-full btn-primary bg-sand/90 text-ocean-deep hover:bg-sand
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Verificant…' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
