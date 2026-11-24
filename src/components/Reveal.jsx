import { useEffect, useRef, useState } from 'react'

/*
  Reveal: adds `is-visible` once the element scrolls into view.
  The look comes from the variant (styles in index.css):
    up     – rises out of a soft blur
    tilt   – swings up from a 3D tilt
    scale  – pops in from smaller
    iris   – opens like a camera iris (circle clip)
    none   – no motion of its own; children animate off `.is-visible`
  Under prefers-reduced-motion everything shows in its final state.
*/
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
