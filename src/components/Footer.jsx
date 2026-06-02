import { BRIDE, GROOM, WEDDING_DATE_DISPLAY } from '../config'

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(175deg, #1E4E5F 0%, #2E7D96 60%, #5C7048 100%)',
      }}
    >
      <div className="relative z-10">
        <div className="ornament text-5xl mb-6 text-sand/30">❧</div>

        <h2 className="font-serif text-4xl font-light text-cream mb-2">
          {BRIDE} <span className="text-sand/50">&</span> {GROOM}
        </h2>
        <p className="font-serif italic text-cream/60 text-lg mb-8">
          {WEDDING_DATE_DISPLAY}
        </p>

        <div className="w-16 h-px bg-sand/30 mx-auto mb-8" />

        <p className="font-sans font-light text-cream/40 text-xs tracking-widest">
          Fet amb molt d'amor · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
