import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWriteupFiles, type WriteupMetadata } from '../utils/markdown'

const Writeups = () => {
  const [writeups, setWriteups] = useState<WriteupMetadata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadWriteups = async () => {
      try {
        const writeupData = await getWriteupFiles()
        setWriteups(writeupData)
      } catch (error) {
        console.error('Error loading writeups:', error)
      } finally {
        setLoading(false)
      }
    }

    loadWriteups()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading writeups...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Writeups
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Security research, CTF solutions, and technical deep-dives into complex challenges
        </p>
      </div>

      {writeups.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No Writeups Yet</h3>
          <p className="text-gray-500">Writeups will appear here once you add markdown files to /src/writeups/</p>
        </div>
      ) : (
        <div className="space-y-6">
          {writeups.map((writeup, index) => (
            <Link
              key={writeup.slug}
              to={`/writeup/${writeup.slug}`}
              className="group block p-6 rounded-xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-sm font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {writeup.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {writeup.description}
                  </p>
                  
                  <div className="flex items-center text-purple-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Read Writeup →
                    </span>
                  </div>
                </div>
                
                <div className="ml-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 flex items-center justify-center">
                    <span className="text-xl">🔍</span>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Writeups
