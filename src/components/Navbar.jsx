import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export default function Navbar({activeLink}) {
    return (
        <nav className="navbar">
                <ul className="navbar-list">
                    <Link to="/about" >
                        <li className="navbar-item">
                            <button id="about-btn" className={`navbar-link ${activeLink === 'About' ? 'active' : ''}`} data-nav-link>About</button>
                        </li>
                    </Link>

                    <Link to="/resume" >
                        <li className="navbar-item">
                            <button id="resume-btn" className={`navbar-link ${activeLink === 'Resume' ? 'active' : ''}`} data-nav-link>Resume</button>
                        </li>
                    </Link>

                    <Link to="/portfolio" >
                        <li className="navbar-item">
                            <button id="portfolio-btn" className={`navbar-link ${activeLink === 'Portfolio' ? 'active' : ''}`} data-nav-link>Portfolio</button>
                        </li>
                    </Link>

                    <Link to="/blog" >
                        <li className="navbar-item">
                            <button id="blog-btn" className={`navbar-link ${activeLink === 'Blog' ? 'active' : ''}`} data-nav-link>Blog</button>
                        </li>
                    </Link>

                    <Link to="/contact" >
                        <li className="navbar-item">
                            <button id="contact-btn" className={`navbar-link ${activeLink === 'Contact' ? 'active' : ''}`} data-nav-link>Contact</button>
                        </li>
                    </Link>
                </ul>
        </nav>
    )
};