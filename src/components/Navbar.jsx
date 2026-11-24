import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { site } from '../data/site'
import Button from './Button'
import Icon from './Icon'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route or hash changes
  useEffect(() => setOpen(false), [location.key])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner container-x">
        <Link to="/" className="navbar__logo" aria-label={`${site.name}, home`}>
          {site.name}
          <span className="navbar__logo-dot" aria-hidden="true">.</span>
        </Link>

        <nav className="navbar__nav" aria-label="Main">
          <ul className="navbar__links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link to={`/${item.href}`} className="navbar__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Button to="/#contact" size="sm" className="navbar__cta">
            Let&apos;s talk
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <ul className="navbar__mobile-links container-x">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link to={`/${item.href}`} className="navbar__mobile-link">
                {item.label}
                <Icon name="arrowRight" size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
