import movieImg from '../../images/movies.png';
import wheatherImg from '../../images/wheather2.png';
import crwnShopImg from '../../images/crwn-shop.png';
import calculatorImg from '../../images/calculator.png';
import covid from '../../images/covid19.png'

export const PROJECTS_DATA = [
    {
        id: 9,
        title: 'Covid-19 App',
        description: 'A SPA that shows Covid-19 data stats visually.',
        tech: 'Technologies used: React, Context Api and Sass.',
        imageUrl: covid,
        link: 'https://yonis9.github.io/covid-19/'
    },
    {
        id: 8,
        title: 'Crwn Shop Project',
        description: 'A full-stack e-commerce application similar to Shopify using React(hooks), Redux(sagas), Firebase and Stripe API.',
        tech: 'Technologies used: React, Redux, Sass and Firebase.',
        imageUrl: crwnShopImg,
        link: 'https://crwnshoplive.herokuapp.com/'
    },
    {   id: 7,
        title: 'Online Web Store',
        description:'A beard products online store. It contains products database, shopping cart, payment simulation and profile page.',
        tech: 'Technologies used: React, CSS, Node.js, Express.js and MongoDB.',
        imageUrl:'https://i.imgur.com/2J1m1bt.png',
        link:'https://beardbrandstore.herokuapp.com/'
    },
    {   id: 6,
        title: 'Celebritiy Face Recognition',
        description: 'A full-stack web application that recognize celebrities faces using Machine Learning API.',
        tech: 'Technologies used: React, Redux, CSS, Node.js, Express.js and PostgreSQL.',
        imageUrl: 'https://i.ibb.co/fnNm7Zx/face.png',
        link: 'https://smartbrainrec.herokuapp.com/'
    },
    {   id: 5,
        title: 'Wheather App',
        description: "A React app that shows the weather forecast for 5 days based on your detected location or your input search using AccuWeather API. Location also can be saved on favorites page.",
        tech: 'Technologies used: React, Redux and CSS.',
        imageUrl: wheatherImg,
        link: 'https://yonis9.github.io/Weather-App/'
    },
    {   id: 4,
        title: 'React Calculator',
        description: 'A calculator app built with React using Context API',
        tech: 'Technologies used: React and Sass.',
        imageUrl: calculatorImg,
        link: 'https://yonis9.github.io/react-calculator/'
    },
    {   
        id: 3,
        title: 'Movies App',
        description: 'A React app that shows movies using "The Movie DB" API. People can read about a movie and rate it.',
        tech: 'Technologies used: React and CSS.',
        imageUrl: movieImg,
        link: 'https://yonis9.github.io/MoviesApp/'
    },
    {   id: 2,
        title: 'Robofriends Project',
        description: ' A React app in which random images of robots are fetched using API and has search functionality for searching robots.',
        tech: 'Technologies used: React, Redux.js and CSS.',
        imageUrl: 'https://i.ibb.co/bBSv7HL/robo.png',
        link: 'https://yonis9.github.io/robofriendsprojcet/'
    },
    {   id: 1,
        title: 'Quote Machine',
        description: 'A React app which display random  qoutes from an external API.',
        tech: 'Technologies used: React and CSS.',
        imageUrl: 'https://i.ibb.co/BHpTV58/qoutes.png',
        link: 'https://codepen.io/yoni-sisso/full/YgOVrQ'
    }
]