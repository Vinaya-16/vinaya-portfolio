import React from 'react';

function About() {
    return (
        <div id="about" className="abt-container">
            <div className="abt-left">
                <h4 className="abt-subtitle">WHO I AM</h4>
                <h2 className="abt-title">About Me</h2>
                <div className="title-underline"></div>

                <div className="abt-text">
                    <p>I'm a fresher Frontend Developer from India with 1.5 years of hands-on practice building web applications. I love turning ideas into pixel-perfect, functional interfaces.</p>
                    <p>My journey started with HTML and CSS, and I've since dived deep into React.js and the full MERN stack. I enjoy solving problems, learning new technologies, and writing clean, maintainable code.</p>
                    <p>When I'm not coding, I'm exploring UI/UX patterns or working on personal projects to sharpen my skills.</p>
                </div>

                <div className="tech-badges">
                    <span className="badge">React.js</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">Express</span>
                    <span className="badge">JavaScript</span>
                    <span className="badge">HTML & CSS</span>
                </div>
            </div>
            
            <div className="abt-right">
                <div className="stat-card">
                    <h3>1.5+</h3>
                    <p>Years practicing</p>
                </div>
                <div className="stat-card">
                    <h3>3+</h3>
                    <p>Projects built</p>
                </div>
                <div className="stat-card">
                    <h3>6+</h3>
                    <p>Technologies</p>
                </div>
                <div className="stat-card">
                    <h3>100%</h3>
                    <p>Passion</p>
                </div>
            </div>
        </div>
    );
}

export default About;