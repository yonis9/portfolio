import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Resume from '../Resume.pdf'

const About = () => {
    return (
        <div id='about'>
            <div id='aboutme' >
                <h1 data-aos="fade-right">ABOUT</h1>
                <div className='border' data-aos="fade-right"></div>
                <p><span data-aos="fade-right">I am a self-taught web developer from Israel. I create responsive high-quality websites and web applications. </span>
                <span data-aos="fade-right" data-aos-delay="100">I Regularly look to improve my skills and leran new ones, and be up to date with technology. </span>
                <span data-aos="fade-right" data-aos-delay="200">I am naturally curious and highly motivated to work as a web developer.</span></p>
            </div>
            <div id='skills'>
                <h1 data-aos="fade-right">SKILLS</h1>
                <div className='border' data-aos="fade-right"></div>
                
                <div id='skills-con' >

                    <div className="center" data-aos="flip-left">
                        <div className="hexagon"><span>HTML</span></div>
                    </div>
                    <div className="center"  data-aos="flip-left" data-aos-delay="50">
                        <div className="hexagon"><span>CSS</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="100">
                        <div className="hexagon"><span>JavaScript</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="150">
                    <div className="hexagon"><span>Bootstrap</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="200">
                    <div className="hexagon"><span>React</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="250">
                    <div className="hexagon"><span>Redux</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="300">
                    <div className="hexagon"><span>Node.js</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="350">
                    <div className="hexagon"><span>Express.js</span></div>
                    </div>
                    <div className="center"   data-aos="flip-right" data-aos-delay="400">
                    <div className="hexagon"><span>Git</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="450">
                    <div className="hexagon"><span>NPM</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="500">
                    <div className="hexagon"><span>PostgreSQL</span></div>
                    </div>
                    <div className="center" data-aos="flip-left" data-aos-delay="550">
                    <div className="hexagon"><span>MongoDB</span></div>
                    </div>
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