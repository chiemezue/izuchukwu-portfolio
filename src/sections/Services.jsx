import { pillars } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { trackSpotlight } from '../components/pointer'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="What I do"
          id="services-title"
          title="Two skills, one goal: systems that *work*."
          intro="I build the website your customers see and the automation that runs behind it. You can hire me for either, or both."
        />

        <div className="services__grid">
          {pillars.map((p, i) => (
            <Reveal
              as="article"
              key={p.id}
              className={`services__card spotlight tone-${p.tone}`}
              delay={i * 100}
              aria-labelledby={`pillar-${p.id}`}
              onPointerMove={trackSpotlight}
            >
              <div className="services__top">
                <span className="services__icon">
                  <Icon name={p.icon} size={24} />
                </span>
                <span className="services__num" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="services__title" id={`pillar-${p.id}`}>
                {p.title}
              </h3>
              <p className="services__intro">{p.intro}</p>
              <ul className="services__list">
                {p.bullets.map((b) => (
                  <li key={b} className="services__item">
                    <Icon name="check" size={16} strokeWidth={2.5} className="services__check" />
                    {b}
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
