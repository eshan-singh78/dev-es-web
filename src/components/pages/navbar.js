import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <button className="nav-btn"><Link to="/">Home</Link></button>
            <button className="nav-btn"><Link to="/about-me">About me</Link></button>
            <button className="nav-btn"><Link to="/projects">Projects</Link></button>
            <button className="nav-btn"><Link to="/contact">Let's Connect</Link></button>
            <button className="nav-btn"><Link to="/live">Live Dev</Link></button>
        </div>
    );
}

export default Navbar;
