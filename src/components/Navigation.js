import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
    const toggleMenuOpen = (e) => {
        const mobileMenu = document.getElementById('mobile-menu-expanded');
        e.target.style.display = 'none';
        mobileMenu.style.display = 'inline-block';
    };

    const toggleMenuClosed = (e) => {
        const mobileMenu = document.getElementById('mobile-menu-expanded');
        const mobileIcon = document.getElementById('mobile-menu-icon');
        mobileMenu.style.display = 'none';
        mobileIcon.style.display = 'inline-block';
    };

    return(
        <section>
            <article className="navigation-header">
                <ul className="navigation-links">
                    <Link to="/"> <li className="nav-link"> Home </li> </Link>
                    <Link to="/Projects"> <li className="nav-link"> Projects </li> </Link>
                    <Link to="/Contact"> <li className="nav-link"> Contact  </li> </Link>
                </ul>
            </article>
            <article id="mobile-menu-expanded" 
                onClick={(e) => toggleMenuClosed(e)} 
                onBlur={(e) => {console.log('blurry', e.target)}}
                onChange={(e) => {console.log('changes', e.target)}}
                >
                <ul className="mobile-menu-links">
                    <Link to="/"> <li className="nav-link"> Home </li> </Link>
                    <Link to="/Projects"> <li className="nav-link"> Projects </li> </Link>
                    <Link to="/Contact"> <li className="nav-link"> Contact  </li> </Link>
                </ul>
            </article>
            <article className="mobile-menu-header">
                <div id="mobile-menu-icon" onClick={(e) => {toggleMenuOpen(e)}}>
                    <p>Menu</p>
                </div>
            </article>
        </section>
    );
}

export default Navigation;
