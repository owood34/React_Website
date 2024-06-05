import { Link } from "react-router-dom";
import "../../css/elements/Project.css";

const Project = ({ name, description, tags }) => {
    console.log(tags);
    return (
        <div className="project">
            <Link to={`/projects/${name}`}>
                <div className="small_project">
                    <h3> {name} </h3>
                    <hr />
                    <p> {description} </p>
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