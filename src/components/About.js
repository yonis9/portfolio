import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Resume from '../Resume.pdf'
import Skill from './Skill';

const About = () => {
    const [skills] = useState([
        {
            name: 'HTML',
            delay: 0
        },
        {
            name: 'CSS',
            delay: 50
        },
        {
            name: 'Javascript',
            delay: 100
        },
        {
            name: 'Bootstarp',
            delay: 150
        },
        {
            name: 'React',
            delay: 200
        },
        {
            name: 'Redux',
            delay: 250
        },
        {
            name: 'Node.js',
            delay: 300
        },
        {
            name:'Express.js',
            delay: 350
        },
        {
            name: 'Git',
            delay: 400
        },
        {
            name: 'PostgreSQL',
            delay: 450
        },
        {
            name: 'MongoDB',
            delay: 500
        }

    ])
    return (
        <div id='about'>
            <div id='aboutme' >
                <h1 data-aos="fade-right">ABOUT</h1>
                <div className='border' data-aos="fade-right"></div>
                <p><span data-aos="fade-right">I am a self-taught web developer from Israel. After discovering my passion for web development, I couldn’t get enough. </span>
                <span data-aos="fade-right" data-aos-delay="100">I regularly create websites and web applications for my own portfolio, keep sharpening the saw, always thirsty for more knowledge and looking to be up to date with technology .</span>
                <span data-aos="fade-right" data-aos-delay="200">I am looking forward to bringing that passion to a full-time role.
</span></p>
            </div>
            <div id='skills'>
                <h1 data-aos="fade-right">SKILLS</h1>
                <div className='border' data-aos="fade-right"></div>
                
                <div id='skills-con'>
                    {
                        skills.map(({ name, delay }) => <Skill skillName={name} delay={delay}/>)
                    }
                </div>
            </div>
            <div id='resume'>
              <h1 data-aos="fade-right">RESUME</h1>
              <div className='border' data-aos="fade-right"></div>
              <a id='rescon' data-aos="fade-right" rel="noopener noreferrer" href={Resume} target='_blank'>
                  <FontAwesomeIcon icon={faFileAlt} size="3x" />
                  </a>
            
            </div>
            
        </div>
    )
}

export default About;