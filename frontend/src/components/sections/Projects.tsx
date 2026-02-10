import React from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Eco-Tech Monitoring System",
        description: "A real-time environmental monitoring platform using IoT and React. Features advanced data visualization and predictive analytics for sustainable farming.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["React", "IoT", "Data Viz", "Node.js"],
        link: "#",
        featured: true
    },
    {
        title: "FinTrack AI",
        description: "AI-driven financial tracking app with automatic expense categorization and budget forecasting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["TypeScript", "Next.js", "AI", "Prisma"],
        link: "#"
    },
    {
        title: "SocialSphere",
        description: "A decentralized social network platform focused on privacy and user data ownership.",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
        tags: ["React Native", "Web3", "Solidity"],
        link: "#"
    }
];

const Projects: React.FC = () => {
    const featured = projects.find(p => p.featured);
    const regular = projects.filter(p => !p.featured);

    return (
        <section className="projects" id="work">
            <div className="projects-container">
                <div className="section-header">
                    <span className="section-eyebrow">Selected work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">
                        A curated selection of projects that showcase my
                        approach to solving complex problems through technology.
                    </p>
                </div>

                {featured && (
                    <div className="project-featured">
                        <div className="project-featured-image">
                            <img src={featured.image} alt={featured.title} />
                        </div>
                        <div className="project-featured-content">
                            <span className="project-tag">Featured Project</span>
                            <h3 className="project-title">{featured.title}</h3>
                            <p className="project-description">{featured.description}</p>
                            <div className="project-meta">
                                {featured.tags.map((tag, idx) => (
                                    <span key={idx} className="meta-item">{tag}</span>
                                ))}
                            </div>
                            <a href={featured.link} className="project-link">View Project Details →</a>
                        </div>
                    </div>
                )}

                <div className="projects-grid">
                    {regular.map((project, idx) => (
                        <div key={idx} className="project-card">
                            <div className="project-card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                            <div className="project-card-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx}>{tag}</span>
                                    ))}
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
