import { Fragment } from 'react'

/*
  SplitWords: splits a heading into words that rise from behind a mask,
  one after another, when an ancestor gets `.is-visible` (see index.css).
  Words wrapped in *asterisks* render as italic serif accents (<em>).
  The words stay real text (only wrapped in spans), so screen readers
  and search engines read the sentence normally.
*/
export default function SplitWords({ text, startIndex = 0 }) {
  let i = startIndex
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean)

  return parts.map((part, p) => {
    const accent = part.startsWith('*') && part.endsWith('*')
    const words = (accent ? part.slice(1, -1) : part).split(/(\s+)/)

    return (
      <Fragment key={p}>
        {words.map((w, k) => {
          if (!w) return null
          if (/^\s+$/.test(w)) return ' '
          const idx = i++
          const inner = (
            <span className="split__inner" style={{ '--w': idx }}>
              {w}
            </span>
          )
          return (
            <span key={k} className="split__word">
              {accent ? <em>{inner}</em> : inner}
            </span>
          )
        })}
      </Fragment>
    )
  })
}
