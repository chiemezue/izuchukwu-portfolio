import { techGroups } from '../data/services'
import './ToolMarquee.css'

// Infinite scrolling strip of the tools I use, colored by group.
// Decorative duplicate is hidden from screen readers; static under reduced motion.
export default function ToolMarquee() {
  const tools = techGroups.flatMap((g) => g.items.map((item) => ({ item, tone: g.tone })))

  const row = (hidden) => (
    <ul className="tool-marquee__row" aria-hidden={hidden || undefined}>
      {tools.map(({ item, tone }) => (
        <li key={item} className={`tool-marquee__item tone-${tone}`}>
          <span className="tool-marquee__dot" />
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="tool-marquee">
      <div className="tool-marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
