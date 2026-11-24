import { site } from '../data/site'
import Button from '../components/Button'
import AvailabilityBadge from '../components/AvailabilityBadge'
import HeroVisual from '../components/HeroVisual'
import ToolMarquee from '../components/ToolMarquee'
import { trackParallax } from '../components/pointer'
import './Hero.css'

export default function Hero() {
  const letters = [...site.name]

  return (
    <section className="hero" aria-labelledby="hero-title" onPointerMove={trackParallax}>
      <div className="hero__aurora" aria-hidden="true">
        <span className="hero__blob hero__blob--lime" />
        <span className="hero__blob hero__blob--sky" />
        <span className="hero__blob hero__blob--coral" />
      </div>
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner container-x">
        <div className="hero__content">
          <div className="hero__enter" style={{ '--i': 0 }}>
            <AvailabilityBadge>{site.availability}</AvailabilityBadge>
          </div>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__hello hero__enter" style={{ '--i': 1 }}>
              {/* Photo comes from site.about.avatar in src/data/site.js; initial shown if empty */}
              <span className="hero__avatar" aria-hidden="true">
                {site.about.avatar ? (
                  <img
                    src={site.about.avatar}
                    alt=""
                    width="152"
                    height="152"
                    fetchPriority="high"
                    decoding="async"
                    className="hero__avatar-img"
                  />
                ) : (
                  <span className="hero__avatar-initial">{site.name.charAt(0)}</span>
                )}
                <span className="hero__avatar-status" />
              </span>
              Hi, I&apos;m
            </span>

            {/* Name: letters drop in one by one, then react on hover */}
            <span className="hero__name">
              <span className="sr-only">{site.name}</span>
              <span className="hero__letters" aria-hidden="true">
                {letters.map((ch, i) => (
                  <span key={i} className="hero__char" style={{ '--c': i }}>
                    {ch}
                  </span>
                ))}
                <span className="hero__char hero__dot" style={{ '--c': letters.length }}>
                  .
                </span>
              </span>
            </span>
          </h1>

          <p className="hero__role hero__enter" style={{ '--i': 4 }}>
            <span className="hero__role-web">Web developer</span> <span className="hero__role-and">and</span>{' '}
            <span className="hero__role-ai">AI automation builder</span>
          </p>

          <div className="hero__pitch hero__enter" style={{ '--i': 5 }}>
            {site.hero.pitch.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="hero__actions hero__enter" style={{ '--i': 6 }}>
            <Button to="/#work" icon="arrowRight" magnetic>
              View projects
            </Button>
            <Button to="/#contact" variant="ghost" magnetic>
              Contact me
            </Button>
          </div>
        </div>

        <div className="hero__visual">
          <HeroVisual />
        </div>
      </div>

      <ToolMarquee />
    </section>
  )
}
