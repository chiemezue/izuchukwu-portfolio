import PageMeta from '../components/PageMeta'
import Button from '../components/Button'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found container-x" aria-labelledby="nf-title">
      <PageMeta title="Page not found" />
      <p className="not-found__code" aria-hidden="true">
        404
      </p>
      <h1 className="not-found__title" id="nf-title">
        This page does not exist.
      </h1>
      <p className="not-found__text">The link may be broken, or the page may have moved.</p>
      <div className="not-found__actions">
        <Button to="/" icon="arrowRight">
          Back to home
        </Button>
        <Button to="/#work" variant="ghost">
          See my projects
        </Button>
      </div>
    </section>
  )
}
