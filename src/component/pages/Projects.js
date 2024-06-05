import Project from "../elements/Project.js";
import '../../css/pages/Projects.css'
import { forwardRef } from "react";

const Projects = forwardRef(({}, ref) => {
    const projects = [];
    projects.push(
        {
            name: "Minecraft Plugins",
            description: "A fun passion project to enhance the experiences of players on Minecraft Servers. This adds items with abilities, and different monsters to alter the game for a dynamic experience.",
            keywords: ["Java", "JSON"]
        },
        {
            name: "StudyBuddy",
            description: "A passion project and assignment in CSCI-430, this combiens UI/UX principles with custom built API handler for user interactions.",
            keywords: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Mongoose", "MongoDB", "Postman API", "Server/Client"]
        },
        {
            name: "3d Render of a Painting in Babylon",
            description: "Based on the Painting " + "Wandering above a Sea of Clouds" + "by Casper Daviced Friedrich created in 1818. With understanding the basics of Javascript and problem-solving, I created a interactable enviornment based on the painting." ,
            keywords: ["HTML", "CSS", "JavaScript", "Babylon.js", "Game Design"]
        },
        {
            name: "Tic Tac Toe Games in C",
            description: "A project during CSCI-342 where we had to build TICTACTOE in C using Threads. I went above and beyond expectations by having a clean display during moves, and a robust AI to keep the player on their toes.",
            keywords: ["C", "Threads", "Basic AI", "Game Design"]
        },
        {
            name: "Server and Client in C",
            description: "A project during CSCI-342 where we built a Client-Server connection using Azure Virtual Machine and C.",
            keywords: ["C", "Server/Client", "Azure"]
        },
        {
            name: "Professional Webflow Portfolio",
            description: "This portfolio site is the culmination of ART 430. I created a professional company template, logo, colors and more. This site is based on this project.",
            keywords: ["Webflow", "Adobe InDesign", "Adobe Illustator", "Adobe Photoshop"]
        },
    );

    projects.forEach((p, i) => p.key = i);
    return (
        <div className="project" ref={ref}>
            <section>
                <div></div>
                <h1> Projects </h1>
                <div></div>
            </section>
            <div>
                <div className="projects">
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