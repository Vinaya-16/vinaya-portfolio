import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a href="#Home" className="nav-logo"><span className="bracket">&lt;</span> VP <span className="bracket">/&gt;</span></a>
            </div>

            <ul className="nav-links">
                <li><a href="#About" className="nav-link">About</a></li>
                <li><a href="#Skills" className="nav-link">Skills</a></li>
                <li><a href="#Projects" className="nav-link">Projects</a></li>
                <li><a href="#Contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;