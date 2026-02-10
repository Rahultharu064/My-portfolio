import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact" style={{ padding: '10rem 0' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <span className="section-tag">Connection</span>
                    <h2 className="hero-title text-gradient" style={{ fontSize: 'var(--text-3xl)', marginBottom: '3rem' }}>
                        Ready to Start a <br /> New Conversation?
                    </h2>

                    <div className="card" style={{ textAlign: 'left', padding: '4rem' }}>
                        <form style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--color-border)',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--color-border)',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--color-border)',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'none'
                                    }}
                                />
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div style={{ marginTop: '4rem', color: 'var(--color-secondary)', fontSize: '0.9rem' }}>
                        Or email me directly at <a href="mailto:hello@johndoe.com" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>hello@johndoe.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
