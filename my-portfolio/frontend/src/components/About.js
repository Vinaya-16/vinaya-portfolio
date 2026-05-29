import React from 'react';

function About() {

    const lan = [
        {id: 1, name: "HTML"},
        {id: 2, name: "CSS"},
        {id: 3, name: "Javascript"},
        {id: 4, name: "MongoDB"},
        {id: 5, name: "React.js"}
    ];

    return (
        <div className='abt-section' id='About'>
            <div className='abt-head'>
                <div className='subtitle'>WHO I AM</div>
                <div className='title'>About Me</div>
                <div className='title-underline'></div>
            </div>
            <div className='abt-container'>
                <div className='abt-left'>
                    <p>
                        I'm a fresher Frontend Developer from India with 1.5 years of hands-on practice building web applications. I love turning ideas into pixel-perfect, functional interfaces.
                    </p>
                    <p>
                        My journey started with HTML and CSS, and I've since dived deep into React.js and the full MERN stack. I enjoy solving problems, learning new technologies, and writing clean, maintainable code.
                    </p>
                    <p>
                        When I'm not coding, I'm exploring UI/UX patterns or working on personal projects to sharpen my skills.
                    </p>
                    <div className='lan-badge'>
                        {lan.map((lang, index) => (
                        <div key={lang.id} className='lan-btn'>
                            {lang.name}
                        </div>  
                    ))}
                    </div>
                </div>
                <div className='abt-right'>
                    <div className='abt-btn'>
                        <h3>1.5+</h3>
                        Years Practicing
                    </div>
                    <div className='abt-btn'>
                        <h3>3+</h3>
                        Projects built
                    </div>
                    <div className='abt-btn'>
                        <h3>6+</h3>
                        Technologies
                    </div>
                    <div className='abt-btn'>
                        <h3>100%</h3>
                        Passion
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;