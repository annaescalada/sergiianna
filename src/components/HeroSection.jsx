import { BRIDE, GROOM, WEDDING_DATE_DISPLAY, WEDDING_DATE_ISO } from '../config'

function Countdown() {
  const weddingDate = new Date(WEDDING_DATE_ISO)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.max(0, Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24)))

  if (diff === 0) return <p className="text-cream/80 font-sans font-light tracking-widest text-sm uppercase">Avui és el gran dia! 🎉</p>
  if (diff < 0) return null

  return (
    <p className="text-cream/70 font-sans font-light tracking-widest text-xs uppercase">
      {diff === 1 ? 'Demà és el gran dia!' : `Queden ${diff} dies`}
    </p>
  )
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(175deg, #1E4E5F 0%, #2E7D96 40%, #5C7048 80%, #C1714B 100%)',
      }}
    >
      {/* Foto de fons — substituïu el gradient per una imatge real:
          style={{ backgroundImage: 'url(/sergiianna/foto-portada.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          + afegiu un overlay: <div className="absolute inset-0 bg-ocean-deep/50" /> */}

      {/* Formes decoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="150" r="120" fill="white" />
            <circle cx="1000" cy="600" r="180" fill="white" />
            <circle cx="600" cy="50" r="80" fill="white" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="font-sans font-light tracking-widest text-sand/70 text-xs uppercase mb-8 fade-up">
          Us convidem a la nostra boda
        </p>

        <h1 className="font-serif text-7xl md:text-8xl font-light text-cream mb-4 fade-up fade-up-delay-1 leading-none">
          {BRIDE}
        </h1>
        <div className="ornament text-4xl mb-4 fade-up fade-up-delay-1 text-sand/50">❧</div>
        <h1 className="font-serif text-7xl md:text-8xl font-light text-cream mb-10 fade-up fade-up-delay-2 leading-none">
          {GROOM}
        </h1>

        <div className="w-16 h-px bg-sand/40 mx-auto mb-8" />

        <p className="font-serif text-xl font-light italic text-cream/90 mb-3 fade-up fade-up-delay-3">
          {WEDDING_DATE_DISPLAY}
        </p>

        <div className="fade-up fade-up-delay-4">
          <Countdown />
        </div>

        <a
          href="#historia"
          className="inline-block mt-14 fade-up fade-up-delay-4"
          aria-label="Veure més"
        >
          <div className="flex flex-col items-center gap-2 text-cream/50 hover:text-cream/80 transition-colors">
            <span className="font-sans text-xs tracking-widest uppercase">Descobreix</span>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="animate-bounce">
              <path d="M10 0v24M2 18l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Wave inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#FDFAF5"/>
        </svg>
      </div>
    </section>
  )
}
