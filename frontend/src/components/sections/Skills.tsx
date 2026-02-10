import React, { useEffect, useRef } from 'react';

interface Skill {
    name: string;
    level: string;
    percent: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Development",
        skills: [
            { name: "React / Next.js", level: "Expert", percent: "95%" },
            { name: "Node.js / TypeScript", level: "Advanced", percent: "90%" },
            { name: "Python / Django", level: "Intermediate", percent: "80%" },
        ]
    },
    {
        title: "Performance",
        skills: [
            { name: "Database Optimization", level: "Advanced", percent: "88%" },
            { name: "Cloud Infrastructure", level: "Advanced", percent: "85%" },
            { name: "CI/CD Pipelines", level: "Expert", percent: "92%" },
        ]
    }
];

const tools = ["Docker", "Kubernetes", "Redis", "PostgreSQL", "AWS", "Git", "Figma", "Jira"];

const Skills: React.FC = () => {
    const skillBarsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.2 });

        const currentSkillBars = skillBarsRef.current;
        currentSkillBars.forEach(bar => {
            if (bar) observer.observe(bar);
        });

        return () => {
            currentSkillBars.forEach(bar => {
                if (bar) observer.unobserve(bar);
            });
        };
    }, []);

    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <div className="section-header">
                    <span className="section-eyebrow">What I bring</span>
                    <h2 className="section-title">Skills & Expertise</h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-fill"
                                                style={{ '--skill-percent': skill.percent } as React.CSSProperties}
                                                ref={el => { if (el) skillBarsRef.current.push(el); }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="skill-category">
                        <h3 className="skill-category-title">Tools & Ecosystem</h3>
                        <div className="skill-tags">
                            {tools.map((tool, idx) => (
                                <span key={idx} className="skill-tag">{tool}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
