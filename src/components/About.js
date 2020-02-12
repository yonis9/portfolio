import React from 'react';

import Resume from './Resume'
import AboutMe from './AboutMe'
import Skills from './Skills';

import './About.css';

const About = () => (
    <div id='about'>
        <AboutMe />
        <Skills />
        <Resume />
    </div>
)

export default About;