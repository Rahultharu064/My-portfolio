import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="gradient-orb gradient-orb-1"></div>
                <div className="gradient-orb gradient-orb-2"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-eyebrow animate-fade-in-up">Software Engineer</span>
                    <h1 className="hero-title">
                        <span className="hero-title-line">Building</span>
                        <span className="hero-title-line">Exceptional</span>
                        <span className="hero-title-line">Digital Solutions</span>
                    </h1>
                    <p className="hero-description animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        Full-stack developer specializing in building beautiful,
                        functional, and scalable web applications that users love.
                    </p>
                    <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                        <a href="#work" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>

                <div className="hero-image animate-fade-in" style={{ animationDelay: '1.4s' }}>
                    <div className="hero-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Hero Profile" />
                        <div className="hero-image-decoration"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator animate-fade-in" style={{ animationDelay: '2s' }}>
                <span>Scroll to explore</span>
                <svg className="scroll-arrow" viewBox="0 0 24 24">
                    <path d="M12 16L6 10h12l-6 6z" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
