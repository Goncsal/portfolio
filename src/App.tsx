import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import WriteupsSection from './components/WriteupsSection'
import ContactSection from './components/ContactSection'
import ProjectDetail from './pages/ProjectDetail'
import WriteupDetail from './pages/WriteupDetail'

function HomePage() {
  return (
    <>
      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WriteupsSection />
      <ContactSection />
    </>
  )
}

function App() {
  const basename = import.meta.env.BASE_URL

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/writeup/:slug" element={<WriteupDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
