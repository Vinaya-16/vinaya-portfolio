import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <span className="bracket">&lt;</span> VP <span className="bracket">/&gt;</span>
            </div>

            <ul className="nav-links">
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;