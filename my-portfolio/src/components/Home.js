import React from 'react';

function Home() {
    return (
        <div className="home-section" id='Home'>
            <div className="home-info">
                <h3>Vinaya Patole</h3>
                <h2>Frontend Developer</h2>
                <p>
                    I build responsive, interactive web applications using React and the MERN stack — passionate about clean UI and great user experiences.
                </p>
                <div className='home-buttons'>
                    <button className='home-btn'><a href="#Projects">View My work</a></button>
                    <button className='home-btn cnt'><a href='#Contact'>Let's Work Together</a></button>
                </div>
            </div>
        </div>
    );
}

export default Home;