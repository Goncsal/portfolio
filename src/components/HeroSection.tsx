const HeroSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navItems = [
        { id: 'about', label: 'About Me' },
        { id: 'projects', label: 'Projects' },
        { id: 'writeups', label: 'Writeups' },
        { id: 'contact', label: 'Contact' },
    ]

    return (
        <section
            id="hero"
            className="h-screen flex flex-col items-center justify-center px-6 relative"
            style={{
                backgroundColor: 'var(--bg-primary)',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always'
            }}
        >
            <div className="text-center max-w-3xl mx-auto">
                {/* Name */}
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Gonçalo Almeida
                </h1>

                {/* Tagline */}
                <p
                    className="text-lg md:text-xl font-light mb-16"
                    style={{ color: 'var(--accent-primary)' }}
                >
                    Software Engineering & Cybersecurity Enthusiast
                </p>

                {/* Vertical Navigation */}
                <nav className="flex flex-col items-center gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-base font-medium px-6 py-2 rounded-full border transition-all duration-300 hover:scale-105"
                            style={{
                                color: 'var(--text-secondary)',
                                borderColor: 'var(--border-color)',
                                backgroundColor: 'transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-primary)'
                                e.currentTarget.style.color = 'var(--accent-primary)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-color)'
                                e.currentTarget.style.color = 'var(--text-secondary)'
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Scroll to About section"
            >
                <span className="text-sm mb-2">Scroll</span>
                <svg
                    className="w-5 h-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>
        </section>
    )
}

export default HeroSection
