import React from 'react';
import './Portfolio.css';
import movieImg from '../images/movies.png';
import wheatherImg from '../images/wheather2.png' 


const Portfolio = () => {
    return (
        <div id='portfolio'>
            <h1 data-aos="fade-left">PORTFOLIO</h1>
            <div className='border' data-aos="fade-right"></div>
           <div className = 'projects-grid'>
            <div className='project-container' data-aos="zoom-in-up"> 
                <img alt='project' src='https://i.imgur.com/2J1m1bt.png'/>
                <div className='project-description'>   
                    <div className='text'>
                      <div className='project-title'>Online Web Store</div>
                      <p>A beard products online store. It contains products database, shopping cart, payment simulation and profile page.<br/>
                      Technologies used: ReactJS, HTML, CSS, Node.js, Express.js and MongoDB</p>
                    </div>
                     <div className='link'>  
                        <a href='https://beardbrandstore.herokuapp.com/' rel="noopener noreferrer" target='_blank'>Visit Website</a></div>
                     </div>
                  
             </div>
             <div className='project-container' data-aos="zoom-in-up">
                      <img  alt='project' src='https://i.ibb.co/fnNm7Zx/face.png'/>
                      <div className='project-description'>
                         
                        <div className='text'> 
                        <div className='project-title'>Celebritiy Face Recognition</div>
                        <p>A full-stack web application that recognize celebrities faces using Machine Learning API.  <br/>
                        Technologies used: ReactJS, HTML, CSS, Node.js, Express.js and PostgreSQL.</p>
                        </div>
                        <div className='link'>
                            <a  href='https://smartbrainrec.herokuapp.com/' rel="noopener noreferrer" target="_blank">Visit Website</a>
                        </div>
                    </div>
            </div>

            <div className='project-container' data-aos="zoom-in-up">
                 <img  alt='project' src={movieImg}/>
                <div className='project-description'>
                
                    <div className='text'> 
                        <div className='project-title'>Movies App</div>
                    <p> A React app that shows movies using "The Movie DB" API. People can read about a movie and rate it.<br/>
                        Technologies used: ReactJS, HTML and CSS.</p>
                        </div>
                        <div className='link'> 
                            <a href='https://yonis9.github.io/MoviesApp/' rel="noopener noreferrer" target='_blank'>Visit Website</a>
                        </div>
                </div> 
            </div>

            <div className='project-container' data-aos="zoom-in-up">
                 <img  alt='project' src={wheatherImg}/>
                <div className='project-description'>
                
                    <div className='text'> 
                        <div className='project-title'>Wheather App</div>
                    <p>A React app that detects your location and shows the weather report for 5 days, using 'OpenWeatherMap' API, based on the location. <br/>
                        Technologies used: ReactJS, HTML and CSS.</p>
                        </div>
                        <div className='link'> 
                            <a href='https://yonis9.github.io/WeatherApp/' rel="noopener noreferrer" target='_blank'>Visit Website</a>
                        </div>
                </div> 
            </div>


            <div className='project-container' data-aos="zoom-in-up">
                 <img  alt='project' src='https://i.ibb.co/bBSv7HL/robo.png'/>
                <div className='project-description'>
                
                    <div className='text'> 
                        <div className='project-title'>Robofriends Project</div>
                    <p> A React app in which random images of robots are fetched using API and has search functionality for searching robots. <br/>
                        Technologies used: ReactJS, Redux.js, HTML and CSS.</p>
                        </div>
                        <div className='link'> 
                            <a href='https://yonis9.github.io/robofriendsprojcet/' rel="noopener noreferrer" target='_blank'>Visit Website</a>
                        </div>
                </div> 
            </div>

            <div className='project-container' data-aos="zoom-in-up">
                <img  alt='project' src='https://i.ibb.co/BHpTV58/qoutes.png'/>
                <div className='project-description'>
                    <div className='text'><div className='project-title'>Quote Machine</div>
                    <p>A React app which display random  qoutes from an external API. <br/>
                    Technologies used: ReactJS, HTML and CSS.</p>
                    </div>
                     <div className='link'>
                          <a href='https://codepen.io/yoni-sisso/full/YgOVrQ' rel="noopener noreferrer" target="_blank">Visit Website</a>
                     </div>
                </div>
            </div>
            <div className='project-container' data-aos="zoom-in-up">
                 <img  alt='project' src='https://i.ibb.co/r6wNDWs/pomodoro.png'/>
                <div className='project-description'>
                  <div className='text'><div className='project-title'>Pomodoro Clock</div>
                   <p>A React app that has a timer to break down work into intervals, inspired by the Pomodoro Technique.<br/>
                   Technologies used: ReactJS, HTML and CSS.</p>
                  </div>
                  <div className='link'> 
                   <a href='https://codepen.io/yoni-sisso/full/pBzBpw' rel="noopener noreferrer" target='_blank'>Visit Website</a>
                  </div>
                </div>   
            </div>
            <div className='project-container' data-aos="zoom-in-up">
                 <img alt='project' src='https://i.ibb.co/DkNMSRN/jscalc.png'/>
              <div className='project-description'>
                  <div className='text'>
                      <div className='project-title'>Javascript Calculator</div>
                      <p>A calculator app buiLt using ReactJS.<br/>
                      Technologies used: ReactJS, HTML and CSS.</p>
                  </div>
                  <div className='link'> 
                    <a href='https://codepen.io/yoni-sisso/full/oVreMb' rel="noopener noreferrer" target='_blank'>Visit Website</a>
                  </div>
             </div> 
            </div>
           </div>
        </div>
    )
}

export default Portfolio;