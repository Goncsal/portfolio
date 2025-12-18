import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-cyan)] bg-clip-text text-transparent animate-pulse">
              Gonçalo Almeida
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 blur-xl -z-10 rounded-lg"></div>
          </div>

          <p className="text-xl md:text-2xl text-[var(--accent-cyan)] font-light">
            Fullstack Developer | Computer Engineering Student
          </p>

          <p className="text-lg text-[var(--text-color)]/70 max-w-2xl mx-auto leading-relaxed">
            Computer Engineering undergraduate with a strong focus on fullstack development and digital transformation.
            Experienced in building production-grade applications and automating workflows.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link
            to="/projects"
            className="group relative p-8 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/10 to-[var(--accent-purple)]/10 border border-[var(--card-border)] hover:border-[var(--accent-cyan)]/40 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/5 to-[var(--accent-purple)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--accent-cyan)] mb-4 group-hover:text-[var(--accent-cyan)] transition-colors">
                Projects
              </h3>
              <p className="text-[var(--text-color)]/60 group-hover:text-[var(--text-color)]/80 transition-colors">
                Explore my latest development projects and innovative solutions
              </p>
              <div className="mt-4 text-[var(--accent-cyan)] group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
          </Link>

          <Link
            to="/about"
            className="group relative p-8 rounded-xl bg-gradient-to-br from-[var(--accent-purple)]/10 to-[var(--accent-cyan)]/10 border border-[var(--card-border)] hover:border-[var(--accent-purple)]/40 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple)]/5 to-[var(--accent-cyan)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--accent-purple)] mb-4 group-hover:text-[var(--accent-purple)] transition-colors">
                About Me
              </h3>
              <p className="text-[var(--text-color)]/60 group-hover:text-[var(--text-color)]/80 transition-colors">
                Learn more about my experience, skills, and educational background
              </p>
              <div className="mt-4 text-[var(--accent-purple)] group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
          </Link>

          <Link
            to="/writeups"
            className="group relative p-8 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/10 to-[var(--accent-purple)]/10 border border-[var(--card-border)] hover:border-[var(--accent-cyan)]/40 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/5 to-[var(--accent-purple)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--accent-cyan)] mb-4 group-hover:text-[var(--accent-cyan)] transition-colors">
                Writeups
              </h3>
              <p className="text-[var(--text-color)]/60 group-hover:text-[var(--text-color)]/80 transition-colors">
                Security research, CTF solutions, and technical deep-dives
              </p>
              <div className="mt-4 text-[var(--accent-cyan)] group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
          </Link>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-[var(--card-border)]">
          <h2 className="text-xl font-semibold text-[var(--text-color)]/80 mb-4">Connect</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:goncalodfalmeida1@gmail.com"
              className="px-6 py-3 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/40 transition-all duration-300"
            >
              Email
            </a>
            <a
              href="https://github.com/Goncsal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] hover:bg-[var(--accent-purple)]/20 hover:border-[var(--accent-purple)]/40 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gon%C3%A7alo-almeida-90b6a1269/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/40 transition-all duration-300"
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
