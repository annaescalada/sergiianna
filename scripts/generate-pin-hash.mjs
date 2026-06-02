/**
 * Genera el hash SHA-256 d'un PIN per usar a src/config.js
 * Ús: node scripts/generate-pin-hash.mjs EL_TEU_PIN
 */
import { createHash } from 'crypto'

const pin = process.argv[2]
if (!pin) {
  console.error('Ús: node scripts/generate-pin-hash.mjs EL_TEU_PIN')
  process.exit(1)
}

const hash = createHash('sha256').update(pin).digest('hex')
console.log(`\nPIN: "${pin}"`)
console.log(`Hash SHA-256: ${hash}`)
console.log(`\nCopia aquest valor a src/config.js → PIN_HASH:\n`)
console.log(`export const PIN_HASH = '${hash}'`)
