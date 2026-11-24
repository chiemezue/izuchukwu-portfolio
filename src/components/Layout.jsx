import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollManager from './ScrollManager'

export default function Layout() {
  return (
    <>
      <a href="#main" className="sr-only-focusable skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
