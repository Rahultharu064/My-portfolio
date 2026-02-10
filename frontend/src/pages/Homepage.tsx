import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Achievements from '../components/sections/Achievements';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Homepage: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Achievements />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </>
    );
};

export default Homepage;
