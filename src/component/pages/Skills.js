import Skill from '../elements/Skill.js';
import '../../css/pages/Skills.css';
import { forwardRef } from 'react';

const languages = [
    { name: "HTML", progress: 90 }, 
    { name: "CSS", progress: 90 }, 
    { name: "JavaScript", progress: 90 }, 
    { name: "Java", progress: 80 },
    { name: "C#", progress: 80 },
    { name: "C", progress: 40 },
    { name: "C++", progress: 40 },
    { name: "Python", progress: 30 } 
]

const frameworks = [
    { name: ".NET MAUI", progress: 50 },  
    { name: "Blazor", progress: 50 },
    { name: "Babylon.js", progress: 70 },
    { name: "Vue.js", progress: 75 },
    { name: "React.js", progress: 65 },
    { name: "D3.js", progress: 85 },
    { name: "Bootstrap", progress: 80 },
    { name: "Node.js", progress: 80 },
    { name: "Express.js", progress: 80 },
    { name: "Mongoose", progress: 80 },
]

const databases = [
    { name: "MySQL", progress: 70 },
    { name: "MongoDB", progress: 90 },
    { name: "PostgreSQL", progress: 50 },
]

const infastructor = [
    { name: "Docker", progress: 20 },
    { name: "RabbitMQ", progress: 20 },
]

const tools = [
    { name: "Git", progress: 70 },
    { name: "GitHub", progress: 80 },
    { name: "Azure", progress: 80 },
    { name: "Atlassian Jira", progress: 70 },
    { name: "Atlassian Confluence", progress: 70 }
]

const other_tools = [
    { name: "Adobe Illustator", progress: 60 },
    { name: "Adobe InDesign", progress: 60 },
    { name: "Adobe Photoshop", progress: 60 },
]

const Skills = forwardRef(({}, ref) => {
    return (
        <div className='skillList' ref={ref}>
            <h1> Skills </h1>
            <section>
                <h2> Programming Languages </h2>
                <div>
                    {languages.map((s) => <Skill name={s.name} progress={s.progress} />)}
                </div>
            </section>
            <section>
                <h2> Frameworks and Libraries </h2>
                <div>
                    {frameworks.map((s) => <Skill name={s.name} progress={s.progress} />)}
                </div>
            </section>
            <section>
                <h2> Databases </h2>
                <div>
                    {databases.map((s) => <Skill name={s.name} progress={s.progress} />)}
                </div>
            </section>
            <section>
                <h2> Infastructor </h2>
                <div>
                    {infastructor.map((s) => <Skill name={s.name} progress={s.progress} />)}
                </div>
            </section>
            <section>
                <h2> Programming Tools </h2>
                <div>
                    {tools.map((s) => <Skill name={s.name} progress={s.progress} />)}
                </div>
            </section>
            <section>
                <h2> Other Tools </h2>
                <div>
                    {other_tools.map((s) => <Skill name={s.name} progress={s.progress} />)}
                </div>
            </section>
        </div>
    );
});

export default Skills;