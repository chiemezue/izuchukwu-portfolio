// Small pointer effects shared by components. All of them do nothing on
// touch screens or when the visitor prefers reduced motion.

const fx = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Spotlight: stores the pointer position so a glow can follow it (.spotlight in index.css)
export function trackSpotlight(e) {
  if (e.pointerType === 'touch') return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

// Tilt: spotlight + a gentle 3D rotation toward the pointer
export function trackTilt(e, max = 7) {
  trackSpotlight(e)
  if (!fx()) return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`)
  el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`)
}
export function resetTilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

// Magnetic: the element drifts toward the pointer while hovered
export function magnetMove(e, strength = 0.3) {
  if (!fx()) return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - (r.left + r.width / 2)) * strength
  const y = (e.clientY - (r.top + r.height / 2)) * strength * 1.2
  el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`
}
export function magnetLeave(e) {
  e.currentTarget.style.translate = ''
}

// Parallax: exposes the pointer position (-1..1) as --px / --py on the element
export function trackParallax(e) {
  if (!fx()) return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
  el.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
}

export const pointerFxEnabled = fx
