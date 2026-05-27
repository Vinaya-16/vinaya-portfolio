import React from 'react';

function Home() {
    return (
        <div className="home-section">
            <div className="home-info">
                <h3>Vinaya Patole</h3>
                <h2>Frontend Developer</h2>
                <p>
                    I build responsive, interactive web applications using React and the MERN stack — passionate about clean UI and great user experiences.
                </p>
                <div className='home-buttons'>
                    <button className='home-btn'>View My work</button>
                    <button className='home-btn cnt'>Get In Touch</button>
                </div>
            </div>
        </div>
    );
}

export default Home;