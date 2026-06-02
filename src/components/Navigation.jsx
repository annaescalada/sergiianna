import { useState, useEffect } from 'react'
import { BRIDE, GROOM } from '../config'

const links = [
  { href: '#historia', label: 'La nostra història' },
  { href: '#cerimonia', label: 'La cerimònia' },
  { href: '#regals', label: 'Regals' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className={`font-serif text-lg font-light transition-colors duration-300 ${
            scrolled ? 'text-ocean-deep' : 'text-cream'
          }`}
        >
          {BRIDE} <span className="opacity-50">&</span> {GROOM}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-sans font-light text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled
                    ? 'text-stone-dark hover:text-ocean'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-1 transition-colors ${
            scrolled ? 'text-ocean-deep' : 'text-cream'
          }`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú"
        >
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/97 backdrop-blur-sm border-t border-sand-dark/30 px-6 py-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans font-light text-xs tracking-widest uppercase
                         text-stone-dark hover:text-ocean border-b border-sand-dark/20 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
