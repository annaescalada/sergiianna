// ═══════════════════════════════════════════════════════════════════════
//  CONFIGURACIÓ DE LA BODA — ompliu tots els camps amb les vostres dades
// ═══════════════════════════════════════════════════════════════════════

// ── PIN D'ACCÉS ─────────────────────────────────────────────────────────
// Per canviar el PIN: node scripts/generate-pin-hash.mjs EL_VOSTRE_PIN
// PIN per defecte: 1234
export const PIN_HASH =
  '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'

// ── NOMS ────────────────────────────────────────────────────────────────
export const BRIDE        = 'Ana'          // Nom de la núvia (script gran)
export const GROOM        = 'Sergi'        // Nom del nuvi (script gran)
export const BRIDE_INITIAL = 'A'           // Inicial per al monograma
export const GROOM_INITIAL = 'S'           // Inicial per al monograma

// ── DATA ─────────────────────────────────────────────────────────────────
export const WEDDING_DAY_NAME  = 'Dissabte'       // Nom del dia de la setmana
export const WEDDING_DAY_NUM   = '27'             // Número del dia
export const WEDDING_MONTH     = 'de setembre'    // Mes amb preposició
export const WEDDING_YEAR      = '2025'           // Any
export const WEDDING_DATE_ISO  = '2025-09-27'     // Format ISO per al compte enrere

// ── CITA / VERSICLE D'OBERTURA ───────────────────────────────────────────
export const OPENING_QUOTE     = 'Per sobre de tot, vestiu-vos d\'amor, que és el vincle perfecte.'
export const OPENING_QUOTE_REF = 'Col 3:14'       // Referència (o '' per no mostrar-la)

// ── PARES ────────────────────────────────────────────────────────────────
export const INTRO_TEXT        = 'Amb el nostre amor, la benedicció de Déu i dels nostres pares'
export const GROOM_PARENTS     = 'Nom dels pares del nuvi'   // p.ex. "Joan i Maria Martínez"
export const BRIDE_PARENTS     = 'Nom dels pares de la núvia' // p.ex. "Pau i Laia García"
export const INVITATION_TEXT   = 'Tenim l\'honor de convidar-vos a la nostra boda'

// ── CERIMÒNIA ────────────────────────────────────────────────────────────
export const CEREMONY = {
  time:    '12:00 h',
  name:    'Parròquia de [Nom de l\'església]',
  address: '[Adreça completa], [Població]',
  mapsUrl: 'https://maps.google.com/?q=',  // URL de Google Maps
}

// ── RECEPCIÓ / BANQUET ───────────────────────────────────────────────────
export const RECEPTION = {
  time:    '14:00 h',
  name:    '[Nom del lloc del banquet]',
  address: '[Adreça completa], [Població]',
  mapsUrl: 'https://maps.google.com/?q=',  // URL de Google Maps
}

// ── ITINERARI DEL DIA ────────────────────────────────────────────────────
// Podeu afegir o treure línies. icon: emoji, time: hora, label: descripció
export const ITINERARY = [
  { icon: '⛪', time: '12:00', label: 'Cerimònia' },
  { icon: '🥂', time: '14:00', label: 'Còctel de benvinguda' },
  { icon: '💑', time: '15:00', label: 'Entrada dels nuvis' },
  { icon: '🍽️', time: '15:30', label: 'Àpat' },
  { icon: '🎉', time: '18:00', label: 'Festa i ball' },
  { icon: '🌙', time: '01:00', label: 'Comiat' },
]

// ── CONFIRMACIÓ D'ASSISTÈNCIA ────────────────────────────────────────────
export const RSVP = {
  deadline:     '1 de juliol de 2025',   // Data límit per confirmar
  whatsappPhone: '+34600000000',          // Número per al botó de WhatsApp (sense espais)
  whatsappText:  'Hola! Confirmo la meva assistència a la boda.',
}

// ── REGALS ───────────────────────────────────────────────────────────────
export const BANK = {
  iban:    'ES00 0000 0000 0000 0000 0000',
  holder:  'Ana García / Sergi Martínez',
  concept: 'Regal boda Ana i Sergi',
}

// Text de suggeriment de regal (apareix sobre el compte bancari)
export const GIFT_TEXT = 'Si desitgeu fer-nos un regal, podeu contribuir al nostre somni de construir una nova llar junts. Qualsevol aportació és rebuda amb molt d\'amor!'

// Chips de la llista de desitjos (emoji + text)
export const GIFT_CHIPS = [
  { emoji: '✈️', label: 'Lluna de mel' },
  { emoji: '🏠', label: 'Pis nou' },
  { emoji: '🍳', label: 'Cuina nova' },
  { emoji: '🌿', label: 'Jardí' },
  { emoji: '🎭', label: 'Cultura' },
  { emoji: '🍷', label: 'Celler' },
]

// ── ADULTS ONLY ──────────────────────────────────────────────────────────
export const ADULTS_ONLY = true  // false per ocultar aquesta secció
export const ADULTS_ONLY_TEXT = 'Estimem els vostres fills, però creiem que necessiten una nit lliure. Sols adults, si us plau.'

// ── MISSATGE DE TANCAMENT ────────────────────────────────────────────────
export const CLOSING_TEXT = 'Esperem comptar amb la vostra presència. Moltes gràcies!'

// ── FOTOS ────────────────────────────────────────────────────────────────
// Poseu les fotos a la carpeta /public/ i actualitzeu els paths.
// Si no teniu foto, deixeu el valor '' i es mostrarà un gradient de color.
export const PHOTO_HERO   = ''   // Foto principal (hero). Ex: '/sergiianna/foto-hero.jpg'
export const PHOTO_COUPLE = ''   // Foto de la parella (secció central)
export const PHOTO_FOOTER = ''   // Foto final (footer). Ex: '/sergiianna/foto-final.jpg'
