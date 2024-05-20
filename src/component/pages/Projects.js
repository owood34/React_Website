import Project from "../elements/Project.js";
import burger from '../../images/burger.png';
import '../../css/pages/Projects.css'
import { useState } from "react";

const Projects = () => {
    const projects = [];
    projects.push(
        {
            name: `Minecraft Tinkering Mod`, 
            progress: 100, 
            description: "What if this is like a giant paragraph that is way bigger than 10% because this is a test for character limit and interaction. I am curious if I should make this a popup instead while I am writing this. Thank you for your time.",
            keywords: ["Java"]
        },
        {
            name: "Minecraft Zombie Apacolpyse Plugin",
            progress: 100,
            description: "",
            keywords: ["Java"]
        },
        {
            name: "Minecraft Medieval Plus Plugin",
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
            name: "Ernie Eats",
            progress: 75,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "YML", "NoSQL", "Azure", "API", "Server/Client"]
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
            name: "Snake in Javascript",
            progress: 60,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "Game Design"]
        },
        {
            name: "Vue.js Site",
            progress: 90,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "Vue.js"]
        },
        {
            name: "React.js Site",
            progress: 80,
            description: "",
            keywords: ["HTML", "CSS", "JavaScript", "React.js"]
        },
        {
            name: "Server and Client in C",
            progress: 90,
            description: "",
            keywords: ["C", "Server/Client"]
        },
        {
            name: "Learning Python",
            progress: 0,
            description: "",
            keywords: ["Python"]
        },
        {
            name: "Learning Angular",
            progress: 0,
            description: "",
            keywords: ["Angular"]
        },
    );

    projects.forEach((p, i) => p.key = i);
    const [sidebarDisplay, setSidebarDisplay] = useState(false);
    const [searchParams, setSearchParams] = useState({
        text: "",
        percentage: 100,
        keyword: ""
    });

    const sortProjects = () => [...new Set(projects.filter((p) => p.keywords.includes(searchParams.keyword))
        .filter((p) => p.description.includes(searchParams.text) || p.name.includes(searchParams.text))
        .sort((p1, p2) => p2.progress - p1.progress)
        .concat(projects))]

    const [sortedProjects, setSortedProjects] = useState(sortProjects());

    const sidebarStyle = {
        width: sidebarDisplay ? "12%" : 0, 
        opacity: sidebarDisplay ? 1 : 0,
        height: document.body.offsetHeight - (document.body.offsetHeight * 0.37)
    };

    const options = [...new Set(projects.map((p) => p.keywords).flat().sort())];

    return (
        <div>
            <section>
                <img src={burger} className="searchIcon" onClick={() => setSidebarDisplay(!sidebarDisplay)}></img>
                <h1> Projects </h1>
                <div></div>
            </section>
            <div className={sidebarDisplay ? "revealed" : "hidden" } id="sidebar">
                <div className="progress_bar">
                    <label htmlFor="progress"> Progress is less than or equal to {searchParams.percentage}% </label>
                    <input type="range" 
                        step="5" 
                        min="0" 
                        max="100" 
                        id="progress"
                        list="markers" 
                        onChange={(e) => setSearchParams({...searchParams, percentage: e.target.value})} 
                    />
                    <datalist id="markers">
                        <option value="0">0%</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                        <option value="70">70%</option>
                        <option value="80">80%</option>
                        <option value="90">90%</option>
                        <option value="100">100%</option>
                    </datalist>
                </div>
                <label for="text"> Search for text in the Description or Name:
                    <input type="text" placeholder="Text Search" onChange={(e) => setSearchParams({...searchParams, text: e.target.value})} id="text"></input>
                </label>
                <label for=""> Search for Keywords for each project:
                <select onChange={(e) => setSearchParams({...searchParams, keyword: e.target.value})}> 
                    {options.map((key) => <option value={key}>{key}</option>)} 
                </select>
                </label>
                <button onClick={() => setSortedProjects(sortProjects())}> Search </button>
            </div>
            <div>
                <div className="projects">
                    {
                        sortedProjects.map((p) => 
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
}
export default Projects;