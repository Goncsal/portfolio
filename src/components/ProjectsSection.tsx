import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProjectFiles, type ProjectMetadata } from '../utils/markdown'
import { useHorizontalScroll } from '../utils/useHorizontalScroll'

const ProjectsSection = () => {
    const [projects, setProjects] = useState<ProjectMetadata[]>([])
    const [loading, setLoading] = useState(true)
    const scrollRef = useHorizontalScroll()

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projectData = await getProjectFiles()
                setProjects(projectData)
            } catch (error) {
                console.error('Error loading projects:', error)
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    return (
        <section
            id="projects"
            className="h-screen flex flex-col"
            style={{
                backgroundColor: 'var(--bg-primary)',
                scrollSnapAlign: 'start'
            }}
        >
            {/* Title at top */}
            <div className="pt-24 pb-8 px-8 md:px-16 lg:px-24 text-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Projects
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
                    ) : projects.length === 0 ? (
                        <p className="text-center w-full" style={{ color: 'var(--text-secondary)' }}>
                            No projects yet.
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
                            {projects.map((project) => (
                                <Link
                                    key={project.slug}
                                    to={`/project/${project.slug}`}
                                    className="group flex-shrink-0 w-80 md:w-96 rounded-xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                    style={{
                                        backgroundColor: 'var(--bg-secondary)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <div
                                        className="aspect-video overflow-hidden"
                                        style={{ backgroundColor: 'var(--border-color)' }}
                                    >
                                        {project.thumbnail ? (
                                            <img
                                                src={project.thumbnail}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement
                                                    target.style.display = 'none'
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full flex items-center justify-center"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3
                                            className="font-semibold text-lg mb-2 group-hover:text-[var(--accent-primary)] transition-colors"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed line-clamp-2"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {project.summary}
                                        </p>
                                    </div>
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

export default ProjectsSection
