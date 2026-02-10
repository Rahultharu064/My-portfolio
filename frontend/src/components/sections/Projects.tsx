import React from 'react';

const projects = [
    {
        title: "Fintech Revolution",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "AI Ecosystem",
        category: "Brand & Platform",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2032&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "EcoSmart Dashboard",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bbda4833effb?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Luxe E-commerce",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    }
];

const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects" style={{ padding: '8rem 0' }}>
            <div className="container">
                <header style={{ marginBottom: '6rem' }}>
                    <span className="section-tag">Case Studies</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <h2 className="section-title text-gradient" style={{ marginBottom: 0 }}>
                            Recent Work That <br />
                            Drives Impact
                        </h2>
                        <a href="#" className="btn btn-outline">Explore Archive</a>
                    </div>
                </header>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-img" />
                            <div className="project-overlay">
                                <span style={{
                                    color: 'var(--color-accent)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.8rem',
                                    marginBottom: '0.5rem'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{project.title}</h3>
                                <div style={{
                                    marginTop: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 600
                                }}>
                                    View Project
                                    <span style={{ fontSize: '1.2rem' }}>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
