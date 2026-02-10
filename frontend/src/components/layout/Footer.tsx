import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">JohnDoe</a>
                        <p className="footer-tagline">Building the future, one pixel at a time.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#work">Work</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Social</h4>
                            <ul>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Dribbble</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} John Doe. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
