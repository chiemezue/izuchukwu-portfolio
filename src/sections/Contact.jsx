import { site, whatsappLink } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container-x contact__inner">
        <div className="contact__info">
          <SectionHeading
            index="07"
            tone="lime"
            label="Contact"
            id="contact-title"
            title={site.contact.heading}
            intro={site.contact.line}
          />

          <Reveal className="contact__channels" delay={80}>
            <a href={`mailto:${site.email}`} className="contact__email">
              <Icon name="mail" size={20} />
              {site.email}
            </a>
            <a href={`tel:+${site.whatsappNumber}`} className="contact__email contact__phone">
              <Icon name="phone" size={20} />
              {site.phone}
            </a>
            <Button href={whatsappLink()} external icon="whatsapp" iconPosition="start" variant="ghost">
              Chat on WhatsApp
            </Button>
          </Reveal>

          <Reveal as="ul" className="contact__socials" delay={140} aria-label="Social links">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="contact__social" target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icon} size={18} />
                  <span>{s.handle ?? s.label}</span>
                  <span className="sr-only"> on {s.label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="contact__form" delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
