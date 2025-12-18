const About = () => {
    const experiences = [
        {
            title: 'Social Media Manager & Web Developer',
            company: 'Cnatural (Freelance)',
            period: 'Mar 2023 – Present',
            location: 'Ponta Delgada, Portugal',
            highlights: [
                'Developed and maintain the official website: c-natural.pt using WordPress and cPanel.',
                'Managing digital marketing strategy, online advertising, and social media presence.',
                'Technical consulting in IT and database management.'
            ]
        },
        {
            title: 'Web and Python Developer',
            company: 'CasaBarão - Alojamento (Freelance)',
            period: 'Apr 2023 – Nov 2025',
            location: 'Remote / Ponta Delgada',
            highlights: [
                'Developed the website casabaraodaslaranjeiras.pt.',
                'Created custom Python scripts and applications to automate internal workflows and increase operational efficiency.',
                'Implemented SEO, Google Analytics, and managed Google Ads campaigns.'
            ]
        },
        {
            title: 'Digital Consultant (Intern)',
            company: 'JOMAFREITAS - Hotelaria e Restauração',
            period: 'Jul 2025 – Aug 2025',
            location: 'Ponta Delgada',
            highlights: [
                'Consulting on IT infrastructure, DNS management, and SEO optimization.',
                'Support in Information Systems for Human Resources (SIRH).'
            ]
        },
        {
            title: 'Social Media Marketing Manager',
            company: 'Mobilar (Freelance)',
            period: 'Mar 2023 – Sep 2024',
            location: 'Ponta Delgada',
            highlights: [
                'Managed online advertising and social media strategies.',
                'Video editing and content creation using DaVinci Resolve.'
            ]
        }
    ]

    const skills = {
        frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'WordPress'],
        backend: ['FastAPI', 'Flask', 'Spring Boot', 'Python (Automation/Scripts)', 'SQL Server Management Studio', 'PostgreSQL', 'MongoDB', 'Keycloak (Auth)', 'IdP Integration'],
        devops: ['Docker', 'Deployment of Dockerized Applications', 'Nginx (Reverse Proxy)', 'CI/CD Pipelines', 'Observability', 'Database Migration', 'SonarCloud', 'Sentry', 'Flyway'],
        digital: ['SEO & Google Analytics', 'DaVinci Resolve', 'Photoshop']
    }

    return (
        <div className="max-w-4xl mx-auto space-y-16 py-12">
            {/* Profile Section */}
            <section className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
                    About Me
                </h1>
                <p className="text-xl text-[var(--text-color)]/80 leading-relaxed">
                    Computer Engineering undergraduate (3rd year) with a strong focus on fullstack development and digital transformation.
                    Experienced in building production-grade applications, automating workflows, and managing digital presence for businesses.
                </p>
            </section>

            {/* Experience Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-[var(--text-color)] border-b border-[var(--card-border)] pb-4">Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-[var(--accent-cyan)]/30">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)]"></div>
                            <div className="space-y-2">
                                <div className="flex flex-wrap justify-between items-baseline gap-2">
                                    <h3 className="text-2xl font-semibold text-[var(--accent-cyan)]">{exp.title}</h3>
                                    <span className="text-[var(--text-color)]/50 font-mono text-sm">{exp.period}</span>
                                </div>
                                <div className="text-[var(--accent-purple)] font-medium">{exp.company}</div>
                                <div className="text-[var(--text-color)]/50 text-sm mb-4">{exp.location}</div>
                                <ul className="list-disc list-inside text-[var(--text-color)]/70 space-y-2 ml-2">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="leading-relaxed">{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-[var(--text-color)] border-b border-[var(--card-border)] pb-4">Technical Skills</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[var(--accent-cyan)]">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[var(--accent-purple)]">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[var(--accent-cyan)]">DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.devops.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[var(--accent-purple)]">Digital & Creative</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.digital.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Others */}
            <div className="grid md:grid-cols-2 gap-12">
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[var(--text-color)] border-b border-[var(--card-border)] pb-4">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-[var(--accent-cyan)]">Licenciatura em Engenharia Informática</h3>
                            <div className="text-[var(--accent-purple)]">Universidade de Aveiro</div>
                            <div className="text-[var(--text-color)]/50 text-sm">2022 – Present | Portugal</div>
                            <p className="text-[var(--text-color)]/70 mt-2">3rd Year Undergraduate</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[var(--text-color)] border-b border-[var(--card-border)] pb-4">Certifications & Languages</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[var(--accent-cyan)]">Certifications</h3>
                            <ul className="text-[var(--text-color)]/70 space-y-2">
                                <li>Cybersecurity and Media Education Certificate</li>
                                <li>TryHackMe Junior Penetration Tester (PT1) — <span className="text-[var(--accent-cyan)]/70 italic">In Progress</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[var(--accent-purple)]">Languages</h3>
                            <ul className="text-[var(--text-color)]/70 space-y-1">
                                <li>Portuguese – Native</li>
                                <li>English – Professional Proficiency</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
