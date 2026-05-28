import React, { useState } from 'react';

function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='navbar-section'>
                <a href='#Home' className='navbar-logo'>&lt;VP/&gt;</a>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

                <ul className={`navlinks ${isOpen ? 'active' : ''}`}>
                <li className='navlink'><a href="#About">About</a></li>
                <li className='navlink'><a href="#Skills">Skills</a></li>
                <li className='navlink'><a href="#Projects">Projects</a></li>
                <li className='navlink'><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;