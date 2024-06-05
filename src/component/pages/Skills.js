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
    { name: "Vue.js", progress: 75 },
    { name: "Bootstrap", progress: 80 },
    { name: "Express.js", progress: 80 },
]

const enviornment = [
    { name: "Node.js", progress: 80 },
]

const libraries = [
    { name: "Babylon.js", progress: 70 },
    { name: "React.js", progress: 65 },
    { name: "D3.js", progress: 85 },
    { name: "Mongoose", progress: 80 },
    { name: "EasyOCR", progress: 25 },
    { name: "OpenCV", progress: 20 },
    { name: "argparse", progress: 50 },
    { name: "difflib", progress: 20 }
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

const total_skills = [...languages, ...frameworks, ...enviornment, ...libraries, ...databases, ...infastructor, ...tools, ...other_tools];

languages.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
frameworks.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
enviornment.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
libraries.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
databases.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
infastructor.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
tools.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
other_tools.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));

total_skills.forEach((s, i) => s.key = i);

const Skills = forwardRef(({}, ref) => {
    return (
        <div className='skillList' ref={ref}>
            <h1> Skills </h1>
            <section>
                <h2> Programming Languages </h2>
                <div>
                    {languages.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Frameworks </h2>
                <div>
                    {frameworks.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Runtime Enviornments </h2>
                <div>
                    {enviornment.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Libraries </h2>
                <div>
                    {libraries.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Databases </h2>
                <div>
                    {databases.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Infastructor </h2>
                <div>
                    {infastructor.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Programming Tools </h2>
                <div>
                    {tools.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
            <section>
                <h2> Other Tools </h2>
                <div>
                    {other_tools.map((s) => <Skill name={s.name} progress={s.progress} key={s.key} />)}
                </div>
            </section>
        </div>
    );
});

export default Skills;