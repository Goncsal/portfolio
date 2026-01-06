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
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="w-6 h-6 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Project Not Found</h2>
          <p className="text-[var(--text-secondary)] mb-6">{error}</p>
          <Link
            to="/"
            className="text-[var(--accent-primary)] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            {project.summary}
          </p>
        </header>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="mb-12 rounded-lg overflow-hidden border border-[var(--border-color)]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.parentElement?.classList.add('hidden')
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6 mt-12 pb-2 border-b border-[var(--border-color)]">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-8">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {children}
                </p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[var(--accent-primary)] hover:underline"
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
                    <code className="bg-[var(--bg-secondary)] text-[var(--accent-primary)] px-1.5 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  )
                }
                return (
                  <code className="block bg-[var(--bg-secondary)] text-[var(--text-primary)] p-4 rounded-lg overflow-x-auto border border-[var(--border-color)] text-sm">
                    {children}
                  </code>
                )
              },
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4 ml-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-4 ml-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-[var(--text-secondary)]">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[var(--accent-primary)] pl-4 py-2 bg-[var(--bg-secondary)] rounded-r-lg my-4">
                  {children}
                </blockquote>
              ),
              img: ({ src, alt }) => (
                <img src={src} alt={alt} className="rounded-lg border border-[var(--border-color)] my-8 max-w-full h-auto mx-auto" />
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
