import React from 'react';
import Clogo from '../assets/Clogo.png';
import cpplogo from '../assets/cpplogo.png';
import HTMLlogo from '../assets/HTMLlogo.svg';
import CSSlogo from '../assets/CSSlogo.png';
import JSlogo from '../assets/JSlogo.png';
import SQLlogo from '../assets/SQLlogo.jpg';
import mongologo from '../assets/mongologo.png';
import javalogo from '../assets/javalogo.png';
import reactlogo from '../assets/reactlogo.jpg';
import figmalogo from '../assets/figmalogo.png';
import gitlogo from '../assets/gitlogo.png';
import pythonlogo from '../assets/pythonlogo.jpg';

function Skills() {

    const skills = [
        { id: 1, name: "C", icon: Clogo },
        { id: 2, name: "C++", icon: cpplogo },
        { id: 3, name: "HTML", icon: HTMLlogo },
        { id: 4, name: "CSS", icon: CSSlogo },
        { id: 5, name: "JavaScript", icon: JSlogo },
        { id: 6, name: "SQL Server", icon: SQLlogo },
        { id: 7, name: "MongoDB", icon: mongologo },
        { id: 8, name: "Java", icon: javalogo },
        { id: 9, name: "React.js", icon: reactlogo },
        { id: 10, name: "Figma", icon: figmalogo },
        { id: 11, name: "Git & GitHub", icon: gitlogo },
        { id: 12, name: "Python", icon: pythonlogo }
    ];

    return (
        <div className='sk-section' id='Skills'>
            <div className='sk-head'>
                <div className='subtitle'>WHAT I KNOW</div>
                <div className='title'>Skills</div>
                <div className='title-underline'></div>
            </div>
            <div className='sk-container'>
                {skills.map((skill, index) => (
                    <div key={skill.id} className='sk-btn'>
                        <div><img src={skill.icon} /></div>
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;