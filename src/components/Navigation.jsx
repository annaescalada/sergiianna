import { useState, useEffect } from 'react'
import { BRIDE, GROOM } from '../config'

const links = [
  { href: '#hero',      label: 'Inici' },
  { href: '#cerimonia', label: 'Cerimònia' },
  { href: '#regals',    label: 'Regals' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-script text-2xl text-forest">
          {BRIDE} <span className="font-serif text-sage-light text-lg">&</span> {GROOM}
        </a>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="section-label hover:text-forest transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(o => !o)} aria-label="Menú">
          <span className={`block w-5 h-px bg-forest transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-5 h-px bg-forest transition-all ${open ? 'opacity-0' : ''}`}/>
          <span className={`block w-5 h-px bg-forest transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-ivory/97 border-t border-sage-light/30 px-6 py-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 section-label border-b border-sage-light/20 last:border-0">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
