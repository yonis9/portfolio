import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router} from "react-router-dom";
import AOS from 'aos';


import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

import './App.css';

library.add(fab, faFileAlt, faBars)

class App extends Component {
  constructor() {
    super()
    this.state = {
      navSticky: 0,
      windowWidth: window.innerWidth,
      isMobileNavOpen: false,
      homePosition: 0,
      aboutPosition: 0,
      portfolioPosition: 0,
      contactPosition: 0,
      colors : {
        home: '',
        about: '',
        portfolio: '',
        contact: ''
      }
    }
  }

  componentDidMount () {
    const homePosition =  document.getElementById("home").offsetTop - 65;
    const aboutPosition = document.getElementById("about").offsetTop - 65;
    const portfolioPosition = document.getElementById("portfolio").offsetTop - 65;
    const contactPosition = document.getElementById("contact").offsetTop - 65;

    this.setState({ homePosition, aboutPosition, portfolioPosition, contactPosition })


    this.setState({ navSticky: document.getElementsByClassName("navbar")[0].offsetTop })
    AOS.init({
      easing: 'ease-in-quad',
      once: true
    });

    window.addEventListener('resize',() => {
      this.setState({windowWidth: window.innerWidth})
    })

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  openNav = () => {
    this.setState({isMobileNavOpen: !this.state.isMobileNavOpen})
  }

  closeMobileNav = () => {
    this.setState({ isMobileNavOpen: false})
  }

  handleScroll = (e) => {
    const regColor = '#f2f2f2';
    const focusedColor = '#95C623';
    let scrollPos = window.pageYOffset;
    const nav  = document.getElementsByClassName("navbar")[0];
    if (scrollPos > this.state.navSticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }

    const { homePosition, aboutPosition, portfolioPosition, contactPosition } = this.state;

    if (scrollPos >= homePosition && scrollPos < aboutPosition) {
     this.setState({ colors: {
      home: focusedColor,
      about: regColor,
      portfolio: regColor,
      contact: regColor
     }
    })
    } else if (scrollPos >= aboutPosition && scrollPos < portfolioPosition) {
      this.setState({ colors: {
        home: regColor,
        about: focusedColor,
        portfolio: regColor,
        contact: regColor
       }
      })
    }
     else if (scrollPos >= portfolioPosition && scrollPos < contactPosition) {
      this.setState({ colors: {
        home: regColor,
        about: regColor,
        portfolio: focusedColor,
        contact: regColor
       }
      })
    } else if (scrollPos >= contactPosition) {
      this.setState({ colors: {
        home: regColor,
        about: regColor,
        portfolio: regColor,
        contact: focusedColor
       }
      })
    }
  }




  render () {
    const { isMobileNavOpen, windowWidth, colors } = this.state;
    return (
      <div  onScroll={this.handleScroll}>
        <Router>
          <Home openNav={this.openNav} windowWidth={windowWidth}/>
          <Navbar 
          isMobileNavOpen={isMobileNavOpen}
          closeMobileNav={this.closeMobileNav}
          colors={colors}
          />
          <About />
          <Portfolio />
          <Contact />
        </Router>
      </div>
    );
      }
}

export default App;
