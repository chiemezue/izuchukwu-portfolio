import { useEffect } from 'react'

const DEFAULT_TITLE = 'Izuchukwu | Web developer and AI automation builder'

// Sets the document title and meta description for the current page.
export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Izuchukwu` : DEFAULT_TITLE
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
