import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Your Name
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl -z-10 rounded-lg"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-cyan-300 font-light">
            Cybersecurity Researcher & Developer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Exploring the digital frontier through code, security research, and innovative solutions. 
            Welcome to my cyber sanctuary.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Link 
            to="/projects" 
            className="group relative p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                Projects
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Explore my latest development projects and innovative solutions
              </p>
              <div className="mt-4 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
          </Link>

          <Link 
            to="/writeups" 
            className="group relative p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                Writeups
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Security research, CTF solutions, and technical deep-dives
              </p>
              <div className="mt-4 text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
          </Link>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Connect</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:your.email@example.com" 
              className="px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              Email
            </a>
            <a 
              href="https://github.com/yourusername" 
              className="px-6 py-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              className="px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
