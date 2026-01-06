import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWriteupFiles, type WriteupMetadata } from '../utils/markdown'
import { useHorizontalScroll } from '../utils/useHorizontalScroll'

const WriteupsSection = () => {
    const [writeups, setWriteups] = useState<WriteupMetadata[]>([])
    const [loading, setLoading] = useState(true)
    const scrollRef = useHorizontalScroll()

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

    return (
        <section
            id="writeups"
            className="h-screen flex flex-col"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                scrollSnapAlign: 'start'
            }}
        >
            {/* Title at top */}
            <div className="pt-24 pb-8 px-8 md:px-16 lg:px-24 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Writeups
                </h2>
                <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            </div>

            {/* Full-width horizontal scroll carousel */}
            <div className="flex-1 flex flex-col justify-center w-full items-center">
                <div className="flex items-center w-full">
                    {loading ? (
                        <div className="flex items-center justify-center w-full">
                            <div
                                className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
                                style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
                            ></div>
                        </div>
                    ) : writeups.length === 0 ? (
                        <p className="text-center w-full" style={{ color: 'var(--text-secondary)' }}>
                            No writeups yet.
                        </p>
                    ) : (
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto px-8 md:px-16 lg:px-24 pb-4 w-full scrollbar-hide cursor-grab active:cursor-grabbing"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            {writeups.map((writeup, index) => (
                                <Link
                                    key={writeup.slug}
                                    to={`/writeup/${writeup.slug}`}
                                    className="group flex-shrink-0 w-80 md:w-96 rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    {/* Number */}
                                    <div
                                        className="text-5xl font-bold mb-4"
                                        style={{ color: 'var(--accent-primary)', opacity: 0.2 }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="font-semibold text-xl mb-3 group-hover:text-[var(--accent-primary)] transition-colors"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {writeup.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed mb-4 line-clamp-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {writeup.description}
                                    </p>

                                    {/* Read more */}
                                    <span
                                        className="inline-flex items-center text-sm font-medium transition-all"
                                        style={{ color: 'var(--accent-primary)' }}
                                    >
                                        Read writeup
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                            {/* Spacer at end for padding */}
                            <div className="flex-shrink-0 w-8 md:w-16 lg:w-24"></div>
                        </div>
                    )}
                </div>
            </div>

            {/* Hint */}
            <div className="pb-8 text-center">
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    ← Scroll horizontally to see more →
                </p>
            </div>
        </section>
    )
}

// Force rebuild
export default WriteupsSection
