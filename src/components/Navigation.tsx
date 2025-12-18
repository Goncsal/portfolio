import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/writeups', label: 'Writeups' },
  ]

  return (
    <nav className="border-b border-[var(--card-border)] bg-[var(--nav-bg)] backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
          >
            Portfolio
          </Link>

          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${location.pathname === item.path
                      ? 'text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10'
                      : 'text-[var(--text-color)]/70 hover:text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5'
                    }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] transform transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
