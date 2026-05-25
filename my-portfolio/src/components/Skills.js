import React from 'react';

function Skills() {

    const skillCards = [
        { name: "React.js", iconText: "" },
        { name: "JavaScript (ES6+)", iconText: "" },
        { name: "MongoDB", iconText: "" },
        { name: "HTML & CSS", iconText: "" },
        { name: "Git & GitHub", iconText: "" },
        { name: "C", iconText: "" },
        { name: "C++", iconText: "" },
        { name: "Java", iconText: "" },
        { name: "Figma", iconText: "" },
        { name: "SQL Server", iconText: "" }
    ];

    const techBadges = ["C", "C++", "HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Java", "SQL Server", "Git & GitHub"];

    return (
        <>
            <div className="sk-head">
                <h4 className="sk-subtitle">WHAT I KNOW</h4>
                <h2 className="sk-title">Skills</h2>
                <div className="title-underline"></div>
            </div>

            <div className="sk-grid">
                {skillCards.map((skill, index) => (
                    <div key={index} className="sk-card">
                        <div className="sk-icon-box">
                            {/* PLACE YOUR IMAGE TAG HERE FOR THE CARD ICON */}
                            <span>{skill.iconText}</span>
                        </div>
                        <div className="sk-card-info">
                            <span className="sk-name">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="sk-stack">
                <h3>My Tech Stack</h3>
                <div className="sk-badges-group">
                    {techBadges.map((tech, index) => (
                        <span key={index} className="sk-badge">{tech}</span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;