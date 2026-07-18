import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProjectFiles, type ProjectMetadata } from '../utils/markdown'

const Thumb = ({ project }: { project: ProjectMetadata }) => {
    const [broken, setBroken] = useState(false)

    if (broken || !project.thumbnail) {
        return (
            <div
                className="w-full h-full flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-elevated))',
                    color: 'var(--accent-primary)',
                }}
            >
                <span className="font-mono text-3xl font-bold opacity-40">
                    {project.title.slice(0, 2).toUpperCase()}
                </span>
            </div>
        )
    }

    return (
        <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            onError={() => setBroken(true)}
        />
    )
}

const TechRow = ({ tech }: { tech: string[] }) => (
    <div className="flex flex-wrap gap-1.5 mt-4">
        {tech.slice(0, 4).map((t) => (
            <span
                key={t}
                className="font-mono text-[0.68rem] px-2 py-0.5 rounded border"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
                {t}
            </span>
        ))}
    </div>
)

const ProjectsSection = () => {
    const [projects, setProjects] = useState<ProjectMetadata[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProjectFiles()
            .then(setProjects)
            .catch((err) => console.error('Error loading projects:', err))
            .finally(() => setLoading(false))
    }, [])

    const [featured, ...rest] = projects

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="max-w-5xl mx-auto w-full">
                <p className="eyebrow mb-3">02 — Work</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
                    Selected projects
                </h2>
                <p className="text-lg leading-relaxed max-w-2xl mb-14" style={{ color: 'var(--text-secondary)' }}>
                    A mix of coursework, side projects and client work — from a financial modelling
                    engine to secure file transfer. Click any of them for the full story.
                </p>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div
                            className="w-7 h-7 border-2 rounded-full animate-spin"
                            style={{ borderColor: 'var(--border-color)', borderTopColor: 'var(--accent-primary)' }}
                        />
                    </div>
                ) : projects.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)' }}>No projects yet.</p>
                ) : (
                    <div className="grid sm:grid-cols-2 gap-5">
                        {/* Featured */}
                        {featured && (
                            <Link
                                to={`/project/${featured.slug}`}
                                className="group sm:col-span-2 grid md:grid-cols-2 rounded-2xl overflow-hidden border hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)' }}
                            >
                                <div className="aspect-video md:aspect-auto md:h-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                    <Thumb project={featured} />
                                </div>
                                <div className="p-7 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="eyebrow" style={{ color: 'var(--accent-primary)' }}>Featured</span>
                                        {featured.year && (
                                            <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{featured.year}</span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
                                        {featured.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                                        {featured.summary}
                                    </p>
                                    <TechRow tech={featured.tech} />
                                </div>
                            </Link>
                        )}

                        {/* Rest */}
                        {rest.map((project) => (
                            <Link
                                key={project.slug}
                                to={`/project/${project.slug}`}
                                className="group flex flex-col rounded-2xl overflow-hidden border hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)' }}
                            >
                                <div className="aspect-video overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                    <Thumb project={project} />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-baseline justify-between gap-3 mb-2">
                                        <h3
                                            className="font-semibold text-lg tracking-tight transition-colors group-hover:text-[var(--accent-primary)]"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {project.title}
                                        </h3>
                                        {project.year && (
                                            <span className="font-mono text-[0.7rem] whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                                                {project.year}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                                        {project.summary}
                                    </p>
                                    <TechRow tech={project.tech} />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsSection
