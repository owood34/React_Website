import { Link } from "react-router-dom";
import "../../css/elements/Project.css";

const Project = ({ name, progress, description }) => {
    return (
        <div className="project">
            <Link to={`/projects/${name}`}>
                <div className="small_project">
                    <h3> {name} </h3>
                </div>
            </Link>
        </div>
    );
}

export default Project;