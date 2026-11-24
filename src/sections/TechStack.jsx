import { techGroups } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { trackSpotlight } from '../components/pointer'
import './TechStack.css'

export default function TechStack() {
  return (
    <section id="stack" className="section tech" aria-labelledby="stack-title">
      <div className="container-x">
        <SectionHeading index="05" label="Tech I use" id="stack-title" tone="sky" title="Tools I *ship* with." />
        <div className="tech__grid">
          {techGroups.map((g, i) => (
            <Reveal
              key={g.title}
              className={`tech__group spotlight tone-${g.tone}`}
              delay={i * 80}
              onPointerMove={trackSpotlight}
            >
              <h3 className="tech__title">
                <span className="tech__dot" aria-hidden="true" />
                {g.title}
              </h3>
              <ul className="tech__chips">
                {g.items.map((item) => (
                  <li key={item} className="tech__chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
