import { site } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import './About.css'

export default function About() {
  const { about } = site

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container-x about__inner">
        <Reveal className="about__portrait">
          {about.portrait ? (
            <img
              src={about.portrait}
              alt={`Portrait of ${site.name}`}
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              className="about__img"
            />
          ) : (
            <div className="about__placeholder" role="img" aria-label={`Portrait placeholder for ${site.name}`}>
              <Icon name="user" size={56} strokeWidth={1.25} />
              <span className="about__placeholder-label">Portrait coming soon</span>
            </div>
          )}
        </Reveal>

        <div className="about__content">
          <SectionHeading index="06" label="About" id="about-title" tone="coral" title="I build things people *rely* on." />
          <Reveal className="about__text" delay={80}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal as="dl" className="about__facts" delay={160}>
            {about.facts.map((f) => (
              <div key={f.label} className="about__fact">
                <dt className="about__fact-label">{f.label}</dt>
                <dd className="about__fact-value">{f.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
