import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'writeups', label: 'Writeups' },
  { id: 'contact', label: 'Contact' },
]

const Navigation = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const sections = ['hero', 'about', 'work', 'writeups', 'contact']
      const marker = window.innerHeight * 0.35
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= marker) current = id
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled || !isHomePage ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled || !isHomePage ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${isScrolled || !isHomePage ? 'var(--border-color)' : 'transparent'}`,
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('hero')}
              className="font-mono text-sm font-semibold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              gonçalo<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </button>
          ) : (
            <Link
              to="/"
              className="font-mono text-sm font-semibold tracking-tight inline-flex items-center gap-2"
              style={{ color: 'var(--text-primary)' }}
            >
              <span aria-hidden>←</span> back
            </Link>
          )}

          <div className="flex items-center gap-1 md:gap-2">
            {isHomePage &&
              navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hidden sm:inline-block text-sm px-3 py-1.5 rounded-md font-medium"
                  style={{
                    color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)' }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)'
                  }}
                >
                  {item.label}
                </button>
              ))}
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
