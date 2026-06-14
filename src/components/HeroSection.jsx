import {
  BRIDE, GROOM, BRIDE_INITIAL, GROOM_INITIAL,
  OPENING_QUOTE, OPENING_QUOTE_REF,
  WEDDING_DAY_NAME, WEDDING_DAY_NUM, WEDDING_MONTH, WEDDING_YEAR,
  WEDDING_DATE_ISO,
  INTRO_TEXT, GROOM_PARENTS, BRIDE_PARENTS, INVITATION_TEXT,
  PHOTO_COUPLE,
} from '../config'
import { BranchTopRight, BranchBottomLeft, SmallBranch } from './Botanical'

function Countdown() {
  const diff = Math.max(0, Math.ceil((new Date(WEDDING_DATE_ISO) - new Date().setHours(0,0,0,0)) / 86400000))
  if (diff === 0) return <p className="section-label text-ocean-mid">Avui és el gran dia!</p>
  return <p className="section-label text-ocean-mid">Queden {diff} dies</p>
}

export default function HeroSection() {
  return (
    <section id="hero" className="bg-sand-pale overflow-hidden">

      {/* ── Part 1: Quote + Monogram ── */}
      <div className="relative pt-24 pb-10 px-8 text-center max-w-sm mx-auto">
        <BranchTopRight className="absolute top-0 right-0 w-44 pointer-events-none" />

        {OPENING_QUOTE && (
          <div className="mb-8 fade-up">
            <p className="font-serif italic text-stone text-sm leading-relaxed">
              {OPENING_QUOTE}
            </p>
            {OPENING_QUOTE_REF && (
              <p className="section-label mt-2">{OPENING_QUOTE_REF}</p>
            )}
          </div>
        )}

        {/* Monogram */}
        <div className="flex items-center justify-center gap-3 mb-2 fade-up fade-up-1">
          <span className="font-serif text-6xl font-light text-pine">{BRIDE_INITIAL}</span>
          <span className="w-px h-12 bg-ocean-light"/>
          <span className="font-serif text-6xl font-light text-pine">{GROOM_INITIAL}</span>
        </div>
        <p className="section-label mb-10 fade-up fade-up-1">La nostra boda</p>
      </div>

      {/* ── Part 2: Couple photo ── */}
      <div className="w-full max-w-sm mx-auto px-4 mb-10">
        {PHOTO_COUPLE ? (
          <img
            src={PHOTO_COUPLE}
            alt={`${BRIDE} i ${GROOM}`}
            className="w-full aspect-[3/4] object-cover"
          />
        ) : (
          <div className="w-full aspect-[3/4] bg-gradient-to-b from-ocean-pale to-sand-light flex items-center justify-center">
            <p className="font-serif italic text-stone-light text-sm">Foto de la parella aquí</p>
          </div>
        )}
      </div>

      {/* ── Part 3: Parents + Names + Date ── */}
      <div className="relative px-8 text-center max-w-sm mx-auto pb-16">
        <BranchBottomLeft className="absolute bottom-0 left-0 w-40 pointer-events-none" />

        <p className="font-serif italic text-stone text-sm mb-5 fade-up leading-relaxed">
          {INTRO_TEXT}
        </p>
        <p className="section-label mb-1 fade-up fade-up-1">{GROOM_PARENTS}</p>
        <p className="font-serif text-ocean-mid text-sm mb-1 fade-up fade-up-1">i</p>
        <p className="section-label mb-6 fade-up fade-up-1">{BRIDE_PARENTS}</p>

        <p className="font-serif italic text-stone text-xs mb-8 fade-up fade-up-2">
          {INVITATION_TEXT}
        </p>

        {/* Script names */}
        <h1 className="font-script text-7xl text-pine leading-tight fade-up fade-up-2">{BRIDE}</h1>
        <p className="font-script text-5xl text-terra mb-1 fade-up fade-up-3">&amp;</p>
        <h1 className="font-script text-7xl text-pine leading-tight mb-10 fade-up fade-up-3">{GROOM}</h1>

        {/* Date */}
        <div className="flex items-center justify-center gap-4 mb-4 fade-up fade-up-4">
          <div className="flex-1 h-px bg-ocean-light"/>
          <div className="text-center">
            <p className="section-label">{WEDDING_MONTH} {WEDDING_YEAR}</p>
            <p className="font-serif text-5xl font-light text-ocean leading-none my-1">{WEDDING_DAY_NUM}</p>
            <p className="section-label">{WEDDING_DAY_NAME}</p>
          </div>
          <div className="flex-1 h-px bg-ocean-light"/>
        </div>

        <div className="fade-up fade-up-5 mt-2">
          <Countdown />
        </div>
      </div>
    </section>
  )
}
