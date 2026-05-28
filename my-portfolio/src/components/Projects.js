import React from 'react';
import grocIcon from './assets/grocery.png';
import cartIcon from './assets/quickcart.png';
import careerIcon from './assets/career.png';
import cssIcon from './assets/css.png';
import erpIcon from './assets/erp.png';

function Projects() {

    const projects = [
        { id: 1, name: "Grocery Shopping App", gitrepo: "https://github.com/Vinaya-16/Grocery-Shopping-", icon: grocIcon, desc: "QuickCart is a modern full-stack grocery delivery web application inspired by platforms like Blinkit and Zepto. Users can browse products, add items to cart, manage favourites, place orders, and track deliveries with a clean and responsive UI."},
        { id: 2, name: "QuickCart Clone", gitrepo: "https://github.com/Vinaya-16/QuickCart-Clone", icon: cartIcon, desc: "A modern full-stack grocery delivery web application inspired by Blinkit/Zepto style platforms. Users can browse products, add items to cart, authenticate securely, and place orders through a responsive and user-friendly interface." },
        { id: 3, name: "ERP System Tracer", gitrepo: "https://github.com/Vinaya-16/ERP-System-Tracker", icon: erpIcon, desc: "Hackathon 2026 Project | Full-Stack: React + Node.js + MongoDB + JWT"},
        { id: 4, name: "Career Buddy", gitrepo: "https://github.com/Vinaya-16/CareerBuddy", icon: careerIcon, desc: "Hackathon 2025 Project | Frontend Based: HTML, CSS, JS, LocalStorage (Database)"},
        { id: 5, name: "CSS Translations", gitrepo: "https://github.com/Vinaya-16/CSS-Translations", icon: cssIcon, desc: "A creative CSS animation and transformation project showcasing modern UI effects using pure CSS. It demonstrates smooth transitions, transforms, hover effects, and visually engaging web interactions to improve frontend design and animation skills." } 
    ];

    return(
        <div className="projects-container" id="Projects">
            <div className="pr-head">
                <div className="subtitle">
                    WHAT I'VE BUILT
                </div>
                <div className="title">
                    Projects
                </div>
                <div className="title-underline"></div>
            </div>

            <div className="pr-section">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div><img src={project.icon} className="pricon" /></div>
                        <h2>{project.name}</h2>
                        <p>{project.desc}</p>
                        <h4><a href={project.gitrepo} target="_blank" rel="noreferrer">View Code</a></h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;