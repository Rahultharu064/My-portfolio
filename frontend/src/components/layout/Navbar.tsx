import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="/" className="navbar-logo">
                    <span style={{ fontWeight: 800, fontSize: '1.6rem', letterSpacing: '-0.05em', color: 'var(--color-primary)' }}>JD.</span>
                </a>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Case Studies</a>
                    <a href="#experience" className="nav-link">Journey</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
                        Get in touch
                    </a>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .mobile-toggle { display: block !important; }
          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            background: var(--color-bg);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(100%);
            transition: var(--transition-slow);
            z-index: -1;
          }
          .nav-links.active {
            transform: translateX(0);
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
