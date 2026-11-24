import { useId } from 'react'
import './ProjectImage.css'

/*
  ProjectImage
  - With `src`: renders the real image (lazy-loaded, fixed 16:10 box, so no layout shift).
  - Without `src`: renders a generated dark SVG placeholder tinted by the project's hue,
    with artwork based on its motif ('flow' | 'web' | 'map') and the project name.
*/
export default function ProjectImage({
  project,
  src,
  alt,
  label,
  variant = 'card',
  priority = false,
  seed = 0,
  width,
  height,
}) {
  const uid = useId().replace(/:/g, '')
  const { title, hue = 150, motif = 'web', category } = project
  const image = src || project.cover
  // Real width/height given: show the whole image at its own shape instead of the 16:10 box
  const natural = Boolean(src && width && height)

  if (image) {
    return (
      <div
        className={`project-image project-image--${variant}`}
        style={natural ? { aspectRatio: `${width} / ${height}` } : undefined}
      >
        <img
          className="project-image__img"
          src={image}
          alt={alt ?? `${title} screenshot`}
          width={natural ? width : 1600}
          height={natural ? height : 1000}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    )
  }

  const h = (hue + seed * 24) % 360
  const tint = `hsl(${h} 85% 62%)`
  const tintSoft = `hsl(${h} 70% 26%)`

  return (
    <div
      className={`project-image project-image--${variant} project-image--placeholder`}
      role="img"
      aria-label={alt ?? `Placeholder image for ${title}`}
    >
      <svg className="project-image__svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id={`g-${uid}`} cx={seed % 2 ? '25%' : '78%'} cy="12%" r="85%">
            <stop offset="0" stopColor={tintSoft} />
            <stop offset="1" stopColor="#0b0b0d" />
          </radialGradient>
          <pattern id={`p-${uid}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0v40" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="800" height="500" fill={`url(#g-${uid})`} />
        <rect width="800" height="500" fill={`url(#p-${uid})`} />
        <g className="project-image__art">
          {motif === 'flow' && flowArt(tint)}
          {motif === 'web' && webArt(tint, seed)}
          {motif === 'map' && mapArt(tint)}
        </g>
      </svg>
      <div className="project-image__caption">
        <span className="project-image__kicker">{label ?? category}</span>
        <span className="project-image__name">{title}</span>
      </div>
    </div>
  )
}

// Placeholder artwork: plain render functions, not components
function flowArt(tint) {
  const node = (x, y, w = 150) => (
    <g>
      <rect x={x} y={y} width={w} height="56" rx="12" fill="#111114" stroke={tint} strokeOpacity="0.55" />
      <circle cx={x + 22} cy={y + 28} r="8" fill={tint} fillOpacity="0.8" />
      <rect x={x + 40} y={y + 20} width={w - 64} height="6" rx="3" fill="#ffffff" fillOpacity="0.28" />
      <rect x={x + 40} y={y + 32} width={(w - 64) * 0.6} height="5" rx="2.5" fill="#ffffff" fillOpacity="0.12" />
    </g>
  )
  return (
    <g>
      <path
        d="M230 160 C 290 160, 290 220, 350 220 M500 220 C 560 220, 560 130, 620 130 M500 220 C 560 220, 560 300, 620 300"
        fill="none"
        stroke={tint}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="6 7"
      />
      {node(80, 132)}
      {node(350, 192)}
      {node(620, 102, 140)}
      {node(620, 272, 140)}
    </g>
  )
}

function webArt(tint, seed) {
  return (
    <g>
      <rect x="120" y="70" width="560" height="360" rx="16" fill="#0f0f12" stroke="#ffffff" strokeOpacity="0.1" />
      <path d="M120 112h560" stroke="#ffffff" strokeOpacity="0.08" />
      <circle cx="146" cy="91" r="5" fill="#ffffff" fillOpacity="0.18" />
      <circle cx="164" cy="91" r="5" fill="#ffffff" fillOpacity="0.18" />
      <circle cx="182" cy="91" r="5" fill="#ffffff" fillOpacity="0.18" />
      <rect x="160" y="146" width={seed % 2 ? 220 : 280} height="18" rx="5" fill="#ffffff" fillOpacity="0.32" />
      <rect x="160" y="176" width="200" height="10" rx="5" fill="#ffffff" fillOpacity="0.14" />
      <rect x="160" y="196" width="170" height="10" rx="5" fill="#ffffff" fillOpacity="0.14" />
      <rect x="160" y="226" width="96" height="28" rx="14" fill={tint} fillOpacity="0.85" />
      <rect x="440" y="140" width="200" height="124" rx="12" fill={tint} fillOpacity="0.18" stroke={tint} strokeOpacity="0.4" />
      <rect x="160" y="290" width="150" height="100" rx="10" fill="#ffffff" fillOpacity="0.05" />
      <rect x="325" y="290" width="150" height="100" rx="10" fill="#ffffff" fillOpacity="0.05" />
      <rect x="490" y="290" width="150" height="100" rx="10" fill="#ffffff" fillOpacity="0.05" />
    </g>
  )
}

function mapArt(tint) {
  return (
    <g fill="none">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${80 + i * 10} ${300 - i * 22} C ${220} ${180 - i * 26}, ${380} ${360 - i * 20}, ${520} ${220 - i * 18} S ${700} ${160 - i * 10}, ${760} ${200 - i * 16}`}
          stroke={tint}
          strokeOpacity={0.15 + i * 0.08}
          strokeWidth="1.5"
        />
      ))}
      <circle cx="520" cy="250" r="54" stroke={tint} strokeOpacity="0.35" />
      <circle cx="520" cy="250" r="30" stroke={tint} strokeOpacity="0.6" />
      <circle cx="520" cy="250" r="7" fill={tint} />
      <circle cx="300" cy="330" r="5" fill="#ffffff" fillOpacity="0.5" />
      <circle cx="640" cy="160" r="5" fill="#ffffff" fillOpacity="0.5" />
    </g>
  )
}
