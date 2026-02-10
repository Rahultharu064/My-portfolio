import React from 'react';

interface ExperienceItem {
    company: string;
    position: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "TechNova Solutions",
        position: "Senior Full Stack Engineer",
        period: "2022 - Present",
        description: [
            "Led the development of a cloud-native microservices platform architecture.",
            "Improved system performance by 40% through efficient caching strategies.",
            "Mentored junior developers and established coding standards."
        ]
    },
    {
        company: "Creative Digital Agency",
        position: "Frontend Developer",
        period: "2020 - 2022",
        description: [
            "Built responsive and interactive web applications using React and GSAP.",
            "Collaborated with designers to implement pixel-perfect UIs.",
            "Reduced build times by 30% by optimizing Vite configurations."
        ]
    },
    {
        company: "Startup Hub",
        position: "Software Engineer Intern",
        period: "2019 - 2020",
        description: [
            "Assisted in developing the MVP for a fintech startup.",
            "Implemented secure authentication and payment integration APIs.",
            "Conducted unit testing and bug fixing for core modules."
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <div className="section-header">
                    <span className="section-eyebrow">My Journey</span>
                    <h2 className="section-title">Work Experience</h2>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.position}</h3>
                                    <span className="timeline-period">{exp.period}</span>
                                </div>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <ul className="timeline-description">
                                    {exp.description.map((desc, dIdx) => (
                                        <li key={dIdx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
