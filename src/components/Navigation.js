import React from 'react';
import { Link } from 'react-router';
import hamburgerIcon from '../../public/images/hamburger-icon.svg';
import closeMenu from '../../public/images/close-menu.svg';

const Navigation = () => {
    const toggleMenuOpen = (e) => {
        e.preventDefault();
        document.getElementById('mobileMenuExpanded').style.display = 'inline-block';
    };

    const toggleMenuClosed = (e) => {
        e.preventDefault();
        document.getElementById('mobileMenuExpanded').style.display = 'none';
    };

    return(
        <section id="navBar">
            <article className="navigationHeader">
                <ul className="navigationLinks">
                    <Link to="/"> <li className="nav-link"> HOME </li> </Link>
                    <Link to="/Projects"> <li className="nav-link"> PROJECTS </li> </Link>
                    <Link to="/Contact"> <li className="nav-link"> CONTACT  </li> </Link>
                </ul>
            </article>
            <article id="mobileMenuExpanded" 
                onClick={(e) => toggleMenuClosed(e)} 
                >
                <a href="" id="closeButton" onClick={(e) => toggleMenuClosed(e)}><img 
                    src={closeMenu} alt={"close menu icon"}
                /></a>
                <ul className="mobileMenuLinks">
                    <Link to="/"> <li className="nav-link"> HOME </li> </Link>
                    <Link to="/Projects"> <li className="nav-link"> PROJECTS </li> </Link>
                    <Link to="/Contact"> <li className="nav-link"> CONTACT  </li> </Link>
                </ul>
            </article>
            <article className="mobileMenuHeader">
                <a 
                    href="" 
                    id="mobileMenuIcon" 
                    onClick={(e) => {toggleMenuOpen(e)}}>
                <span id="menuText">
                MENU
                </span>
                <img 
                    src={hamburgerIcon} alt={"menu-icon"}
                />
                </a>
                
            </article>
        </section>
    );
}

export default Navigation;