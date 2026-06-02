import { BRIDE, GROOM, WEDDING_DAY_NAME, WEDDING_DAY_NUM, WEDDING_MONTH, WEDDING_YEAR, CLOSING_TEXT, PHOTO_FOOTER } from '../config'
import { BranchTopRight } from './Botanical'

export default function Footer() {
  return (
    <footer className="bg-ivory relative overflow-hidden pt-12 pb-8">
      <BranchTopRight className="absolute top-0 right-0 w-40 pointer-events-none opacity-60" />

      {/* Footer photo */}
      {PHOTO_FOOTER ? (
        <img src={PHOTO_FOOTER} alt="" className="w-full max-w-sm mx-auto block mb-8 aspect-video object-cover" />
      ) : (
        <div className="w-full max-w-sm mx-auto mb-8 aspect-video bg-gradient-to-b from-sage-pale to-ivory-dark flex items-center justify-center">
          <p className="font-serif italic text-stone-light text-sm">Foto final aquí</p>
        </div>
      )}

      {/* Closing */}
      <div className="text-center px-6 max-w-sm mx-auto">
        <p className="font-serif italic text-stone text-sm mb-6 leading-relaxed">{CLOSING_TEXT}</p>

        <h2 className="font-script text-6xl text-forest leading-tight">{BRIDE}</h2>
        <p className="font-script text-4xl text-sage my-1">&amp;</p>
        <h2 className="font-script text-6xl text-forest leading-tight mb-6">{GROOM}</h2>

        <p className="section-label text-sage-light">
          {WEDDING_DAY_NAME} {WEDDING_DAY_NUM} {WEDDING_MONTH} {WEDDING_YEAR}
        </p>
      </div>
    </footer>
  )
}
