import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getProjectBySlug, type ProjectMetadata } from '../utils/markdown'
import { useTheme } from '../context/ThemeContext'

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [project, setProject] = useState<ProjectMetadata | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) {
        setError('No project specified')
        setLoading(false)
        return
      }

      try {
        const projectData = await getProjectBySlug(slug)
        if (projectData) {
          setProject(projectData)
        } else {
          setError('Project not found')
        }
      } catch (err) {
        console.error('Error loading project:', err)
        setError('Failed to load project')
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-[var(--accent-cyan)] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-[var(--text-color)]/50">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center">
            <span className="text-2xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">Project Not Found</h2>
          <p className="text-[var(--text-color)]/50 mb-6">{error}</p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/40 transition-all duration-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center text-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]/80 transition-colors mb-6 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Back to Projects
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--text-color)]/60 max-w-2xl mx-auto">
            {project.summary}
          </p>
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="relative rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-[var(--accent-cyan)]/10 to-[var(--accent-purple)]/10">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full max-h-96 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.parentElement?.classList.add('hidden')
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/20 to-transparent"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <article className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
        <div className="bg-[var(--card-bg)] rounded-xl p-8 border border-[var(--card-border)]">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-[var(--accent-cyan)] mb-6 pb-2 border-b border-[var(--accent-cyan)]/20">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-[var(--accent-purple)] mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-[var(--accent-cyan)]/80 mb-3 mt-6">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[var(--text-color)]/80 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]/80 underline decoration-[var(--accent-cyan)]/30 hover:decoration-[var(--accent-cyan)]/60 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children, className }) => {
                const isInline = !className
                if (isInline) {
                  return (
                    <code className="bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  )
                }
                return (
                  <code className="block bg-[var(--bg-color)]/50 text-[var(--text-color)]/80 p-4 rounded-lg overflow-x-auto border border-[var(--card-border)]">
                    {children}
                  </code>
                )
              },
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-[var(--text-color)]/80 space-y-2 mb-4 ml-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-[var(--text-color)]/80 space-y-2 mb-4 ml-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-[var(--text-color)]/80">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[var(--accent-cyan)]/30 pl-4 py-2 bg-[var(--accent-cyan)]/5 rounded-r-lg my-4">
                  {children}
                </blockquote>
              ),
              img: ({ src, alt }) => (
                <img src={src} alt={alt} className="rounded-lg border border-[var(--card-border)] my-8 max-w-full h-auto mx-auto" />
              )
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export default ProjectDetail
