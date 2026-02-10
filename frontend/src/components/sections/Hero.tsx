import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="section-tag initial-fade-in" style={{ animationDelay: '0.2s' }}>
                        Transforming ideas into digital reality
                    </span>

                    <h1 className="hero-title text-gradient initial-fade-in" style={{ animationDelay: '0.4s' }}>
                        Crafting Digital <br />
                        Experiences That <br />
                        Define <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>Excellence</span>
                    </h1>

                    <p className="hero-description initial-fade-in" style={{ animationDelay: '0.6s' }}>
                        I’m a Senior Software Engineer focused on building sophisticated,
                        high-performance web applications that merge technical rigor with
                        exceptional design.
                    </p>

                    <div className="hero-actions initial-fade-in" style={{ animationDelay: '0.8s', display: 'flex', gap: '1.5rem' }}>
                        <a href="#projects" className="btn btn-primary">
                            Explore Case Studies
                        </a>
                        <a href="#about" className="btn btn-outline">
                            Learn my process
                        </a>
                    </div>
                </div>
            </div>

            {/* Visual Decor */}
            <div className="hero-scroll-indicator initial-fade-in" style={{
                position: 'absolute',
                bottom: '3rem',
                left: '5vw',
                animationDelay: '1.5s',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--color-secondary)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--color-secondary)' }}></div>
                Scroll to discover
            </div>
        </section>
    );
};

export default Hero;
