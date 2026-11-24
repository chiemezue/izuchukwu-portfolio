import { Link } from 'react-router'
import { getProject } from '../data/projects'
import './TestimonialCard.css'

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')

export default function TestimonialCard({ testimonial, hidden = false }) {
  const { quote, name, role, tone = 'lime', project: slug, sample } = testimonial
  const project = slug ? getProject(slug) : null

  return (
    <figure className={`testimonial tone-${tone}`} aria-hidden={hidden || undefined}>
      <span className="testimonial__mark" aria-hidden="true">
        &ldquo;
      </span>
      {sample && import.meta.env.DEV && <span className="testimonial__sample">Sample, replace</span>}
      <blockquote className="testimonial__quote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="testimonial__author">
        <span className="testimonial__avatar" aria-hidden="true">
          {initials(name)}
        </span>
        <span className="testimonial__who">
          <span className="testimonial__name">{name}</span>
          <span className="testimonial__role">{role}</span>
        </span>
        {project && (
          <Link
            to={`/projects/${project.slug}`}
            className="testimonial__project"
            tabIndex={hidden ? -1 : undefined}
          >
            {project.title}
          </Link>
        )}
      </figcaption>
    </figure>
  )
}
