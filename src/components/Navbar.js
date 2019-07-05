import React from 'react';
import './Navbar.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = ( { isMobileNavOpen, closeMobileNav } ) => {
    let classes = 'navbar';
    if(isMobileNavOpen) {
        classes = 'navbar mobile-open';
    }
    return (
        <nav className={classes} >
        <ul>
          <li id='nav1' onClick={closeMobileNav}><NavLink
               smooth  to="/#home"
                activeClassName="selected">HOME</NavLink></li>
        <li id='nav2' onClick={closeMobileNav}><NavLink
               smooth  to="/#about"
                activeClassName="selected">ABOUT ME</NavLink></li>
          <li id='nav3' onClick={closeMobileNav}><NavLink
              smooth   to="/#portfolio"
                activeClassName="selected">PORTFOLIO</NavLink></li>
          <li id='nav4' onClick={closeMobileNav}><NavLink
               smooth  to="/#contact"
                activeClassName="selected">CONTACT</NavLink></li>
        </ul>
        </nav>
    )
}

export default Navbar;