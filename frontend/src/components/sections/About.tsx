import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about" id="about" style={{ padding: '10rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '8vw', alignItems: 'center' }}>
                    <div className="about-visual initial-fade-in">
                        <div style={{
                            position: 'relative',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-diffuse)',
                            aspectRatio: '0.8'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1552061076-960271427d72?q=80&w=2070&auto=format&fit=crop"
                                alt="Professional Environment"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, transparent, var(--color-bg))',
                                opacity: 0.4
                            }}></div>
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="section-tag">About me</span>
                        <h2 className="section-title text-gradient" style={{ marginBottom: '2rem' }}>
                            Solving Complex Problems <br />
                            Through Strategic Design
                        </h2>

                        <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                            Based in San Francisco, I collaborate with founders and
                            forward-thinking companies to build digital products that
                            scale and inspire.
                        </p>

                        <p style={{ color: 'var(--color-secondary)', marginBottom: '3rem' }}>
                            My approach combines mathematical precision with a keen eye for
                            user behavior. I believe that every line of code should serve
                            a purpose and every pixel should contribute to the story.
                        </p>

                        <div className="about-values" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="card" style={{ padding: '1.5rem' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>01. Performance</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Optimization is not an afterthought; it's the core of my build process.</p>
                            </div>
                            <div className="card" style={{ padding: '1.5rem' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>02. Scalability</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Building systems that grow seamlessly alongside your user base.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
