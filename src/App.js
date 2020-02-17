import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import AOS from 'aos';
import { BrowserRouter as Router} from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFileAlt, faBars)


class App extends Component {
  constructor() {
    super()
    this.state = {
      navSticky: 0,
      windowWidth: window.innerWidth,
      isMobileNavOpen: false
    }
  }

  componentDidMount () {
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
    var scrollPos = window.pageYOffset;
    const nav  = document.getElementsByClassName("navbar")[0];
    console.log(this.state.navSticky)
    if (scrollPos > this.state.navSticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }


    var nav1 = document.getElementById("nav1").querySelector('a');
    var nav2 = document.getElementById("nav2").querySelector('a');

    var nav3 =  document.getElementById("nav3").querySelector('a');
    var nav4 =  document.getElementById("nav4").querySelector('a');

    var top1 =  document.getElementById("home").offsetTop -65;
    var top2 = document.getElementById("about").offsetTop -65;
    var top3 = document.getElementById("portfolio").offsetTop -65;
    var top4 = document.getElementById("contact").offsetTop -65

    

    if (scrollPos >= top1 && scrollPos < top2) {
      nav1.style.color = '#95C623';
      nav2.style.color = '#f2f2f2'
      nav3.style.color = '#f2f2f2';
      nav4.style.color = '#f2f2f2';
  
    } else if (scrollPos >= top2 && scrollPos < top3) {
      nav1.style.color = '#f2f2f2';
      nav2.style.color = '#95C623'
      nav3.style.color = '#f2f2f2';
      nav4.style.color = '#f2f2f2';
    }
     else if (scrollPos >= top3 && scrollPos < top4) {
      nav1.style.color = '#f2f2f2';
      nav2.style.color = '#f2f2f2'
      nav3.style.color = '#95C623';
      nav4.style.color = '#f2f2f2';
    } else if (scrollPos >= top4) {
      nav1.style.color = '#f2f2f2';
      nav2.style.color = '#f2f2f2'
      nav3.style.color = '#f2f2f2';
      nav4.style.color = '#95C623';
    }
  
  }




  render () {
    const { isMobileNavOpen, windowWidth } = this.state;
    return (
      <div  onScroll={this.handleScroll}>
        <Router>
          <Home openNav={this.openNav} windowWidth={windowWidth}/>
          <Navbar isMobileNavOpen={isMobileNavOpen} closeMobileNav={this.closeMobileNav}/>
          <About />
          <Portfolio />
          <Contact />
        </Router>
      </div>
    );
      }
}

export default App;
