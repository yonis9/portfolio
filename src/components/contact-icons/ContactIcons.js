import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactIcons = () => (
    <div className='contact-icons'> 
        <div className='icon-container'>
        <a href='https://github.com/yonis9' target='_blank' rel="noopener noreferrer">
            <div className='icon-social'>
                <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
            </div> 
        </a>
        <a href='https://www.linkedin.com/in/yonisisso/' target='_blank' rel="noopener noreferrer">
            <div className='icon-social'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x'/>
            </div>
        </a>
        </div>
        <p>Made By <span>Yoni Sisso</span>  ©2019</p>             
    </div>
)

export default ContactIcons;