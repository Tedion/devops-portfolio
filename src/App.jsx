import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        {import.meta.env.VITE_SHOW_ANALYTICS_DASHBOARD === 'true' && <Dashboard />}
      </main>
      <Footer />
    </div>
  )
}

export default App

