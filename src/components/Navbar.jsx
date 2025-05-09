import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar({ activeLink }) {
    const navigationDirect_data = ['Home', 'About', 'Resume', 'Portfolio', 'Blog', 'Contact'];
    const navbar_list = navigationDirect_data.map((navItem, index) => (
        <li className="navbar-item" key={index}>
            <Link to={navItem === 'Home' ? '/' : `/${navItem.toLowerCase()}`}>
                <button id="about-btn" className={`navbar-link ${activeLink === navItem ? 'active' : ''}`} data-nav-link>{navItem}</button>
            </Link>
        </li>
    ));
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navbar_list}
            </ul>
        </nav>
    );
}