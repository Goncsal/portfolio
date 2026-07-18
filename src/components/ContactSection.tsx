const links = [
    {
        label: 'Email',
        value: 'goncalodfalmeida1@gmail.com',
        href: 'mailto:goncalodfalmeida1@gmail.com',
        path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        stroke: true,
    },
    {
        label: 'GitHub',
        value: 'github.com/Goncsal',
        href: 'https://github.com/Goncsal',
        path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
        label: 'LinkedIn',
        value: 'in/gonçalo-almeida',
        href: 'https://www.linkedin.com/in/gon%C3%A7alo-almeida-90b6a1269/',
        path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
]

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="max-w-5xl mx-auto w-full">
                <p className="eyebrow mb-3">04 — Contact</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl" style={{ color: 'var(--text-primary)' }}>
                    Working on something interesting?
                </h2>
                <p className="text-lg leading-relaxed max-w-xl mb-12" style={{ color: 'var(--text-secondary)' }}>
                    I'm open to graduate roles and freelance work — especially anything touching
                    backend, infrastructure or security. If that sounds like you, my inbox is the
                    fastest way to reach me.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target={l.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 p-4 rounded-xl border hover:-translate-y-0.5 transition-all"
                            style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)' }}
                        >
                            <span
                                className="p-2 rounded-lg shrink-0"
                                style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-primary)' }}
                            >
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill={l.stroke ? 'none' : 'currentColor'}
                                    stroke={l.stroke ? 'currentColor' : 'none'}
                                    strokeWidth={l.stroke ? 1.7 : undefined}
                                >
                                    <path
                                        strokeLinecap={l.stroke ? 'round' : undefined}
                                        strokeLinejoin={l.stroke ? 'round' : undefined}
                                        d={l.path}
                                    />
                                </svg>
                            </span>
                            <span className="min-w-0">
                                <span className="block text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                                    {l.label}
                                </span>
                                <span
                                    className="block text-sm font-medium truncate transition-colors group-hover:text-[var(--accent-primary)]"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {l.value}
                                </span>
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'var(--border-color)' }}>
                    <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                        © {new Date().getFullYear()} Gonçalo Almeida
                    </p>
                    <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                        Built with React · Vite · Tailwind
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
