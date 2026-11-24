import './Chip.css'

// Small label for stack items and categories.
// tone: 'default' | 'lime' | 'sky' | 'amber' | 'coral'
export default function Chip({ tone = 'default', dot = false, children }) {
  const toned = tone !== 'default'
  return (
    <span className={`chip ${toned ? `chip--toned tone-${tone}` : 'chip--default'}`}>
      {dot && <span className="chip__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}
