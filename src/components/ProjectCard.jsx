import { Link } from 'react-router'
import { toneFor } from '../data/projects'
import ProjectImage from './ProjectImage'
import Chip from './Chip'
import Icon from './Icon'
import Reveal from './Reveal'
import { trackSpotlight } from './pointer'
import './ProjectCard.css'

const MAX_CHIPS = 4

export default function ProjectCard({ project, index = 0, featured = false }) {
  const extra = project.stack.length - MAX_CHIPS
  const titleId = `project-${project.slug}`
  const tone = toneFor(project.category)

  return (
    <Reveal
      as="article"
      className={`project-card spotlight tone-${tone} ${featured ? 'project-card--featured' : ''}`}
      delay={(index % 2) * 90}
      aria-labelledby={titleId}
      onPointerMove={trackSpotlight}
    >
      <div className="project-card__media">
        <ProjectImage project={project} variant="card" />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <Chip tone={tone} dot>
            {project.category}
          </Chip>
          <span className="project-card__num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="project-card__title" id={titleId}>
          <Link to={`/projects/${project.slug}`} className="project-card__link">
            {project.title}
          </Link>
        </h3>
        <p className="project-card__summary">{project.summary}</p>

        <ul className="project-card__stack" aria-label="Stack">
          {project.stack.slice(0, MAX_CHIPS).map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
          {extra > 0 && (
            <li>
              <Chip>+{extra}</Chip>
            </li>
          )}
        </ul>

        <span className="project-card__cta" aria-hidden="true">
          View case study
          <span className="project-card__cta-icon">
            <Icon name="arrowUpRight" size={16} strokeWidth={2.25} />
          </span>
        </span>
      </div>
    </Reveal>
  )
}
