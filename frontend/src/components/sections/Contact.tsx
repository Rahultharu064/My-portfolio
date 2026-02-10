import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="section-header">
                    <span className="section-eyebrow">Get in touch</span>
                    <h2 className="section-title">Let's Create Something Great</h2>
                    <p className="section-description">
                        Whether you have a specific project in mind or just want to chat
                        about tech, I'm always open to new opportunities.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-item">
                            <h4>Email</h4>
                            <a href="mailto:hello@johndoe.com">hello@johndoe.com</a>
                        </div>
                        <div className="info-item">
                            <h4>Social</h4>
                            <div className="social-links">
                                <a href="#">LinkedIn</a>
                                <a href="#">GitHub</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
