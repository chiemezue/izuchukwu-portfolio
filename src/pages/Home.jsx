import PageMeta from '../components/PageMeta'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Testimonials from '../sections/Testimonials'
import Process from '../sections/Process'
import TechStack from '../sections/TechStack'
import About from '../sections/About'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <PageMeta description="I'm Izuchukwu, a web developer and AI automation builder in Nigeria. I build fast websites, web apps, n8n workflows, WhatsApp and voice bots that businesses actually use." />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Process />
      <TechStack />
      <About />
      <Contact />
    </>
  )
}
