import React from 'react';

const Skill = ({ skillName, delay }) => (
    <div className="center" data-aos="flip-left" data-aos-delay={delay}>
        <div className="hexagon"><span>{skillName}</span></div>
    </div>
);

export default Skill;