import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="top">
            <div className="hero-background">
                <div className="gradient-orb gradient-orb-1"></div>
                <div className="gradient-orb gradient-orb-2"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-eyebrow">Digital Craftsman</span>

                    <h1 className="hero-title">
                        <span className="hero-title-line">Building</span>
                        <span className="hero-title-line">Exceptional</span>
                        <span className="hero-title-line">Digital Products</span>
                    </h1>

                    <p className="hero-description">
                        Senior Software Engineer & Creative Developer crafting beautiful,
                        performant web experiences that balance business impact with
                        user delight.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View my work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get in touch
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop"
                            alt="Your Name - Senior Software Engineer"
                            loading="lazy"
                        />
                        <div className="hero-image-decoration"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <svg className="scroll-arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 16L6 10h12l-6 6z" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
