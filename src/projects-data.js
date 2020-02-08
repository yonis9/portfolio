import movieImg from './images/movies.png';
import wheatherImg from './images/wheather2.png' 

export const PROJECTS_DATA = [
    {   id: 1,
        title: 'Online Web Store',
        description:'A beard products online store. It contains products database, shopping cart, payment simulation and profile page.',
        tech: 'Technologies used: ReactJS, HTML, CSS, Node.js, Express.js and MongoDB',
        imageUrl:'https://i.imgur.com/2J1m1bt.png',
        link:'https://beardbrandstore.herokuapp.com/'
    },
    {   id: 2,
        title: 'Celebritiy Face Recognition',
        description: 'A full-stack web application that recognize celebrities faces using Machine Learning API.',
        tech: 'Technologies used: ReactJS, HTML, CSS, Node.js, Express.js and PostgreSQL.',
        imageUrl: 'https://i.ibb.co/fnNm7Zx/face.png',
        link: 'https://smartbrainrec.herokuapp.com/'
    },
    {   
        id:3,
        title: 'Movies App',
        description: 'A React app that shows movies using "The Movie DB" API. People can read about a movie and rate it.',
        tech: 'Technologies used: ReactJS, HTML and CSS.',
        imageUrl: movieImg,
        link: 'https://yonis9.github.io/MoviesApp/'
    },
    {   id:4,
        title: 'Wheather App',
        description: "A React app that detects your location and shows the weather report for 5 days, using 'OpenWeatherMap' API, based on the location.",
        tech: 'Technologies used: ReactJS, HTML and CSS.',
        imageUrl: wheatherImg,
        link: 'https://yonis9.github.io/WeatherApp/'
    },
    {   id:5,
        title: 'Robofriends Project',
        description: ' A React app in which random images of robots are fetched using API and has search functionality for searching robots.',
        tech: 'Technologies used: ReactJS, Redux.js, HTML and CSS.',
        imageUrl: 'https://i.ibb.co/bBSv7HL/robo.png',
        link: 'https://yonis9.github.io/robofriendsprojcet/'
    },
    {   id:6,
        title: 'Quote Machine',
        description: 'A React app which display random  qoutes from an external API.',
        tech: 'Technologies used: ReactJS, HTML and CSS.',
        imageUrl: 'https://i.ibb.co/BHpTV58/qoutes.png',
        link: 'https://codepen.io/yoni-sisso/full/YgOVrQ'
    },
    {   id:7,
        title: 'Pomodoro Clock',
        description: 'A React app that has a timer to break down work into intervals, inspired by the Pomodoro Technique.',
        tech: 'Technologies used: ReactJS, HTML and CSS.',
        imageUrl: 'https://i.ibb.co/r6wNDWs/pomodoro.png',
        link: 'https://codepen.io/yoni-sisso/full/pBzBpw'
    },
    {   id:8,
        title: 'Javascript Calculator<',
        description: 'A calculator app buiLt using ReactJS',
        tech: 'Technologies used: ReactJS, HTML and CSS.',
        imageUrl: 'https://i.ibb.co/DkNMSRN/jscalc.png',
        link: 'https://codepen.io/yoni-sisso/full/oVreMb'
    }
]