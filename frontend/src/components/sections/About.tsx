import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="section-header">
                    <span className="section-eyebrow">Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-grid">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="About John Doe" />
                            <div className="about-image-decoration"></div>
                        </div>
                    </div>

                    <div className="about-content">
                        <p className="about-lead">
                            I'm a software engineer who believes great code is
                            invisible until it's needed.
                        </p>

                        <p className="about-text">
                            With over 5 years of experience in full-stack development, I specialize in creating digital
                            experiences that balance performance with elegant design. I love solving complex problems
                            and turning ideas into reality through clean, efficient code.
                        </p>

                        <p className="about-text">
                            My approach combines rigorous testing, user-centric design, and
                            modern technology stacks to deliver products that users
                            love and businesses value.
                        </p>

                        <blockquote className="about-quote">
                            "Simple is better than complex. Complex is better than complicated."
                        </blockquote>

                        <div className="about-values">
                            <div className="value-item">
                                <h4>Code Quality</h4>
                                <p>Clean, maintainable, and scalable architecture.</p>
                            </div>
                            <div className="value-item">
                                <h4>Performance</h4>
                                <p>Optimized for speed and efficiency at every level.</p>
                            </div>
                            <div className="value-item">
                                <h4>Innovation</h4>
                                <p>Always staying ahead with the latest technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
