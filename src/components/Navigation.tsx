import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'writeups', label: 'Writeups' },
  ]

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = ['hero', 'about', 'projects', 'writeups']
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              GA
            </button>
          ) : (
            <Link
              to="/"
              className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              GA
            </Link>
          )}

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {isHomePage && (
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${activeSection === item.id
                        ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                        : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {!isHomePage && (
              <Link
                to="/"
                className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                ← Back
              </Link>
            )}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
