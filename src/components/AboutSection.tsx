const AboutSection = () => {
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
                'Created custom Python scripts and applications to automate internal workflows.',
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
        },
        {
            title: 'Digital Media Manager',
            company: 'VFClinic (Freelance)',
            period: 'Mar 2023 – Aug 2023',
            location: 'Ponta Delgada, Portugal (Hybrid)',
            highlights: [
                'Managed digital media strategies and online presence.',
                'Video editing, photography, and production for digital content.',
                'SEO optimization and Adobe Photoshop for asset creation.'
            ]
        },
        {
            title: 'Office Assistant',
            company: 'Maximplante (Part-time)',
            period: 'Aug 2022 – Mar 2023',
            location: 'Ponta Delgada, Portugal',
            highlights: [
                'Managed social media and digital marketing initiatives.',
                'Technical support and maintenance for computer hardware.',
                'Assisted with accounting and administrative tasks.'
            ]
        }
    ]

    const skills = {
        frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'WordPress'],
        backend: ['FastAPI', 'Flask', 'Spring Boot', 'Python', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Keycloak'],
        devops: ['Docker', 'Nginx', 'CI/CD', 'SonarCloud', 'Sentry', 'Flyway'],
        digital: ['SEO & Google Analytics', 'DaVinci Resolve', 'Photoshop']
    }

    return (
        <section
            id="about"
            className="h-screen flex flex-col"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always'
            }}
        >
            {/* Title at top */}
            <div className="pt-24 pb-6 w-full text-center px-8 md:px-16 lg:px-24 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    About Me
                </h2>
                <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            </div>

            {/* Content in remaining space */}
            <div className="flex-1 flex flex-col justify-center w-full overflow-y-auto min-h-0 items-center">
                <div className="max-w-6xl mx-auto w-full py-8 px-8 md:px-16 lg:px-24">
                    {/* Bio */}
                    <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto text-center" style={{ color: 'var(--text-secondary)' }}>
                        Computer Engineering undergraduate (3rd year) at Universidade de Aveiro with a
                        strong focus on fullstack development and digital transformation. Experienced in
                        building production-grade applications, automating workflows, and managing digital
                        presence for businesses.
                    </p>

                    {/* Main Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Experience Column */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Experience
                            </h3>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="border-l-2 pl-5 transition-colors"
                                        style={{ borderColor: 'var(--border-color)' }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                                            <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                                {exp.title}
                                            </h4>
                                            <span className="text-xs whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                                            {exp.company}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills & Education Column */}
                        <div className="space-y-10">
                            {/* Skills */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                                    Technical Skills
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>Frontend</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.frontend.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 text-xs rounded-full border"
                                                    style={{
                                                        backgroundColor: 'var(--bg-primary)',
                                                        borderColor: 'var(--border-color)',
                                                        color: 'var(--text-primary)'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>Backend</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.backend.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 text-xs rounded-full border"
                                                    style={{
                                                        backgroundColor: 'var(--bg-primary)',
                                                        borderColor: 'var(--border-color)',
                                                        color: 'var(--text-primary)'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>DevOps</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.devops.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 text-xs rounded-full border"
                                                    style={{
                                                        backgroundColor: 'var(--bg-primary)',
                                                        borderColor: 'var(--border-color)',
                                                        color: 'var(--text-primary)'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                                    Education
                                </h3>
                                <div
                                    className="border-l-2 pl-5"
                                    style={{ borderColor: 'var(--border-color)' }}
                                >
                                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                        Licenciatura em Engenharia Informática
                                    </h4>
                                    <p className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                                        Universidade de Aveiro
                                    </p>
                                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                        2022 – Present | 3rd Year
                                    </p>
                                </div>
                            </div>

                            {/* Certifications & Languages */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                                        Certifications
                                    </h3>
                                    <ul className="space-y-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                                        <li>• Cybersecurity Certificate</li>
                                        <li>• TryHackMe PT1 <span style={{ color: 'var(--accent-primary)' }}>(In Progress)</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                                        Languages
                                    </h3>
                                    <ul className="space-y-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                                        <li>• Portuguese – Native</li>
                                        <li>• English – Professional</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
