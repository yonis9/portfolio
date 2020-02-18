import React from 'react';
import './Navbar.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = ( { isMobileNavOpen, closeMobileNav, colors } ) => {
    const { home, about, portfolio, contact } = colors;
    return(
        <nav className={`${isMobileNavOpen ? 'navbar mobile-open' : 'navbar'}`} >
            <ul>
                <li id='nav1' onClick={closeMobileNav}>
                    <NavLink 
                    style={{color: home}}
                    smooth  to="/#home">
                        HOME
                    </NavLink>
                </li>
                <li id='nav2' onClick={closeMobileNav}>
                    <NavLink
                    style={{color: about}}
                    smooth  to="/#about">
                        ABOUT ME
                    </NavLink>
                </li>
                <li id='nav3' onClick={closeMobileNav}>
                    <NavLink
                    smooth
                    to="/#portfolio"
                    style={{color: portfolio}}>
                        PORTFOLIO
                    </NavLink>
                </li>
                <li id='nav4' onClick={closeMobileNav}>
                    <NavLink
                    smooth
                    to="/#contact"
                    style={{color: contact}}>
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
)}


export default Navbar;