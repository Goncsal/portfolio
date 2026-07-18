const experiences = [
    {
        title: 'Cybersecurity Intern — Defense Sector',
        company: 'Trisolaris',
        period: 'Jul 2026',
        points: [
            'Applied offensive and defensive security to unmanned systems — hardening embedded platforms and the communication links between drones and base control stations.',
            'Analysed and mitigated threats to autonomous architectures, including GPS spoofing, signal jamming and unauthorised data modification.',
            'Contributed to mission-critical risk analysis, vulnerability identification and custom security monitoring workflows.',
        ],
    },
    {
        title: 'Web & Python Developer',
        company: 'Casa Barão / C-Natural',
        period: 'Apr 2023 – Dec 2025',
        points: [
            'Automated critical internal workflows with modular Python scripts and relational database integrations.',
            'Maintained and optimised commercial platforms on WordPress, cPanel and custom backend extensions.',
        ],
    },
    {
        title: 'Digital Consultant (Intern)',
        company: 'JOMAFREITAS',
        period: 'Jul 2025 – Aug 2025',
        points: [
            'Consulted on IT infrastructure modernisation, DNS routing/management and Human Resources Information Systems (SIRH).',
        ],
    },
    {
        title: 'Freelance Digital Strategist / Manager',
        company: 'Various Clients',
        period: '2022 – 2025',
        points: [
            'Provided on-demand IT support, infrastructure scaling and web management for small-to-medium businesses including Mobilar, Maximplante and VFClinic.',
        ],
    },
]

const skillGroups = [
    { label: 'Languages', items: ['Python', 'Java', 'TypeScript', 'Kotlin', 'JavaScript', 'Bash'] },
    { label: 'Frameworks', items: ['Django', 'FastAPI', 'Flask', 'React 19', 'Spring Boot', 'Flutter'] },
    { label: 'Data', items: ['PostgreSQL', 'MS SQL', 'MongoDB', 'Redis', 'Cassandra', 'Neo4j'] },
    { label: 'Security', items: ['E2EE', 'RSA/JWT', 'TLS 1.3', 'RBAC / MLS', 'Burp Suite', 'Metasploit', 'Bloodhound', 'SqlMap'] },
    { label: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'SonarCloud', 'Nginx', 'Linux', 'Homelab'] },
]

const Tag = ({ children }: { children: React.ReactNode }) => (
    <span
        className="px-2.5 py-1 text-xs rounded-md border font-mono"
        style={{
            backgroundColor: 'var(--bg-elevated)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
        }}
    >
        {children}
    </span>
)

const AboutSection = () => {
    return (
        <section id="about" className="py-24 md:py-32 px-6 md:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="max-w-5xl mx-auto w-full">
                {/* Header */}
                <p className="eyebrow mb-3">01 — About</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                    Background
                </h2>
                <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
                    Software Engineering graduate who leans fullstack but keeps one foot in security.
                    I like problems where the hard part is the modelling — turning something messy and
                    real into a system that holds up — and I care about shipping things that people
                    actually use, not demos.
                </p>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16">
                    {/* Experience */}
                    <div>
                        <h3 className="font-mono text-sm uppercase tracking-widest mb-8" style={{ color: 'var(--text-secondary)' }}>
                            Experience
                        </h3>
                        <div className="space-y-9">
                            {experiences.map((exp) => (
                                <div key={exp.title} className="relative pl-6">
                                    <span
                                        className="absolute left-0 top-2 w-2 h-2 rounded-full"
                                        style={{ backgroundColor: 'var(--accent-primary)' }}
                                    />
                                    <span
                                        className="absolute left-[3.5px] top-4 bottom-[-2.25rem] w-px"
                                        style={{ backgroundColor: 'var(--border-color)' }}
                                    />
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                        <h4 className="font-semibold text-[0.98rem]" style={{ color: 'var(--text-primary)' }}>
                                            {exp.title}
                                        </h4>
                                        <span className="font-mono text-xs whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium mb-2.5" style={{ color: 'var(--accent-primary)' }}>
                                        {exp.company}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {exp.points.map((p, i) => (
                                            <li key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-12">
                        {/* Skills */}
                        <div>
                            <h3 className="font-mono text-sm uppercase tracking-widest mb-6" style={{ color: 'var(--text-secondary)' }}>
                                Toolbox
                            </h3>
                            <div className="space-y-4">
                                {skillGroups.map((group) => (
                                    <div key={group.label} className="grid grid-cols-[5rem_1fr] gap-3 items-start">
                                        <span className="text-xs font-medium pt-1.5" style={{ color: 'var(--text-primary)' }}>
                                            {group.label}
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {group.items.map((item) => (
                                                <Tag key={item}>{item}</Tag>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="font-mono text-sm uppercase tracking-widest mb-6" style={{ color: 'var(--text-secondary)' }}>
                                Education
                            </h3>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    BSc in Software Engineering
                                </h4>
                                <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                                    2023 – 2026
                                </span>
                            </div>
                            <p className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                                University of Aveiro
                            </p>
                        </div>

                        {/* Certifications + Languages */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div>
                                <h3 className="font-mono text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
                                    Certs & More
                                </h3>
                                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    <li>TryHackMe Jr Penetration Tester (PT1)</li>
                                    <li>Cybersecurity &amp; Media Education</li>
                                    <li>AWS DevOps Workshop — Mindera</li>
                                    <li>UAC Collaborator · CTF competitor</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-mono text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
                                    Languages
                                </h3>
                                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    <li>Portuguese — Native</li>
                                    <li>English — Proficient (C1)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
