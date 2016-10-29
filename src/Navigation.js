import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
    return(
        <div className="navigation-header">
            <ul className="navigation-links">
                <li> <Link to="/"> Home </Link> </li>
            </ul>
        </div>
    );
}

export default Navigation;
