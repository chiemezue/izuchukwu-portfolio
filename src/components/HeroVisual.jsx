import Icon from './Icon'
import './HeroVisual.css'

// Decorative "workflow run" card: an abstract take on the systems I build.
// Helpers below are plain render functions (not components).
// Pure HTML/CSS, no images. Hidden from screen readers (decorative).
export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__window">
        <div className="hero-visual__bar">
          <span className="hero-visual__file">new-enquiry.workflow</span>
          <span className="hero-visual__status">
            <span className="hero-visual__live" /> active
          </span>
        </div>

        <div className="hero-visual__flow">
          {renderNode({ tag: 'Trigger', title: 'New WhatsApp message', icon: 'whatsapp', step: 0, tone: 'coral' })}
          {renderLink()}
          {renderNode({ tag: 'AI agent', title: 'Understand and reply', icon: 'workflow', step: 1, tone: 'lime', accent: true })}
          {renderBranch()}
          <div className="hero-visual__split">
            {renderNode({ tag: 'Action', title: 'Send reply', icon: 'arrowUpRight', step: 2, tone: 'sky', compact: true })}
            {renderNode({ tag: 'Action', title: 'Log to Sheets', icon: 'check', step: 3, tone: 'amber', compact: true })}
          </div>
        </div>

        <div className="hero-visual__footer">
          <span className="hero-visual__ok">
            <Icon name="check" size={14} strokeWidth={2.5} /> Run completed
          </span>
          <span className="hero-visual__cursor">_</span>
        </div>
      </div>

      <div className="hero-visual__code">
        <span className="hero-visual__code-k">export default</span> <span className="hero-visual__code-f">function</span>{' '}
        Website() {'{'} <span className="hero-visual__code-c">{'/* fast, clear, mobile-first */'}</span> {'}'}
      </div>
    </div>
  )
}

function renderNode({ tag, title, icon, step, tone, accent = false, compact = false }) {
  return (
    <div
      className={`hero-visual__node tone-${tone} ${accent ? 'hero-visual__node--accent' : ''} ${compact ? 'hero-visual__node--compact' : ''}`}
      style={{ '--step': step }}
    >
      <span className="hero-visual__node-icon">
        <Icon name={icon} size={16} />
      </span>
      <span className="hero-visual__node-text">
        <span className="hero-visual__node-tag">{tag}</span>
        <span className="hero-visual__node-title">{title}</span>
      </span>
    </div>
  )
}

function renderLink() {
  return (
    <div className="hero-visual__link">
      <span className="hero-visual__pulse" />
    </div>
  )
}

function renderBranch() {
  return (
    <svg className="hero-visual__branch" viewBox="0 0 200 32" preserveAspectRatio="none">
      <path d="M100 0 V12 M100 12 H50 V32 M100 12 H150 V32" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
