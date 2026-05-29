import React from 'react';

function Home() {
    return (
        <div className="home-section" id='Home'>
            <div className="home-info">
                <h3>Vinaya Patole</h3>
                <h2>Frontend Developer</h2>
                <p>
                    I'm a Frontend Developer who builds responsive, data-driven web applications. While my heart lies in crafting clean UIs and seamless user experiences with React, I have the backend know-how to connect them smoothly to MongoDB databases. I don't just build layouts—I build functional, interactive digital products.
                </p>
                <div className='home-buttons'>
                    <button className='home-btn' onClick={() => window.location.href = "#Projects"}>View My Work</button>
                    <button className='home-btn cnt' onClick={() => window.location.href = "#Contact"}>Let's Work Together</button>
                </div>
            </div>
        </div>
    );
}

export default Home;