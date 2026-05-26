import React, { useState } from 'react';

function Skills() {
    const categories = ["All", "Frontend", "Backend", "Database", "Design", "Tools"];
    const [activeCategory, setActiveCategory] = useState("All");

    const skillCards = [
        { name: "C", category: "Backend", icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000" },
        { name: "C++", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "HTML", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Java", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Figma", category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "SQL Server", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Git & GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" }    
    ];

    const filteredSkills = activeCategory === "All"
        ? skillCards
        : skillCards.filter(skill => skill.category === activeCategory);

    return (
        <div className="skills-container" id="Skills">
            <div className="sk-head">
                <h4 className="sk-subtitle">WHAT I KNOW</h4>
                <h2 className="sk-title">Skills</h2>
                <div className="title-underline"></div>
            </div>

            <div className="sk-categories">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        className={`sk-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="sk-grid">
                {filteredSkills.map((skill, index) => (
                    <div key={index} className="sk-card" data-tooltip={skill.name}>
                        <div className="sk-icon-box">
                            {skill.icon ? (
                                <img src={skill.icon} alt={skill.name} className="sk-icon" />
                            ) : (
                                <span className="sk-icon-placeholder">{skill.name.substring(0, 2)}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;