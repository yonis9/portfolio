import React from 'react';

import Resume from '../resume/Resume'
import AboutMe from '../about-me/AboutMe'
import Skills from '../skills/Skills';

import './About.css';

const About = () => (
    <div id='about'>
        <AboutMe />
        <Skills />
        <Resume />
    </div>
)

export default About;