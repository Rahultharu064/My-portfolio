import React from 'react';

interface Achievement {
    title: string;
    value: string;
    label: string;
}

const achievements: Achievement[] = [
    { title: "Projects Completed", value: "50+", label: "Successful Deliveries" },
    { title: "Years Experience", value: "5+", label: "Professional Growth" },
    { title: "Open Source", value: "20+", label: "Contributions" },
    { title: "Client Satisfaction", value: "100%", label: "Positive Feedback" }
];

const Achievements: React.FC = () => {
    return (
        <section className="achievements">
            <div className="achievements-container">
                <div className="achievements-grid">
                    {achievements.map((item, idx) => (
                        <div key={idx} className="achievement-item">
                            <span className="achievement-value">{item.value}</span>
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-label">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
