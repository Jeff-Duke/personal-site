import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
    return(
        <div className="navigation-header">
            <ul className="navigation-links">
                <li className="nav-link"> <Link to="/"> Home </Link> </li>
                <li className="nav-link"> <Link to="/Projects"> Projects </Link> </li>
                <li className="nav-link"> <Link to="/Contact"> Contact </Link> </li>
            </ul>
        </div>
    );
}

export default Navigation;
