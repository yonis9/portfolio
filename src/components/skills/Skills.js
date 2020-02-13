import React, { useState } from 'react';

import SKILL_DATA from'./skills.data';

import Skill from '../skill/Skill';

const Skills = () => {
    const [skills] = useState(SKILL_DATA);

    return (
        <div id='skills'>
            <h1 data-aos="fade-right">SKILLS</h1>
            <div className='border' data-aos="fade-right"></div>
            <div id='skills-con'>
            {
                skills.map(({ name, delay }) => <Skill key={name} skillName={name} delay={delay}/>)
            }
            </div>
        </div>
)}

export default Skills;;