import React from 'react';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../../public/images/hamburger-icon.svg';
import closeMenu from '../../public/images/close-menu.svg';

const Navigation = () => {
	const toggleMenuOpen = e => {
		e.preventDefault();
		document.getElementById('mobileMenuExpanded').style.display = 'inline-block';
	};

	const toggleMenuClosed = e => {
		e.preventDefault();
		document.getElementById('mobileMenuExpanded').style.display = 'none';
	};

	return (
		<section id="navBar">
			<article className="navigationHeader">
				<ul className="navigationLinks">
					<NavLink activeClassName="activeRoute" exact to="/">
						<li className="nav-link"> HOME </li>
					</NavLink>
					<NavLink activeClassName="activeRoute" to="/Projects">
						<li className="nav-link"> PROJECTS </li>
					</NavLink>
					<NavLink activeClassName="activeRoute" to="/Contact">
						<li className="nav-link"> CONTACT </li>
					</NavLink>
				</ul>
			</article>
			<article id="mobileMenuExpanded" onClick={e => toggleMenuClosed(e)}>
				<a href="" id="closeButton" onClick={e => toggleMenuClosed(e)}>
					<img src={closeMenu} alt={'close menu icon'} />
				</a>
				<ul className="mobileMenuLinks">
					<NavLink activeClassName="activeRoute" exact to="/">
						<li className="nav-link"> HOME </li>
					</NavLink>
					<NavLink activeClassName="activeRoute" to="/Projects">
						<li className="nav-link"> PROJECTS </li>
					</NavLink>
					<NavLink activeClassName="activeRoute" to="/Contact">
						<li className="nav-link"> CONTACT </li>
					</NavLink>
				</ul>
			</article>
			<article className="mobileMenuHeader">
				<a
					href=""
					id="mobileMenuIcon"
					onClick={e => {
						toggleMenuOpen(e);
					}}
				>
					<span id="menuText">MENU</span>
					<img src={hamburgerIcon} alt={'menu-icon'} />
				</a>
			</article>
		</section>
	);
};

export default Navigation;
