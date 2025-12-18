import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Writeups from './pages/Writeups'
import WriteupDetail from './pages/WriteupDetail'

function App() {
  const basename = import.meta.env.BASE_URL

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/writeups" element={<Writeups />} />
            <Route path="/writeup/:slug" element={<WriteupDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
