import React from 'react';
import './Home.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const particleOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#95C623'
      },
      size: {
        value: 3
    },
      move: {
        speed: 6
      }
   },
   interactivity: {
    events: {
    onhover: {
    enable: true,
    mode: "repulse"
    },
    onclick: {
        enable: true,
        mode: 'push'
    }
    }
    }
  }

const Home = ( { openNav, windowWidth } ) => {
    return (
        <div id='home'>
            <Particles className='particles' params={particleOptions}/>
            { windowWidth < 768 ?
              <div id='menu' onClick={openNav}>
                  <FontAwesomeIcon icon={faBars} size='2x' color='#95C623' />
             </div>
              : null    
                }
          <h1 className='tracking-in-expand'>Hi, I'm <span>Yoni.</span> </h1>
          <p className='text-focus-in' id='desc'>A Full Stack Web Developer</p> 

          <div className='slide-bottom'><NavLink
               smooth  to="/#about"
                activeClassName="selected"><svg id="more-arrows">
            <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
            <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
            <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
           </svg></NavLink>
          </div>
        </div>
    )
}

export default Home