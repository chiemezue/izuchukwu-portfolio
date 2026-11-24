import { Fragment } from 'react'
import Reveal from './Reveal'
import './SectionHeading.css'

// Words wrapped in *asterisks* in the title render as italic serif accents.
function renderTitle(title) {
  return title.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : <Fragment key={i}>{part}</Fragment>,
  )
}

export default function SectionHeading({ index, label, title, intro, id, tone = 'lime', align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading--${align} tone-${tone}`}>
      <p className="section-heading__label">
        <span className="section-heading__index">{index}</span>
        {label}
      </p>
      <h2 className="section-heading__title" id={id}>
        {renderTitle(title)}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </Reveal>
  )
}
