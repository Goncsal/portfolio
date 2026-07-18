import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWriteupFiles, type WriteupMetadata } from '../utils/markdown'

const WriteupsSection = () => {
    const [writeups, setWriteups] = useState<WriteupMetadata[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getWriteupFiles()
            .then(setWriteups)
            .catch((err) => console.error('Error loading writeups:', err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section id="writeups" className="py-24 md:py-32 px-6 md:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="max-w-5xl mx-auto w-full">
                <p className="eyebrow mb-3">03 — Writeups</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
                    Security notes
                </h2>
                <p className="text-lg leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--text-secondary)' }}>
                    Notes and progress from CTFs and pentesting practice — mostly picoCTF and TryHackMe.
                </p>

                {loading ? (
                    <div className="flex py-16">
                        <div
                            className="w-7 h-7 border-2 rounded-full animate-spin"
                            style={{ borderColor: 'var(--border-color)', borderTopColor: 'var(--accent-primary)' }}
                        />
                    </div>
                ) : writeups.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)' }}>No writeups yet.</p>
                ) : (
                    <div className="border-t" style={{ borderColor: 'var(--border-color)' }}>
                        {writeups.map((writeup, index) => (
                            <Link
                                key={writeup.slug}
                                to={`/writeup/${writeup.slug}`}
                                className="group flex items-center gap-5 md:gap-8 py-6 border-b transition-colors"
                                style={{ borderColor: 'var(--border-color)' }}
                            >
                                <span className="font-mono text-sm w-8 shrink-0" style={{ color: 'var(--text-secondary)' }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="font-semibold text-lg tracking-tight transition-colors group-hover:text-[var(--accent-primary)]"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {writeup.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed line-clamp-1 mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                        {writeup.description}
                                    </p>
                                </div>
                                <span
                                    className="shrink-0 transition-transform group-hover:translate-x-1"
                                    style={{ color: 'var(--accent-primary)' }}
                                    aria-hidden
                                >
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default WriteupsSection
