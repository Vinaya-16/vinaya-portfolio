import React from 'react';

function Navbar () {
    return (
        <div className='navbar-section'>
            {/* <div className='navbar-logo'> */}
                <a href='#Home' className='navbar-logo'>&lt;VP/&gt;</a>
            {/* </div> */}
                <ul className='navlinks'>
                <li className='navlink'><a href="#About">About</a></li>
                <li className='navlink'><a href="#Skills">Skills</a></li>
                <li className='navlink'><a href="#Projects">Projects</a></li>
                <li className='navlink'><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;