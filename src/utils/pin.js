import { GUESTS } from '../config'

const STORAGE_KEY = 'wedding_guest'

export async function findGuest(pin) {
  for (const guest of GUESTS) {
    if (pin === guest.pin) return guest
  }
  return null
}

export function isPinStored() {
  return !!sessionStorage.getItem(STORAGE_KEY)
}

export function storeGuest(guest) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(guest))
}

export function getStoredGuest() {
  const raw = sessionStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : null
}
