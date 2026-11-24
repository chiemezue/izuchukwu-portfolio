import { useState } from 'react'
import { testimonials } from '../data/testimonials'
import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import Reveal from '../components/Reveal'
import './Testimonials.css'

// Two rows of testimonials drifting in opposite directions.
// Pauses on hover/focus, has a visible pause button, and shows a static
// grid under prefers-reduced-motion.
export default function Testimonials() {
  const [paused, setPaused] = useState(false)
  // Two rows only when there are enough quotes to fill wide screens; otherwise one row
  const half = Math.ceil(testimonials.length / 2)
  const rows = testimonials.length >= 6 ? [testimonials.slice(0, half), testimonials.slice(half)] : [testimonials]

  return (
    <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Client words"
          id="testimonials-title"
          tone="coral"
          align="center"
          title="What it is like to *work* with me."
          intro="A few words from people I have built for."
        />
      </div>

      <Reveal className={`testimonials__rows ${paused ? 'is-paused' : ''}`}>
        {rows.map((row, r) => (
          <div key={r} className={`testimonials__marquee ${r ? 'testimonials__marquee--reverse' : ''}`}>
            <ul className="testimonials__track">
              {row.map((t, i) => (
                <li key={`a-${i}`}>
                  <TestimonialCard testimonial={t} />
                </li>
              ))}
              {/* Duplicate for a seamless loop; hidden from assistive tech */}
              {row.map((t, i) => (
                <li key={`b-${i}`} className="testimonials__dupe" aria-hidden="true">
                  <TestimonialCard testimonial={t} hidden />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <div className="testimonials__controls container-x">
        <button type="button" className="testimonials__pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
          {paused ? 'Play' : 'Pause'} scrolling
        </button>
      </div>
    </section>
  )
}
