import { Link } from 'react-router'
import { site } from '../data/site'
import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container-x">
        <div className="footer__brand">
          <Link to="/" className="footer__name">
            {site.name}
            <span className="footer__dot" aria-hidden="true">.</span>
          </Link>
          <p className="footer__role">{site.role}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__heading">Quick links</h2>
          <ul className="footer__list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link to={`/${item.href}`} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__heading">Elsewhere</h2>
          <ul className="footer__list">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="footer__link" target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icon} size={16} />
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__wordmark container-x" aria-hidden="true">
        {site.name}
      </p>

      <div className="footer__bottom container-x">
        <p>&copy; {year} {site.name}</p>
        <p>Designed and built by {site.name}</p>
      </div>
    </footer>
  )
}
