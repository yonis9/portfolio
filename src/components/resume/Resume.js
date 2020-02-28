import React from 'react';

import resumePDF from '../../assets/CV - Yoni Sisso.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Resume = () => (
    <div id='resume'>
        <h1 data-aos="fade-right">RESUME</h1>
        <div className='border' data-aos="fade-right"></div>
        <a 
        id='rescon' 
        data-aos="fade-right" 
        rel="noopener noreferrer" 
        href={resumePDF} 
        target='_blank'>
            <FontAwesomeIcon icon={faFileAlt} size="3x" />
        </a>
  </div>
)

export default Resume;