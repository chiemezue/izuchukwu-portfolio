import { process } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import './Process.css'

const TONES = ['lime', 'sky', 'amber', 'coral']

export default function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="How I work"
          id="process-title"
          tone="amber"
          title="A clear process, *no* surprises."
        />
        <ol className="process__list">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} className={`process__step tone-${TONES[i % TONES.length]}`} delay={i * 110}>
              <span className="process__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
