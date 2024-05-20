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
            description: "What if this is like a giant paragraph that is way bigger than 10% because this is a test for character limit and interaction. I am curious if I should make this a popup instead while I am writing this. Thank you for your time."
        },
        {
            name: "Minecraft Zombie Apacolpyse Plugin",
            progress: 100,
            description: ""
        },
        {
            name: "Minecraft Medieval Plus Plugin",
            progress: 100,
            description: ""
        },
        {
            name: "StudyBuddy",
            progress: 90,
            description: ""
        },
        {
            name: "Ernie Eats",
            progress: 75,
            description: ""
        },
        {
            name: "3d Render of a Painting in Babylon",
            progress: 95,
            description: ""
        },
        {
            name: "Tic Tac Toe Games in C",
            progress: 100,
            description: ""
        },
        {
            name: "Snake in Javascript",
            progress: 60,
            description: ""
        },
        {
            name: "Vue.js Site",
            progress: 90,
            description: ""
        },
        {
            name: "React.js Site",
            progress: 80,
            description: ""
        },
        {
            name: "Server and Client in C",
            progress: 90,
            description: ""
        },
        {
            name: "Learning Python",
            progress: 0,
            description: ""
        },
        {
            name: "Learning Angular",
            progress: 0,
            description: ""
        },
    );

    projects.forEach((p, i) => p.key = i);
    const [sidebarDisplay, setSidebarDisplay] = useState(false);
    const [searchParams, setSearchParams] = useState({
        text: "",
        percentage: 100,
    });

    const sortProjects = () => projects.filter((p) => p.progress <= searchParams.percentage && 
                                            (p.description.includes(searchParams.text) || 
                                            p.name.includes(searchParams.text))).sort((a, b) => b.progress - a.progress);

    const [sortedProjects, setSortedProjects] = useState(sortProjects());
    
    const sidebarStyle = {
        width: sidebarDisplay ? "12%" : 0, 
        opacity: sidebarDisplay ? 1 : 0,
        height: document.body.offsetHeight - (document.body.offsetHeight * 0.37)
    };

    return (
        <div>
            <section>
                <img src={burger} className="searchIcon" onClick={() => setSidebarDisplay(!sidebarDisplay)}></img>
                <h1> Projects </h1>
                <div></div>
            </section>
            <div className={sidebarDisplay ? "revealed" : "hidden" } id="sidebar">
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
            <div>
                <div className="projects">
                    {sortedProjects.map((p) => <Project name={p.name} description={p.description} progress={p.progress} key={p.key}/>)}
                </div>
            </div>
        </div> 
    );
}

/**
 * <div style={sidebarStyle} id="sidebar">
                    <h3> Search Options </h3>
                    <input type="text" placeholder="Text Search" onChange={(e) => setSearchParams({...searchParams, text: e.target.value})}></input>
                    <label> Less Than Or Equal To {searchParams.percentage}
                        <input type="range" min="0" max="100" step="5" value={searchParams.percentage} onChange={(e) => setSearchParams({...searchParams, percentage: e.target.value})}></input>
                    </label>
                    <button onClick={() => setSortedProjects(sortProjects())}> Search </button>
                </div>
 */

export default Projects;