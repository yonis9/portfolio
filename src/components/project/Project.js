import React from 'react';

const Project = ({ title, imageUrl, description, link, tech}) => (
    <div className='project-container' data-aos="zoom-in-up"> 
    <img alt='project' src={`${imageUrl}`}/>
    <div className='project-description'>   
        <div className='text'>
          <div className='project-title'>{title}</div>
          <p>{description}<br/>{tech}</p>
        </div>
         <div className='link'>  
            <a href={`${link}`} rel="noopener noreferrer" target='_blank'>Visit Website</a></div>
         </div>
      
 </div>
)

export default Project;