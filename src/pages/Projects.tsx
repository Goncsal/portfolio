import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProjectFiles, type ProjectMetadata } from '../utils/markdown'

const Projects = () => {
  const [projects, setProjects] = useState<ProjectMetadata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await getProjectFiles()
        setProjects(projectData)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-[var(--accent-cyan)] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-[var(--text-color)]/50">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent mb-4">
          Projects
        </h1>
        <p className="text-xl text-[var(--text-color)]/60 max-w-2xl mx-auto">
          A collection of my development projects, from web applications to security tools
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center">
            <span className="text-2xl">📁</span>
          </div>
          <h3 className="text-xl font-semibold text-[var(--text-color)]/80 mb-2">No Projects Yet</h3>
          <p className="text-[var(--text-color)]/50">Projects will appear here once you add markdown files to /src/projects/</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="group relative rounded-xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-cyan)]/30 transition-all duration-300 hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[var(--accent-cyan)]/10 to-[var(--accent-purple)]/10">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                ) : null}
                <div className={`${project.thumbnail ? 'hidden' : ''} absolute inset-0 flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--text-color)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-color)]/60 text-sm leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
                <div className="mt-4 flex items-center text-[var(--accent-cyan)] text-sm font-medium">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    View Project →
                  </span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)]/10 to-[var(--accent-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
