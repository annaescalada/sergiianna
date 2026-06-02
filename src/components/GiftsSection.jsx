import { useState } from 'react'
import { BANK, GIFT_TEXT, GIFT_CHIPS, RSVP, ADULTS_ONLY, ADULTS_ONLY_TEXT } from '../config'
import { SmallBranch } from './Botanical'

function CopyBtn({ text, label }) {
  const [done, setDone] = useState(false)
  async function copy() {
    await navigator.clipboard.writeText(text)
    setDone(true)
    setTimeout(() => setDone(false), 2000)
  }
  return (
    <button onClick={copy} className="flex items-center gap-1 text-forest hover:text-sage transition-colors">
      {done ? (
        <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span className="font-sans text-xs tracking-widest uppercase">Copiat!</span></>
      ) : (
        <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <span className="font-sans text-xs tracking-widest uppercase">{label}</span></>
      )}
    </button>
  )
}

export default function GiftsSection() {
  const waUrl = `https://wa.me/${RSVP.whatsappPhone.replace(/\D/g,'')}?text=${encodeURIComponent(RSVP.whatsappText)}`

  return (
    <section id="regals" className="bg-ivory py-16 px-6">
      <div className="max-w-sm mx-auto text-center">

        {/* Gift suggestion */}
        <SmallBranch className="w-20 mx-auto mb-6 opacity-70" />
        <div className="divider-ornament mb-6">
          <span className="section-label">Suggeriment de regal</span>
        </div>

        <div className="relative rounded-sm p-6 mb-8" style={{background:'linear-gradient(135deg,#EAF0E6 0%,#F5F8F3 100%)'}}>
          <svg className="absolute top-2 right-3 w-6 h-6 text-sage-light opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 12v10H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
          <p className="font-serif italic text-stone text-sm leading-relaxed mb-5">{GIFT_TEXT}</p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {GIFT_CHIPS.map(c => (
              <span key={c.label} className="bg-white border border-sage-light/50 text-forest font-sans text-xs px-3 py-1.5 rounded-full">
                {c.emoji} {c.label}
              </span>
            ))}
          </div>

          {/* IBAN */}
          <div className="bg-white border border-sage-light/40 rounded-sm p-4 text-left">
            <p className="section-label mb-2">Compte bancari</p>
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className="font-sans text-sm text-forest tracking-wider">{BANK.iban}</p>
              <CopyBtn text={BANK.iban} label="Copiar" />
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-sage-light/30 pt-2">
              <div>
                <p className="font-sans text-xs text-stone-light">Concepte</p>
                <p className="font-sans text-xs text-forest">{BANK.concept}</p>
              </div>
              <CopyBtn text={BANK.concept} label="Copiar" />
            </div>
          </div>
        </div>

        {/* RSVP */}
        <div className="divider-ornament mb-6">
          <span className="section-label">Confirmació</span>
        </div>
        <p className="font-serif italic text-stone text-sm mb-2 leading-relaxed">
          Agrairíem que confirmeu la vostra assistència
        </p>
        <p className="section-label mb-6">Abans del {RSVP.deadline}</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-forest mb-10">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Enviar confirmació
        </a>

        {/* Adults only */}
        {ADULTS_ONLY && (
          <div className="border-t border-sage-light/30 pt-8 mt-2">
            <SmallBranch className="w-16 mx-auto mb-4 opacity-50" />
            <p className="font-serif italic text-stone text-sm leading-relaxed">
              {ADULTS_ONLY_TEXT}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
