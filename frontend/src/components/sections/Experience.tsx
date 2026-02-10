import React from 'react';

const experiences = [
    {
        company: "TechNova Solutions",
        position: "Senior Systems Architect",
        period: "2022 - Present",
        description: "Orchestrating large-scale cloud migrations and developing high-performance microservices architecture for Fortune 500 clients."
    },
    {
        company: "Creative Digital Agency",
        position: "Lead Frontend Engineer",
        period: "2020 - 2022",
        description: "Defining the visual language and frontend engineering standards for award-winning digital experiences."
    },
    {
        company: "Startup Hub",
        position: "Software Engineer",
        period: "2018 - 2020",
        description: "Rapidly iterating on MVP product-market fit through robust full-stack development and agile methodologies."
    }
];

const Experience: React.FC = () => {
    return (
        <section className="experience" id="experience" style={{ padding: '8rem 0' }}>
            <div className="container">
                <header style={{ marginBottom: '5rem' }}>
                    <span className="section-tag">Trajectory</span>
                    <h2 className="section-title text-gradient">Professional Path</h2>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="card" style={{
                            display: 'grid',
                            gridTemplateColumns: '250px 1fr',
                            gap: '4rem',
                            alignItems: 'start',
                            padding: '3rem'
                        }}>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.85rem',
                                color: 'var(--color-accent)',
                                fontWeight: 600
                            }}>
                                {exp.period}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{exp.position}</h3>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-secondary)', fontWeight: 500 }}>{exp.company}</h4>
                                <p style={{ color: 'var(--color-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .experience .card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 2rem !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
