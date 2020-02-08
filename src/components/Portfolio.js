import React from 'react';
import './Portfolio.css';

import Project from './Project';

import { PROJECTS_DATA } from '../projects-data'


const Portfolio = () => {
    return (
        <div id='portfolio'>
            <h1 data-aos="fade-left">PORTFOLIO</h1>
            <div className='border' data-aos="fade-right"></div>
           <div className = 'projects-grid'>
            {
                PROJECTS_DATA.map(({id, ...props}) => (
                    <Project key={id} { ...props} />
                ))
            }
           </div>
        </div>
    )
}

export default Portfolio;