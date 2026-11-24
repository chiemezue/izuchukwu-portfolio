import { Link, useParams } from 'react-router'
import { getProject, toneFor } from '../data/projects'
import PageMeta from '../components/PageMeta'
import ProjectImage from '../components/ProjectImage'
import Chip from '../components/Chip'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'
import './ProjectPage.css'

const PLACEHOLDER_GALLERY = 3

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound />

  // Automation projects show one workflow image (the cover) plus the write-up, no gallery
  const showGallery = project.category !== 'AI and Automation'
  const gallery = project.gallery.length
    ? project.gallery
    : Array.from({ length: PLACEHOLDER_GALLERY }, (_, i) => ({
        src: '',
        alt: '',
        placeholder: i,
      }))

  return (
    <article className={`project-page tone-${toneFor(project.category)}`} aria-labelledby="project-title">
      <PageMeta title={project.title} description={project.summary} />

      <div className="container-x">
        <Link to="/#work" className="project-page__back">
          <Icon name="arrowLeft" size={18} /> All projects
        </Link>

        <header className="project-page__header">
          <div className="project-page__enter" style={{ '--i': 0 }}>
            <Chip tone={toneFor(project.category)} dot>
              {project.category}
            </Chip>
          </div>
          <h1 className="project-page__title project-page__enter" id="project-title" style={{ '--i': 1 }}>
            {project.title}
          </h1>
          <p className="project-page__overview project-page__enter" style={{ '--i': 2 }}>
            {project.overview}
          </p>
          {(project.liveUrl || project.sourceUrl) && (
            <div className="project-page__links project-page__enter" style={{ '--i': 3 }}>
              {project.liveUrl && (
                <Button href={project.liveUrl} external icon="arrowUpRight">
                  View live site
                </Button>
              )}
              {project.sourceUrl && (
                <Button href={project.sourceUrl} external variant="ghost" icon="github" iconPosition="start">
                  Source code
                </Button>
              )}
            </div>
          )}
        </header>

        <div className="project-page__cover project-page__enter" style={{ '--i': 3 }}>
          <ProjectImage project={project} variant="hero" priority label={showGallery ? project.category : 'Workflow'} />
        </div>

        <div className="project-page__body">
          <div className="project-page__main">
            <Reveal as="section" className="project-page__block" aria-labelledby="problem-title">
              <h2 className="project-page__h2" id="problem-title">
                The problem
              </h2>
              <p className="project-page__p">{project.problem}</p>
            </Reveal>

            <Reveal as="section" className="project-page__block" aria-labelledby="built-title">
              <h2 className="project-page__h2" id="built-title">
                What I built
              </h2>
              <ul className="project-page__built">
                {project.built.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} strokeWidth={2.25} className="project-page__check" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal as="aside" className="project-page__aside" aria-label="Project details">
            <h2 className="project-page__label">Stack</h2>
            <ul className="project-page__stack">
              {project.stack.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
            <h2 className="project-page__label project-page__label--spaced">Category</h2>
            <p className="project-page__category">{project.category}</p>
          </Reveal>
        </div>

        {showGallery && (
          <section className="project-page__gallery-wrap" aria-labelledby="gallery-title">
            <h2 className="project-page__h2" id="gallery-title">
              Gallery
            </h2>
            <div className="project-page__gallery">
              {gallery.map((img, i) => (
                // Real screenshots run full width so they stay readable; placeholders keep the mosaic
                <Reveal
                  key={img.src || i}
                  delay={(i % 3) * 80}
                  className={i === 0 || project.gallery.length ? 'project-page__shot--wide' : ''}
                >
                  <ProjectImage
                    project={project}
                    src={img.src}
                    alt={img.alt || undefined}
                    width={img.width}
                    height={img.height}
                    variant="gallery"
                    seed={i + 1}
                    label={`Screen ${String(i + 1).padStart(2, '0')}`}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <Reveal as="section" className="project-page__cta" aria-labelledby="cta-title">
          <div>
            <h2 className="project-page__cta-title" id="cta-title">
              Need something like this?
            </h2>
            <p className="project-page__cta-text">
              Tell me about your project and I will show you how I would approach it.
            </p>
          </div>
          <Button to="/#contact" icon="arrowRight">
            Start a similar project
          </Button>
        </Reveal>
      </div>
    </article>
  )
}
