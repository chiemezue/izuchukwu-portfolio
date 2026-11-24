import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Intro screen (markup + CSS live in index.html). It animates away on its own;
// here we only unlock scrolling and clean up once it has finished.
const root = document.documentElement
const intro = document.getElementById('intro')
if (root.classList.contains('has-intro')) {
  setTimeout(() => {
    root.classList.add('intro-done')
    intro?.remove()
  }, 2100)
  // Drop the hero's extra entrance delay after it has played
  setTimeout(() => root.classList.remove('has-intro', 'intro-done'), 4000)
} else {
  intro?.remove()
}
