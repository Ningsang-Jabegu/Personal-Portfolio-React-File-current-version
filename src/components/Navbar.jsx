import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export default function Navbar({ activeLink }) {
    const navigationDirect_data = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact']
    const navbar_list = navigationDirect_data.map((navItem, index) => (
        <Link to={`/${navItem.toLowerCase()}`} >
            <li className="navbar-item" key={index}>
                <button id="about-btn" className={`navbar-link ${activeLink === navItem ? 'active' : ''}`} data-nav-link>{navItem}</button>
            </li>
        </Link>
    ))
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navbar_list}
            </ul>
        </nav>
    )
};