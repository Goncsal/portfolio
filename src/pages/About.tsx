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
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    About Me
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                    Computer Engineering undergraduate (3rd year) with a strong focus on fullstack development and digital transformation.
                    Experienced in building production-grade applications, automating workflows, and managing digital presence for businesses.
                </p>
            </section>

            {/* Experience Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-cyan-500/30">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            <div className="space-y-2">
                                <div className="flex flex-wrap justify-between items-baseline gap-2">
                                    <h3 className="text-2xl font-semibold text-cyan-400">{exp.title}</h3>
                                    <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
                                </div>
                                <div className="text-purple-400 font-medium">{exp.company}</div>
                                <div className="text-gray-500 text-sm mb-4">{exp.location}</div>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
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
                <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">Technical Skills</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-cyan-400">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-400">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-cyan-400">DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.devops.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-400">Digital & Creative</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.digital.map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
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
                    <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400">Licenciatura em Engenharia Informática</h3>
                            <div className="text-purple-400">Universidade de Aveiro</div>
                            <div className="text-gray-500 text-sm">2022 – Present | Portugal</div>
                            <p className="text-gray-400 mt-2">3rd Year Undergraduate</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4">Certifications & Languages</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-400">Certifications</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Cybersecurity and Media Education Certificate</li>
                                <li>TryHackMe Junior Penetration Tester (PT1) — <span className="text-cyan-300/70 italic">In Progress</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-purple-400">Languages</h3>
                            <ul className="text-gray-400 space-y-1">
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
