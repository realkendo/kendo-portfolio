import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Skills'
// import Blog from './components/Blog'
// import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </main>
  )
}

