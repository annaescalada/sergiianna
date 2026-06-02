// ─── Configuració de la boda ──────────────────────────────────────────────────
// Modifica aquests valors amb les vostres dades reals.

// PIN: SHA-256 del PIN que donareu als convidats.
// Per generar un nou hash: npm run generate-pin
// El PIN per defecte és "1234" → canvieu-lo abans de publicar!
export const PIN_HASH =
  '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'

export const BRIDE = 'Ana'
export const GROOM = 'Sergi'

export const WEDDING_DATE_DISPLAY = 'Dissabte, 27 de setembre de 2025'
export const WEDDING_DATE_ISO = '2025-09-27'

// Dades de la cerimònia
export const CEREMONY = {
  time: '12:00 h',
  name: 'Església de [NOM DE L\'ESGLÉSIA]',
  address: '[Adreça de l\'església], [Població]',
  mapsUrl: 'https://maps.google.com',
}

// Dades del banquet
export const RECEPTION = {
  time: '14:00 h',
  name: '[Nom del lloc del banquet]',
  address: '[Adreça del banquet], [Població]',
  mapsUrl: 'https://maps.google.com',
  dresscode: 'Elegant i còmode',
  dresscodeNote: 'Eviteu el color blanc i el negre',
}

// Confirmació d'assistència
export const RSVP = {
  deadline: '1 de juliol de 2025',
  phone: '+34 6XX XXX XXX',
  email: 'anaiisergi@email.com',
}

// Compte bancari per als regals
export const BANK = {
  iban: 'ES00 0000 0000 0000 0000 0000',
  holder: 'Ana García / Sergi Martínez',
  concept: 'Regal boda Ana i Sergi',
}

// Chips de la llista de desitjos
export const GIFT_CHIPS = [
  { emoji: '✈️', label: 'Lluna de mel', description: 'El nostre primer viatge com a casats' },
  { emoji: '🏠', label: 'Pis nou', description: 'El nostre primer racó junts' },
  { emoji: '🍳', label: 'Cuina nova', description: 'Estris per cuinar plegats' },
  { emoji: '📚', label: 'Biblioteca', description: 'Llibres per a la llar' },
  { emoji: '🌿', label: 'Jardí', description: 'Plantes i flors per a casa' },
  { emoji: '🎭', label: 'Cultura', description: 'Concerts, teatre i experiències' },
  { emoji: '🍷', label: 'Celler', description: 'Vins per celebrar moments especials' },
  { emoji: '🚴', label: 'Aventures', description: 'Activitats i esports junts' },
]
