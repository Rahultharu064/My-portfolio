import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ padding: '6rem 0', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.05em', marginBottom: '0.5rem' }}>JD.</div>
                        <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>© {currentYear} Handcrafted with precision.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" className="nav-link" style={{ fontSize: '0.9rem' }}>LinkedIn</a>
                        <a href="#" className="nav-link" style={{ fontSize: '0.9rem' }}>GitHub</a>
                        <a href="#" className="nav-link" style={{ fontSize: '0.9rem' }}>Twitter</a>
                        <a href="#" className="nav-link" style={{ fontSize: '0.9rem' }}>Dribbble</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
