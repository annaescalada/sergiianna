import { useState } from 'react'
import { BANK, GIFT_CHIPS, BRIDE, GROOM } from '../config'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-ocean font-sans font-light text-xs
                 tracking-widest uppercase hover:text-ocean-deep transition-colors"
      title="Copiar"
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Copiat!
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copiar
        </>
      )}
    </button>
  )
}

function GiftChip({ emoji, label, description }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative flex flex-col items-center text-center p-5 rounded-sm border cursor-default
                  transition-all duration-300 ${
                    hovered
                      ? 'bg-ocean-deep text-cream border-ocean-deep shadow-md -translate-y-1'
                      : 'bg-white/60 text-stone-dark border-sand-dark/40'
                  }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-3xl mb-3">{emoji}</span>
      <span className={`font-serif text-base font-light ${hovered ? 'text-cream' : 'text-ocean-deep'}`}>
        {label}
      </span>
      <span className={`font-sans font-light text-xs mt-2 leading-relaxed transition-all duration-300 ${
        hovered ? 'text-cream/70 max-h-20 opacity-100' : 'text-stone max-h-20 opacity-100'
      }`}>
        {description}
      </span>
    </div>
  )
}

export default function GiftsSection() {
  return (
    <section id="regals" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Capçalera */}
        <div className="text-center mb-16">
          <p className="font-sans font-light tracking-widest text-terracotta text-xs uppercase mb-4">
            Si voleu fer un regal
          </p>
          <h2 className="font-serif text-5xl font-light text-ocean-deep mb-6">
            Llista de desitjos
          </h2>
          <div className="section-divider" />
          <p className="font-sans font-light text-stone max-w-xl mx-auto leading-relaxed text-sm">
            La vostra presència ja és el millor regal. Si voleu contribuir a
            algun dels nostres somnis, aquí teniu les nostres dades bancàries i
            alguns dels projectes que tenim entre mans aquest any.
          </p>
        </div>

        {/* Targeta bancària */}
        <div className="card mb-12 max-w-lg mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-sans font-light tracking-widest text-terracotta text-xs uppercase mb-1">
                Compte bancari
              </p>
              <p className="font-serif text-ocean-deep text-sm">{BANK.holder}</p>
            </div>
            <span className="text-2xl">🏦</span>
          </div>

          <div className="bg-sand rounded-sm px-4 py-3 flex items-center justify-between gap-4 mb-3">
            <span className="font-sans font-light text-stone-dark tracking-widest text-sm">
              {BANK.iban}
            </span>
            <CopyButton text={BANK.iban} />
          </div>

          <div className="bg-sand rounded-sm px-4 py-3 flex items-center justify-between gap-4">
            <div>
              <span className="font-sans font-light text-xs text-stone block mb-0.5 tracking-widest uppercase">
                Concepte
              </span>
              <span className="font-sans font-light text-stone-dark text-sm">
                {BANK.concept}
              </span>
            </div>
            <CopyButton text={BANK.concept} />
          </div>
        </div>

        {/* Chips de desitjos */}
        <div className="text-center mb-8">
          <p className="font-serif italic text-stone text-base font-light">
            Algunes de les coses que tenim al cap…
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {GIFT_CHIPS.map(chip => (
            <GiftChip key={chip.label} {...chip} />
          ))}
        </div>

        <p className="text-center font-sans font-light text-stone text-xs mt-10">
          Sigui quina sigui la vostra contribució, la rebrem amb molta estima i
          gratitud. Gràcies per formar part del nostre dia especial. 💛
        </p>
      </div>
    </section>
  )
}
