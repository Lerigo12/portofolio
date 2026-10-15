import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { initScrollAnimations } from './animations/scrollAnimations'
import './App.css'

function App() {
  const { darkMode, setDarkMode } = useThemeMode()

  useEffect(() => {
    return initScrollAnimations()
  }, [])

  return (
    <main className="portfolio" data-theme={darkMode ? 'dark' : 'light'}>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((current) => !current)}
      />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

function useThemeMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return { darkMode, setDarkMode }
}

export default App