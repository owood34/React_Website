import Project from "../elements/Project.js";
import '../../css/pages/Projects.css'
import { forwardRef, useRef, useEffect, useState } from "react";

const Projects = forwardRef(({}, ref) => {
    const projects = [];
    const projectsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.45
    }

    projects.push(
        {
            name: "Minecraft Plugins",
            description: "These fun passion projects enhance the experiences of players on Minecraft Servers. These add items with different abilities and various monsters to alter the game for a dynamic experience.",
            keywords: ["Java", "JSON"]
        },
        {
            name: "StudyBuddy",
            description: "A passion project and assignment in CSCI-430, this combines UI/UX principles with a custom built API handler for user interactions.",
            keywords: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Mongoose", "MongoDB", "Postman API", "Server/Client"]
        },
        {
            name: "3d Render of a Painting in Babylon",
            description: "Based on the painting Wandering above a Sea of Clouds by Casper David Friedrich in 1818. With an understanding of the basics of Javascript and problem-solving, I made an interactable environment based on the painting." ,
            keywords: ["HTML", "CSS", "JavaScript", "Babylon.js", "Game Design"]
        },
        {
            name: "Tic Tac Toe Games in C",
            description: "These versions of TICTACTOE were created during CSCI-342 where we had to build TICTACTOE in C using Semaphores. I exceeded expectations by having a clean display during moves and a robust AI to keep the player on their toes.",
            keywords: ["C", "Threads", "AI", "Game Design"]
        },
        {
            name: "Professional Webflow Portfolio",
            description: "This portfolio site is the culmination of ART-430. I created a professional company template, logo, colors, and more. This project inspired me to create this site.",
            keywords: ["Webflow", "Adobe InDesign", "Adobe Illustator", "Adobe Photoshop"]
        },
    );
    projects.forEach((p, i) => p.key = i);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [e] = entries;
            setIsVisible(e.isIntersecting);
            if (isVisible) {
                e.target.classList.add('enter');
            }
        }, options);

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }
        
        return () => {
            if (projectsRef.current) {
                observer.observe(projectsRef.current);
            }
        }
    }, [projectsRef, options]);

    return (
        <div className="project" ref={ref}>
            <section>
                <div></div>
                <h1> Projects </h1>
                <div></div>
            </section>
            <div>
                <div className="projects" ref={projectsRef}>
                    {
                        projects.map((p) => 
                            <Project name={p.name} 
                                     description={p.description} 
                                     tags={p.keywords} 
                                     key={p.key} />
                        )
                    }
                </div>
            </div>
        </div> 
    );
});
export default Projects;