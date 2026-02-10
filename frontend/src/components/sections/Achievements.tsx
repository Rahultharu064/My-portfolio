import React from 'react';

const Achievements: React.FC = () => {
    const stats = [
        { value: "08+", label: "Years Experience" },
        { value: "120+", label: "Success Projects" },
        { value: "45+", label: "Active Clients" },
        { value: "12", label: "Global Awards" }
    ];

    return (
        <section className="achievements" style={{ padding: '6rem 0', background: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '4rem',
                    borderTop: '1px solid var(--color-border)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '4rem 0'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{ textAlign: 'left' }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 800,
                                color: 'var(--color-primary)',
                                fontFamily: 'var(--font-mono)',
                                letterSpacing: '-0.05em'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--color-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: 600,
                                marginTop: '0.5rem'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
