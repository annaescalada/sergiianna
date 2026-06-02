export async function hashPin(pin) {
  const encoder = new TextEncoder()
  const data = encoder.encode(pin)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

const STORAGE_KEY = 'wedding_pin_ok'

export function isPinStored() {
  return sessionStorage.getItem(STORAGE_KEY) === 'true'
}

export function storePinSuccess() {
  sessionStorage.setItem(STORAGE_KEY, 'true')
}
