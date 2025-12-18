import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getWriteupBySlug, type WriteupMetadata } from '../utils/markdown'
import { useTheme } from '../context/ThemeContext'

const WriteupDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [writeup, setWriteup] = useState<WriteupMetadata | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const loadWriteup = async () => {
      if (!slug) {
        setError('No writeup specified')
        setLoading(false)
        return
      }

      try {
        const writeupData = await getWriteupBySlug(slug)
        if (writeupData) {
          setWriteup(writeupData)
        } else {
          setError('Writeup not found')
        }
      } catch (err) {
        console.error('Error loading writeup:', err)
        setError('Failed to load writeup')
      } finally {
        setLoading(false)
      }
    }

    loadWriteup()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-[var(--accent-purple)] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-[var(--text-color)]/50">Loading writeup...</p>
        </div>
      </div>
    )
  }

  if (error || !writeup) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center">
            <span className="text-2xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">Writeup Not Found</h2>
          <p className="text-[var(--text-color)]/50 mb-6">{error}</p>
          <Link
            to="/writeups"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] hover:bg-[var(--accent-purple)]/20 hover:border-[var(--accent-purple)]/40 transition-all duration-300"
          >
            ← Back to Writeups
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
          to="/writeups"
          className="inline-flex items-center text-[var(--accent-purple)] hover:text-[var(--accent-purple)]/80 transition-colors mb-6 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Back to Writeups
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)] bg-clip-text text-transparent mb-4">
            {writeup.title}
          </h1>
          <p className="text-xl text-[var(--text-color)]/60 max-w-2xl mx-auto">
            {writeup.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
        <div className="bg-[var(--card-bg)] rounded-xl p-8 border border-[var(--card-border)]">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-[var(--accent-purple)] mb-6 pb-2 border-b border-[var(--accent-purple)]/20">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-[var(--accent-cyan)]/80 mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-[var(--accent-purple)]/80 mb-3 mt-6">
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
                  className="text-[var(--accent-purple)] hover:text-[var(--accent-purple)]/80 underline decoration-[var(--accent-purple)]/30 hover:decoration-[var(--accent-purple)]/60 transition-colors"
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
                    <code className="bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  )
                }
                return (
                  <code className="block bg-[var(--bg-color)]/50 text-[var(--text-color)]/80 p-4 rounded-lg overflow-x-auto border border-[var(--card-border)] font-mono text-sm">
                    {children}
                  </code>
                )
              },
              pre: ({ children }) => (
                <pre className="bg-[var(--bg-color)]/80 border border-[var(--card-border)] rounded-lg p-4 overflow-x-auto mb-6">
                  {children}
                </pre>
              ),
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
                <blockquote className="border-l-4 border-[var(--accent-purple)]/30 pl-4 py-2 bg-[var(--accent-purple)]/5 rounded-r-lg my-4">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-[var(--card-border)]">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-[var(--card-bg)]">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-[var(--card-border)]">
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-[var(--accent-purple)]/5 transition-colors">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--accent-purple)]">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-[var(--text-color)]/80">
                  {children}
                </td>
              ),
              img: ({ src, alt }) => (
                <img src={src} alt={alt} className="rounded-lg border border-[var(--card-border)] my-8 max-w-full h-auto mx-auto" />
              )
            }}
          >
            {writeup.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export default WriteupDetail
