import Project from "../elements/Project.js";
import '../../css/pages/Projects.css'
import { forwardRef } from "react";

const Projects = forwardRef(({}, ref) => {
    const projects = [];
    projects.push(
        {
            name: "Minecraft Plugins",
            progress: 100,
            description: "",
            keywords: ["Java", "JSON"]
        },
        {
            name: "StudyBuddy",
            progress: 90,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Mongoose", "MongoDB", "Postman API", "Server/Client"]
        },
        {
            name: "3d Render of a Painting in Babylon",
            progress: 95,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "Babylon.js", "Game Design"]
        },
        {
            name: "Tic Tac Toe Games in C",
            progress: 100,
            description: "",
            keywords: ["C", "Threads", "Basic AI", "Game Design"]
        },
        {
            name: "Vue.js Site",
            progress: 90,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "Vue.js"]
        },
        {
            name: "Server and Client in C",
            progress: 90,
            description: "",
            keywords: ["C", "Server/Client"]
        }
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
                                     progress={p.progress} 
                                     key={p.key}
                            />
                        )
                    }
                </div>
            </div>
        </div> 
    );
});
export default Projects;