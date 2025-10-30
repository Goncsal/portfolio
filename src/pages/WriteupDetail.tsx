import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getWriteupBySlug, type WriteupMetadata } from '../utils/markdown'

const WriteupDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [writeup, setWriteup] = useState<WriteupMetadata | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
          <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading writeup...</p>
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
          <p className="text-gray-400 mb-6">{error}</p>
          <Link
            to="/writeups"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
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
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Back to Writeups
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            {writeup.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {writeup.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert prose-purple max-w-none">
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-purple-400 mb-6 pb-2 border-b border-purple-500/20">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-purple-300 mb-3 mt-6">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/30 hover:decoration-purple-400/60 transition-colors"
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
                    <code className="bg-gray-700/50 text-purple-300 px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  )
                }
                return (
                  <code className="block bg-gray-900/50 text-gray-300 p-4 rounded-lg overflow-x-auto border border-gray-700/30 font-mono text-sm">
                    {children}
                  </code>
                )
              },
              pre: ({ children }) => (
                <pre className="bg-gray-900/80 border border-gray-700/50 rounded-lg p-4 overflow-x-auto mb-6">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 ml-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-purple-500/30 pl-4 py-2 bg-purple-500/5 rounded-r-lg my-4">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-gray-700/50">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800/50">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-700/30">
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-gray-800/30 transition-colors">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-purple-400">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-gray-300">
                  {children}
                </td>
              ),
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
