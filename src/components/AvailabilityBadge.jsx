import './AvailabilityBadge.css'

export default function AvailabilityBadge({ children }) {
  return (
    <p className="availability">
      <span className="availability__dot" aria-hidden="true" />
      {children}
    </p>
  )
}
