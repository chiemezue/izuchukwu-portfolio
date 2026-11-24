import { Link } from 'react-router'
import Icon from './Icon'
import { magnetMove, magnetLeave } from './pointer'
import './Button.css'

// One button style for links, routes and form buttons.
// variant: 'primary' | 'ghost' | 'text'   size: 'md' | 'sm'
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  external = false,
  className = '',
  magnetic = false,
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${magnetic ? 'btn--magnetic' : ''} ${className}`
    .replace(/\s+/g, ' ')
    .trim()
  // Magnetic buttons drift toward the pointer (no effect on touch / reduced motion)
  if (magnetic) {
    const { onPointerMove, onPointerLeave } = rest
    rest = {
      ...rest,
      onPointerMove: (e) => {
        magnetMove(e)
        onPointerMove?.(e)
      },
      onPointerLeave: (e) => {
        magnetLeave(e)
        onPointerLeave?.(e)
      },
    }
  }
  const content = (
    <>
      {icon && iconPosition === 'start' && <Icon name={icon} size={18} className="btn__icon" />}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <Icon name={icon} size={18} className="btn__icon btn__icon--end" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={classes} {...ext} {...rest}>
        {content}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }
  return (
    <button className={classes} type="button" {...rest}>
      {content}
    </button>
  )
}
