# World-Class Animated Portfolio UI Design System

**Premium Design Documentation v1.0**

---

## Executive Summary

This document provides complete specifications for three production-ready, elite-level animated portfolio UI systems. Each theme is crafted to make an unforgettable first impression while maintaining accessibility, performance, and conversion optimization.

---

# THEME 1: MODERN PROFESSIONAL (REFINED TECH)

## Design Philosophy
A sophisticated evolution beyond typical SaaS aesthetics. Combines editorial magazine layouts with tech precision. Think: Bloomberg Businessweek meets Stripe's product design.

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --color-primary: #0A0E27;           /* Deep Navy - Trust & Authority */
  --color-primary-light: #1A2847;
  --color-accent: #FF6B35;            /* Coral Red - Energy & Action */
  --color-accent-hover: #FF8558;
  --color-secondary: #F7F7F2;         /* Warm White - Sophistication */
  
  /* Gradient System */
  --gradient-primary: linear-gradient(135deg, #0A0E27 0%, #1A2847 100%);
  --gradient-accent: linear-gradient(135deg, #FF6B35 0%, #FFB88C 100%);
  --gradient-subtle: linear-gradient(180deg, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0) 100%);
  
  /* Neutral Scale */
  --color-text-primary: #0A0E27;
  --color-text-secondary: #4A5568;
  --color-text-tertiary: #A0AEC0;
  --color-border: rgba(10, 14, 39, 0.1);
  --color-surface: #FFFFFF;
  --color-surface-elevated: #F7F7F2;
  
  /* Semantic Colors */
  --color-success: #059669;
  --color-warning: #F59E0B;
  --color-error: #DC2626;
  
  /* Interactive States */
  --color-hover-overlay: rgba(255, 107, 53, 0.05);
  --color-focus-ring: rgba(255, 107, 53, 0.4);
}
```

### Typography System
```css
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

:root {
  /* Font Families */
  --font-display: 'Playfair Display', serif;  /* Editorial elegance */
  --font-body: 'DM Sans', sans-serif;          /* Modern clarity */
  --font-mono: 'SF Mono', 'Monaco', monospace;
  
  /* Font Sizes - Fluid Typography */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.925rem + 0.375vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.375rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
  --text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
  --text-4xl: clamp(2.5rem, 1.75rem + 3.75vw, 5rem);
  --text-5xl: clamp(3rem, 2rem + 5vw, 7rem);
  
  /* Line Heights */
  --leading-tight: 1.1;
  --leading-snug: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  
  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
}
```

### Spacing System
```css
:root {
  /* Base Unit: 4px */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* Semantic Spacing */
  --section-padding-mobile: var(--space-16);
  --section-padding-tablet: var(--space-20);
  --section-padding-desktop: var(--space-32);
  
  --container-padding-mobile: var(--space-4);
  --container-padding-tablet: var(--space-8);
  --container-padding-desktop: var(--space-12);
}
```

### Shadows & Effects
```css
:root {
  /* Shadow System */
  --shadow-sm: 0 1px 2px rgba(10, 14, 39, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(10, 14, 39, 0.1), 
               0 2px 4px -1px rgba(10, 14, 39, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(10, 14, 39, 0.1), 
               0 4px 6px -2px rgba(10, 14, 39, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(10, 14, 39, 0.1), 
               0 10px 10px -5px rgba(10, 14, 39, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(10, 14, 39, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(10, 14, 39, 0.06);
  
  /* Glow Effects */
  --glow-accent: 0 0 20px rgba(255, 107, 53, 0.3);
  --glow-accent-strong: 0 0 40px rgba(255, 107, 53, 0.5);
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  
  /* Z-Index Hierarchy */
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-fixed: 1200;
  --z-modal-backdrop: 1300;
  --z-modal: 1400;
  --z-popover: 1500;
  --z-tooltip: 1600;
}
```

### Animation System
```css
:root {
  /* Timing Functions */
  --ease-in-cubic: cubic-bezier(0.32, 0, 0.67, 0);
  --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Durations */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
  
  /* Transition Presets */
  --transition-base: all var(--duration-base) var(--ease-out-cubic);
  --transition-spring: all var(--duration-slow) var(--ease-spring);
  --transition-colors: color var(--duration-base) var(--ease-out-cubic),
                       background-color var(--duration-base) var(--ease-out-cubic),
                       border-color var(--duration-base) var(--ease-out-cubic);
}
```

## 📐 Component Specifications

### Navigation Bar

**Visual Design:**
- Fixed position, glass morphism effect
- Backdrop blur with subtle border
- Logo left, navigation center, CTA right
- Smooth color transition on scroll
- Magnetic hover effect on nav items

**Structure:**
```html
<nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-logo">YourName</a>
    
    <ul class="navbar-menu">
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
    <a href="#contact" class="navbar-cta">Let's Talk</a>
    <button class="navbar-toggle" aria-label="Toggle menu">
      <span></span>
    </button>
  </div>
</nav>
```

**CSS:**
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  transition: var(--transition-base);
}

.navbar.scrolled {
  background: rgba(247, 247, 242, 0.95);
  box-shadow: var(--shadow-md);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-4) var(--container-padding-desktop);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: var(--tracking-tight);
  transition: var(--transition-colors);
}

.navbar-logo:hover {
  color: var(--color-accent);
}

.navbar-menu {
  display: flex;
  gap: var(--space-8);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  position: relative;
  padding: var(--space-2) 0;
  transition: var(--transition-colors);
}

.navbar-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--duration-base) var(--ease-out-cubic);
}

.navbar-menu a:hover {
  color: var(--color-primary);
}

.navbar-menu a:hover::after {
  width: 100%;
}

.navbar-cta {
  padding: var(--space-3) var(--space-6);
  background: var(--color-accent);
  color: white;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 700;
  text-decoration: none;
  border-radius: var(--radius-full);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  transition: var(--transition-spring);
  box-shadow: var(--shadow-md);
}

.navbar-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl), var(--glow-accent);
}

.navbar-cta:active {
  transform: translateY(0);
}

.navbar-toggle {
  display: none;
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--color-surface);
    padding: var(--space-6);
    box-shadow: var(--shadow-2xl);
    transform: translateY(-100%);
    opacity: 0;
    transition: transform var(--duration-slow) var(--ease-out-cubic),
                opacity var(--duration-slow) var(--ease-out-cubic);
  }
  
  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
  }
  
  .navbar-menu a {
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--color-border);
  }
  
  .navbar-toggle {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-2);
  }
  
  .navbar-toggle span {
    width: 24px;
    height: 2px;
    background: var(--color-primary);
    transition: var(--transition-base);
  }
  
  .navbar-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .navbar-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .navbar-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}
```

**Animations:**
```css
@keyframes navSlideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  animation: navSlideIn var(--duration-slow) var(--ease-out-cubic);
}
```

### Hero Section

**Visual Design:**
- Full viewport height
- Large editorial typography
- Asymmetric layout with image offset
- Animated gradient background
- Staggered text reveal
- Floating CTA with magnetic effect

**Structure:**
```html
<section class="hero">
  <div class="hero-background">
    <div class="gradient-orb gradient-orb-1"></div>
    <div class="gradient-orb gradient-orb-2"></div>
  </div>
  
  <div class="hero-container">
    <div class="hero-content">
      <span class="hero-eyebrow">Digital Craftsman</span>
      <h1 class="hero-title">
        <span class="hero-title-line">Building</span>
        <span class="hero-title-line">Exceptional</span>
        <span class="hero-title-line">Digital Products</span>
      </h1>
      <p class="hero-description">
        Senior Product Designer & Creative Developer crafting 
        beautiful, functional experiences that users love.
      </p>
      <div class="hero-actions">
        <a href="#work" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
    
    <div class="hero-image">
      <div class="hero-image-wrapper">
        <img src="profile.jpg" alt="Your Name - Product Designer">
        <div class="hero-image-decoration"></div>
      </div>
    </div>
  </div>
  
  <div class="hero-scroll-indicator">
    <span>Scroll to explore</span>
    <svg class="scroll-arrow" viewBox="0 0 24 24">
      <path d="M12 16L6 10h12l-6 6z"/>
    </svg>
  </div>
</section>
```

**CSS:**
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-surface);
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s ease-in-out infinite;
}

.gradient-orb-1 {
  width: 600px;
  height: 600px;
  background: var(--gradient-accent);
  top: -200px;
  right: -100px;
}

.gradient-orb-2 {
  width: 400px;
  height: 400px;
  background: var(--gradient-primary);
  bottom: -100px;
  left: -50px;
  animation-delay: -10s;
}

.hero-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--section-padding-desktop) var(--container-padding-desktop);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.hero-eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  margin-bottom: var(--space-6);
  opacity: 0;
  animation: fadeInUp 0.6s var(--ease-out-cubic) 0.2s forwards;
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 900;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-primary);
  margin-bottom: var(--space-6);
}

.hero-title-line {
  display: block;
  opacity: 0;
  transform: translateY(30px);
}

.hero-title-line:nth-child(1) {
  animation: fadeInUp 0.8s var(--ease-out-cubic) 0.4s forwards;
}

.hero-title-line:nth-child(2) {
  animation: fadeInUp 0.8s var(--ease-out-cubic) 0.6s forwards;
}

.hero-title-line:nth-child(3) {
  color: var(--color-accent);
  animation: fadeInUp 0.8s var(--ease-out-cubic) 0.8s forwards;
}

.hero-description {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  max-width: 540px;
  margin-bottom: var(--space-10);
  opacity: 0;
  animation: fadeInUp 0.8s var(--ease-out-cubic) 1s forwards;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 0.8s var(--ease-out-cubic) 1.2s forwards;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-8);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 700;
  text-decoration: none;
  border-radius: var(--radius-full);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  transition: var(--transition-spring);
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--color-accent);
  color: white;
  box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-2xl), var(--glow-accent-strong);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

.hero-image {
  opacity: 0;
  animation: fadeIn 1s var(--ease-out-cubic) 1.4s forwards;
}

.hero-image-wrapper {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.hero-image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-image-decoration {
  position: absolute;
  inset: -20px;
  background: var(--gradient-accent);
  opacity: 0.2;
  z-index: -1;
  border-radius: var(--radius-2xl);
  filter: blur(40px);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-tertiary);
  font-size: var(--text-sm);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  opacity: 0;
  animation: fadeIn 1s var(--ease-out-cubic) 2s forwards;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  fill: currentColor;
  animation: bounce 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-image {
    max-width: 500px;
    margin: 0 auto;
  }
}
```

**Keyframe Animations:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
```

### About Section

**Visual Design:**
- Two-column layout: photo + bio
- Pull quote highlight
- Skill tags with hover effects
- Timeline visualization

**Structure:**
```html
<section class="about" id="about">
  <div class="about-container">
    <div class="section-header">
      <span class="section-eyebrow">Get to know me</span>
      <h2 class="section-title">About Me</h2>
    </div>
    
    <div class="about-grid">
      <div class="about-image">
        <img src="about-photo.jpg" alt="About me">
      </div>
      
      <div class="about-content">
        <p class="about-lead">
          I'm a digital craftsman who believes great design is 
          invisible until it's needed.
        </p>
        
        <p class="about-text">
          With over 8 years of experience in product design and 
          frontend development, I specialize in creating digital 
          experiences that balance beauty with function.
        </p>
        
        <p class="about-text">
          My approach combines user research, visual design, and 
          technical implementation to deliver products that users 
          love and businesses value.
        </p>
        
        <blockquote class="about-quote">
          "Design is not just what it looks like and feels like. 
          Design is how it works."
        </blockquote>
        
        <div class="about-values">
          <div class="value-item">
            <h4>User-Centered</h4>
            <p>Every decision starts with the user</p>
          </div>
          <div class="value-item">
            <h4>Detail-Oriented</h4>
            <p>Pixel-perfect execution matters</p>
          </div>
          <div class="value-item">
            <h4>Collaborative</h4>
            <p>Best work happens together</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.about {
  padding: var(--section-padding-desktop) 0;
  background: var(--color-surface-elevated);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding-desktop);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  margin-bottom: var(--space-3);
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: var(--tracking-tight);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-16);
  align-items: start;
}

.about-image {
  position: sticky;
  top: 120px;
}

.about-image img {
  width: 100%;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
}

.about-lead {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  line-height: var(--leading-snug);
  color: var(--color-primary);
  margin-bottom: var(--space-8);
}

.about-text {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.about-quote {
  border-left: 4px solid var(--color-accent);
  padding-left: var(--space-6);
  margin: var(--space-10) 0;
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-style: italic;
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
}

.about-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-12);
}

.value-item {
  padding: var(--space-6);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: var(--transition-spring);
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

.value-item h4 {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.value-item p {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    position: relative;
    top: 0;
  }
  
  .about-values {
    grid-template-columns: 1fr;
  }
}
```

### Skills Section

**Visual Design:**
- Grid of skill cards
- Progress indicators
- Category organization
- Icon integration

**Structure:**
```html
<section class="skills">
  <div class="skills-container">
    <div class="section-header">
      <span class="section-eyebrow">What I bring</span>
      <h2 class="section-title">Skills & Expertise</h2>
    </div>
    
    <div class="skills-grid">
      <div class="skill-category">
        <h3 class="skill-category-title">Design</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">UI/UX Design</span>
              <span class="skill-level">Expert</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--skill-percent: 95%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Prototyping</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--skill-percent: 90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Design Systems</span>
              <span class="skill-level">Expert</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--skill-percent: 92%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="skill-category-title">Development</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">HTML/CSS</span>
              <span class="skill-level">Expert</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--skill-percent: 95%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">JavaScript/React</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--skill-percent: 85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Animation</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--skill-percent: 88%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="skill-category-title">Tools</h3>
        <div class="skill-tags">
          <span class="skill-tag">Figma</span>
          <span class="skill-tag">Adobe XD</span>
          <span class="skill-tag">Sketch</span>
          <span class="skill-tag">Framer</span>
          <span class="skill-tag">After Effects</span>
          <span class="skill-tag">VS Code</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.skills {
  padding: var(--section-padding-desktop) 0;
  background: var(--color-surface);
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding-desktop);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-12);
}

.skill-category {
  padding: var(--space-8);
  background: var(--color-surface-elevated);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
}

.skill-category-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-6);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text-primary);
}

.skill-level {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.skill-bar {
  height: 8px;
  background: rgba(10, 14, 39, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: var(--radius-full);
  width: var(--skill-percent);
  transform-origin: left;
  animation: fillBar 1.5s var(--ease-out-cubic) forwards;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.skill-tag {
  padding: var(--space-2) var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-primary);
  transition: var(--transition-spring);
  cursor: default;
}

.skill-tag:hover {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

@keyframes fillBar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
```

### Projects Showcase

**Visual Design:**
- Featured project hero card
- Grid of project cards
- Hover reveal effects
- Category filters
- Case study links

**Structure:**
```html
<section class="projects" id="work">
  <div class="projects-container">
    <div class="section-header">
      <span class="section-eyebrow">Selected work</span>
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-description">
        A curated selection of projects that showcase my 
        approach to design and development.
      </p>
    </div>
    
    <div class="project-featured">
      <div class="project-featured-image">
        <img src="project-1.jpg" alt="Project name">
      </div>
      <div class="project-featured-content">
        <span class="project-tag">Featured Case Study</span>
        <h3 class="project-title">E-Commerce Platform Redesign</h3>
        <p class="project-description">
          Complete redesign of a marketplace platform serving 
          2M+ users, increasing conversion by 45% and improving 
          user satisfaction scores by 60%.
        </p>
        <div class="project-meta">
          <span class="meta-item">UI/UX Design</span>
          <span class="meta-item">React</span>
          <span class="meta-item">Design System</span>
        </div>
        <a href="#" class="project-link">View Case Study →</a>
      </div>
    </div>
    
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-card-image">
          <img src="project-2.jpg" alt="Project name">
          <div class="project-overlay">
            <a href="#" class="btn btn-primary">View Project</a>
          </div>
        </div>
        <div class="project-card-content">
          <h4>SaaS Dashboard</h4>
          <p>Analytics platform with real-time data visualization</p>
          <div class="project-tags">
            <span>UI Design</span>
            <span>Data Viz</span>
          </div>
        </div>
      </div>
      
      <!-- More project cards... -->
    </div>
  </div>
</section>
```

**CSS:**
```css
.projects {
  padding: var(--section-padding-desktop) 0;
  background: var(--color-surface);
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--container-padding-desktop);
}

.section-description {
  max-width: 600px;
  margin: var(--space-4) auto 0;
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  text-align: center;
}

.project-featured {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-16);
  align-items: center;
  margin: var(--space-20) 0;
  padding: var(--space-12);
  background: var(--color-surface-elevated);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
}

.project-featured-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.project-featured-image img {
  width: 100%;
  transition: transform 0.6s var(--ease-out-cubic);
}

.project-featured:hover .project-featured-image img {
  transform: scale(1.05);
}

.project-tag {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background: rgba(255, 107, 53, 0.1);
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.project-title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.project-description {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.meta-item {
  padding: var(--space-2) var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-accent);
  text-decoration: none;
  transition: var(--transition-base);
}

.project-link:hover {
  gap: var(--space-4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-16);
}

.project-card {
  background: var(--color-surface-elevated);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition-spring);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-accent);
}

.project-card-image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out-cubic);
}

.project-card:hover .project-card-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 14, 39, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s var(--ease-out-cubic);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card-content {
  padding: var(--space-6);
}

.project-card-content h4 {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.project-card-content p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-tags span {
  padding: var(--space-1) var(--space-3);
  background: rgba(255, 107, 53, 0.1);
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  border-radius: var(--radius-md);
}

@media (max-width: 1024px) {
  .project-featured {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

---

# THEME 2: CYBERPUNK FUTURISTIC

## Design Philosophy
High-tech meets high-energy. Neon-lit interfaces with glitch effects, glassmorphism, and kinetic typography. Inspired by Blade Runner aesthetics and modern gaming UI.

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors - Dark Base */
  --color-bg-primary: #0a0e1a;
  --color-bg-secondary: #141824;
  --color-bg-tertiary: #1e2330;
  
  /* Neon Accents */
  --color-neon-cyan: #00f0ff;
  --color-neon-magenta: #ff00aa;
  --color-neon-yellow: #ffeb3b;
  --color-neon-green: #39ff14;
  
  /* Gradients */
  --gradient-cyber: linear-gradient(135deg, #00f0ff 0%, #ff00aa 100%);
  --gradient-holographic: linear-gradient(135deg, #00f0ff 0%, #ff00aa 50%, #ffeb3b 100%);
  
  /* Text Colors */
  --color-text-primary: #ffffff;
  --color-text-secondary: #b8c5db;
  --color-text-tertiary: #6b7a99;
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(20px);
  
  /* Glow Effects */
  --glow-cyan: 0 0 10px rgba(0, 240, 255, 0.5), 
               0 0 20px rgba(0, 240, 255, 0.3),
               0 0 30px rgba(0, 240, 255, 0.1);
  --glow-magenta: 0 0 10px rgba(255, 0, 170, 0.5),
                  0 0 20px rgba(255, 0, 170, 0.3),
                  0 0 30px rgba(255, 0, 170, 0.1);
  --glow-strong: 0 0 20px rgba(0, 240, 255, 0.8),
                 0 0 40px rgba(0, 240, 255, 0.6),
                 0 0 60px rgba(0, 240, 255, 0.4);
}
```

### Typography System
```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap');

:root {
  --font-display: 'Orbitron', sans-serif;
  --font-body: 'Rajdhani', sans-serif;
  --font-mono: 'Courier New', monospace;
  
  /* Same fluid scale as Theme 1 */
}
```

### Component Specifications

**Cyber Navigation:**
```css
.navbar-cyber {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 240, 255, 0.1);
}

.navbar-cyber::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-cyber);
  opacity: 0.5;
}

.navbar-logo-cyber {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 900;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: var(--glow-cyan);
  letter-spacing: var(--tracking-wider);
}

.nav-link-cyber {
  position: relative;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  padding: var(--space-3);
  transition: var(--transition-base);
}

.nav-link-cyber::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-cyber);
  opacity: 0;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: all 0.4s var(--ease-out-cubic);
}

.nav-link-cyber:hover::before {
  opacity: 0.1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.nav-link-cyber:hover {
  color: var(--color-neon-cyan);
  text-shadow: var(--glow-cyan);
}
```

**Cyber Hero Section:**
```css
.hero-cyber {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--color-bg-primary);
  overflow: hidden;
}

.hero-cyber::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      rgba(0, 240, 255, 0.05) 0px,
      transparent 1px,
      transparent 2px,
      rgba(0, 240, 255, 0.05) 3px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(0, 240, 255, 0.05) 0px,
      transparent 1px,
      transparent 2px,
      rgba(0, 240, 255, 0.05) 3px
    );
  animation: scanlines 8s linear infinite;
}

.hero-title-cyber {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 900;
  background: var(--gradient-holographic);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  position: relative;
  animation: glitch 3s infinite;
}

.hero-title-cyber::before,
.hero-title-cyber::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-title-cyber::before {
  animation: glitch-1 2.5s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px, -2px);
  opacity: 0.8;
}

.hero-title-cyber::after {
  animation: glitch-2 2s infinite;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  transform: translate(2px, 2px);
  opacity: 0.8;
}

.btn-cyber {
  position: relative;
  padding: var(--space-4) var(--space-10);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-neon-cyan);
  background: transparent;
  border: 2px solid var(--color-neon-cyan);
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: var(--transition-spring);
  cursor: pointer;
  overflow: hidden;
}

.btn-cyber::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-cyber);
  opacity: 0;
  transition: opacity 0.3s var(--ease-out-cubic);
}

.btn-cyber:hover {
  box-shadow: var(--glow-strong);
  transform: translateY(-2px);
}

.btn-cyber:hover::before {
  opacity: 0.2;
}

.btn-cyber span {
  position: relative;
  z-index: 1;
}
```

**Glassmorphism Cards:**
```css
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
  transition: var(--transition-spring);
}

.card-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.1), transparent);
  transition: left 0.6s var(--ease-out-cubic);
}

.card-glass:hover::before {
  left: 100%;
}

.card-glass:hover {
  border-color: var(--color-neon-cyan);
  box-shadow: var(--glow-cyan);
  transform: translateY(-5px);
}
```

**Keyframe Animations:**
```css
@keyframes glitch {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
}

@keyframes glitch-1 {
  0%, 100% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(0);
  }
  25% {
    clip-path: polygon(0 25%, 100% 25%, 100% 70%, 0 70%);
    transform: translate(-5px, -2px);
  }
  50% {
    clip-path: polygon(0 50%, 100% 50%, 100% 95%, 0 95%);
    transform: translate(5px, 2px);
  }
  75% {
    clip-path: polygon(0 10%, 100% 10%, 100% 55%, 0 55%);
    transform: translate(-5px, 2px);
  }
}

@keyframes glitch-2 {
  0%, 100% {
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    transform: translate(0);
  }
  25% {
    clip-path: polygon(0 30%, 100% 30%, 100% 75%, 0 75%);
    transform: translate(3px, 3px);
  }
  50% {
    clip-path: polygon(0 5%, 100% 5%, 100% 50%, 0 50%);
    transform: translate(-3px, -3px);
  }
  75% {
    clip-path: polygon(0 45%, 100% 45%, 100% 90%, 0 90%);
    transform: translate(3px, -3px);
  }
}

@keyframes scanlines {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}

@keyframes holographic {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

---

# THEME 3: MINIMALIST LUXURY

## Design Philosophy
Less is more elevated to an art form. Monochromatic sophistication with generous whitespace, exquisite typography, and subtle motion. Inspired by high-end fashion editorials and luxury brand websites.

## 🎨 Design System

### Color Palette
```css
:root {
  /* Monochrome Base */
  --color-black: #000000;
  --color-charcoal: #1a1a1a;
  --color-graphite: #2d2d2d;
  --color-slate: #666666;
  --color-silver: #999999;
  --color-ash: #cccccc;
  --color-cloud: #e6e6e6;
  --color-pearl: #f5f5f5;
  --color-white: #ffffff;
  
  /* Accent - Single metallic gold */
  --color-gold: #c9a961;
  --color-gold-light: #d4b975;
  --color-gold-dark: #b89547;
  
  /* Gradients - Subtle */
  --gradient-fade: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
  --gradient-metallic: linear-gradient(135deg, #c9a961 0%, #d4b975 50%, #c9a961 100%);
  
  /* Shadows - Soft and elegant */
  --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-soft: 0 4px 16px rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-strong: 0 16px 48px rgba(0, 0, 0, 0.12);
}
```

### Typography System
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;600;700&display=swap');

:root {
  --font-display: 'Cormorant Garamond', serif;  /* Elegant, sophisticated */
  --font-body: 'Montserrat', sans-serif;         /* Clean, modern */
  
  /* Same fluid scale */
}
```

### Component Specifications

**Luxury Navigation:**
```css
.navbar-luxury {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--color-cloud);
  transition: var(--transition-base);
}

.navbar-logo-luxury {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 300;
  color: var(--color-black);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.nav-link-luxury {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-slate);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  position: relative;
  padding: var(--space-2) 0;
  transition: color 0.3s ease;
}

.nav-link-luxury::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--color-gold);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(-50%);
}

.nav-link-luxury:hover {
  color: var(--color-gold);
}

.nav-link-luxury:hover::after {
  width: 100%;
}
```

**Luxury Hero:**
```css
.hero-luxury {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  position: relative;
}

.hero-title-luxury {
  font-family: var(--font-display);
  font-size: clamp(4rem, 8vw, 10rem);
  font-weight: 300;
  color: var(--color-black);
  letter-spacing: -0.02em;
  line-height: 0.95;
  text-align: center;
  margin: 0;
}

.hero-title-luxury .accent {
  display: block;
  font-style: italic;
  color: var(--color-gold);
  font-weight: 400;
}

.hero-subtitle-luxury {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 300;
  color: var(--color-slate);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  text-align: center;
  margin-top: var(--space-8);
}

.btn-luxury {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-12);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-white);
  background: var(--color-black);
  border: none;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.btn-luxury::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: var(--color-gold);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn-luxury:hover::before {
  width: 300px;
  height: 300px;
}

.btn-luxury span {
  position: relative;
  z-index: 1;
}

.btn-luxury:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
}
```

**Luxury Project Cards:**
```css
.project-card-luxury {
  background: var(--color-white);
  border: 1px solid var(--color-cloud);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.project-card-luxury::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(201, 169, 97, 0.05), transparent);
  transition: left 1s ease;
}

.project-card-luxury:hover::before {
  left: 100%;
}

.project-card-luxury:hover {
  transform: translateY(-12px);
  box-shadow: var(--shadow-strong);
  border-color: var(--color-gold);
}

.project-image-luxury {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.6s ease, transform 0.6s ease;
}

.project-card-luxury:hover .project-image-luxury {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.project-title-luxury {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 400;
  color: var(--color-black);
  letter-spacing: 0.05em;
  margin: var(--space-6) 0 var(--space-3);
}

.project-subtitle-luxury {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 300;
  color: var(--color-slate);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
```

**Minimal Animations:**
```css
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.luxury-element {
  animation: fadeInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

# RESPONSIVE BREAKPOINTS

## Mobile-First Media Queries

```css
/* Small phones */
@media (min-width: 320px) {
  :root {
    --section-padding: var(--section-padding-mobile);
    --container-padding: var(--container-padding-mobile);
  }
}

/* iPhone baseline */
@media (min-width: 375px) {
  /* Slightly larger typography */
}

/* Tablet */
@media (min-width: 768px) {
  :root {
    --section-padding: var(--section-padding-tablet);
    --container-padding: var(--container-padding-tablet);
  }
  
  .hero-container {
    grid-template-columns: 1fr 1fr;
  }
  
  .navbar-menu {
    display: flex;
  }
  
  .navbar-toggle {
    display: none;
  }
}

/* Laptop */
@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1.5fr;
  }
  
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop */
@media (min-width: 1280px) {
  :root {
    --section-padding: var(--section-padding-desktop);
    --container-padding: var(--container-padding-desktop);
  }
  
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large screens */
@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
  }
}
```

---

# ACCESSIBILITY STANDARDS

## WCAG AA Compliance

```css
/* Focus Indicators */
*:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 4px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .gradient-orb,
  .scroll-arrow {
    animation: none !important;
  }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  :root {
    --color-border: #000000;
    --color-text-secondary: #000000;
  }
  
  .btn-primary {
    border: 2px solid currentColor;
  }
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

# PERFORMANCE OPTIMIZATION

## GPU-Accelerated Animations

```css
/* Use transform and opacity only */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Efficient hover effects */
.card:hover {
  transform: translateY(-8px) translateZ(0);
}

/* Lazy loading images */
img[loading="lazy"] {
  opacity: 0;
  transition: opacity 0.3s;
}

img[loading="lazy"].loaded {
  opacity: 1;
}
```

## Loading States

```css
.skeleton {
  background: linear-gradient(90deg, 
    var(--color-surface-elevated) 25%, 
    var(--color-border) 50%, 
    var(--color-surface-elevated) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

---

# COMPLETE UX FLOW

## User Journey

1. **Initial Load (0-2s)**
   - Navigation slides in from top
   - Hero title staggered reveal
   - Background gradients animate

2. **Scroll Engagement (2-10s)**
   - Scroll indicator bounces
   - Sections fade in on scroll
   - Parallax effects engage

3. **Exploration (10s-3min)**
   - Hover states reveal details
   - Project cards expand
   - Skill bars animate

4. **Conversion (3min+)**
   - CTA buttons prominent
   - Contact form accessible
   - Social proof visible

## Attention Guidance

- Large hero typography draws eye
- Color accents guide to CTA
- White space creates breathing room
- Progressive disclosure in projects

## Visual Hierarchy

1. Hero title (largest, boldest)
2. Section headings (large, distinct)
3. Featured project (prominent card)
4. Regular content (balanced)
5. Metadata (smallest, subtle)

---

This design system represents world-class, production-ready specifications for three distinct portfolio themes, each crafted to make an unforgettable impression while maintaining accessibility, performance, and conversion optimization.