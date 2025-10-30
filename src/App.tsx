import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Writeups from './pages/Writeups'
import WriteupDetail from './pages/WriteupDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/project/:slug" element={<ProjectDetail />} />
            <Route path="/portfolio/writeups" element={<Writeups />} />
            <Route path="/portfolio/writeup/:slug" element={<WriteupDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
