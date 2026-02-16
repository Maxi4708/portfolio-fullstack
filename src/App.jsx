import './styles/global.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Philosophy from './sections/Philosophy'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import CallToAction from './sections/CallToAction'
import Contact from './sections/Contact'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Section from './components/layout/Section'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="about" alternate>
          <About />
        </Section>
        <Section id="philosophy">
          <Philosophy />
        </Section>
        <Section id="projects" alternate>
          <Projects />
        </Section>
        <Section id="skills" alternate>
          <Skills />
        </Section>
        <Section id="cta">
          <CallToAction />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
