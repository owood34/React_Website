import { useState } from 'react';
import { Link } from "react-router-dom";
import "../../css/elements/Project.css";

const Project = ({ name, description, tags }) => {
    const [style, setStyle] = useState({});
    return (
        <div className="project">
            <Link to={`/projects/${name}`} onMouseOver={() => setStyle({"-webkit-line-clamp": "10"})} onMouseLeave={() => setStyle({})}>
                <div className="small_project" onClick={() => setTimeout(() => window.scroll(0, 0), 10)}>
                    <h3> {name} </h3>
                    <hr />
                    <p className="description" style={style}> {description} </p>
                    <hr />
                    <div className="tags">
                        {tags.map((t, i, a) => i < a.length - 1 ? <span> {t}, </span> : <span> {t} </span>)}
                    </div>
                    <hr />
                    <p> Click to View Page </p>
                </div>
            </Link>
        </div>
    );
}

export default Project;