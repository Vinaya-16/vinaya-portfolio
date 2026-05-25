import React, { useState, useEffect } from 'react';

function Home() {
    const words = ["Developer", "Designer", "Student", "Builder"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullWord = words[currentWordIndex];
            
            if (!isDeleting) {
                setCurrentText(fullWord.substring(0, currentText.length + 1));
                if (currentText === fullWord) {
                    setTypingSpeed(2000); 
                    setIsDeleting(true);
                } else {
                    setTypingSpeed(100);
                }
            } else {
                setCurrentText(fullWord.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    setTypingSpeed(500);
                } else {
                    setTypingSpeed(50);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

    return (
        <div className="hero-container">
            <div className="right-glow"></div>

            <div className="hero-left">
                <h3>Vinaya Patole</h3>
                <h1>
                    Hi, I am <span className="typewriter">{currentText}</span>
                </h1>
                <p>
                    I build responsive, interactive web applications using React and the MERN stack - passionate about clean UI and great user experiences.
                </p>

                <div className="button-group">
                    <button className="primary">View my work ↗</button>
                    <button className="secondary">Contact</button>
                </div>
            </div>

            <div className="hero-right">
                
            </div>
        </div>
    );
}

export default Home;