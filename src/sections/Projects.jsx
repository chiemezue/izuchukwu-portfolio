import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section id="work" className="section projects" aria-labelledby="work-title">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Selected projects"
          id="work-title"
          tone="sky"
          title="Systems I have *built* and shipped."
          intro="Websites, automations and data tools I have built for clinics, brands, manufacturers, schools and NGOs."
        />
        <div className="projects__grid">
          {projects.map((p, i) => {
            // First card is wide. The rest pair up in two columns; the last one
            // only goes wide if it would otherwise sit alone in its row.
            const lastIsAlone = (projects.length - 1) % 2 === 1
            const featured = i === 0 || (lastIsAlone && i === projects.length - 1)
            return <ProjectCard key={p.slug} project={p} index={i} featured={featured} />
          })}
        </div>
      </div>
    </section>
  )
}
