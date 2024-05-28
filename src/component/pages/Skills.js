import Skill from '../elements/Skill.js';
import '../../css/pages/Skills.css';

const skills = [
    { name: "HTML" }, 
    { name: "CSS" }, 
    { name: "JavaScript" }, 
    { name: "Java" },
    { name: "C#" }, 
    { name: "C#.NET" }, 
    { name: "ASP.NET" }, 
    { name: "Blazor" },
    { name: "Babylon.js" },
    { name: "Vue.js" },
    { name: "React.js" },
    { name: "D3.js" },
    { name: "Bootstrap" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Mongoose" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "RabbitMQ" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Azure" },
    { name: "Adobe Illustator" },
    { name: "Adobe InDesign" },
    { name: "Adobe Photoshop" },
    { name: "Atlassian\n Jira" },
    { name: "Atlassian Confluence" }
];

skills.forEach((s, i) => s.key = i);

const Skills = () => {
    return (
        <div className='skillList'>
            {
                skills.map((s) => <Skill name={s.name} key={s.key} />)
            }
        </div>
    );
}

export default Skills;