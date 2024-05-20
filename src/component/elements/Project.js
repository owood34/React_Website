import { useState } from "react";
import "../../css/elements/Project.css";

const Project = ({ name, progress, description }) => {
    const style = {
        backgroundColor: `hsl(${progress}, 100%, 50%)`,
        width: `${Math.max(progress / 100 * 100, 14)}%`,
        borderRadius: 10
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="project">
            <div className="small_project" onClick={() => setIsOpen(!isOpen)}>
                <h3> {name} </h3>
                <div className="total">
                    <div className="range" style={style}>
                        <p> {progress}% </p>
                    </div>
                </div>
                <p className={isOpen ? "revealed" : "hidden"} id="info"> 
                    {description} 
                </p>
            </div>
        </div>
    );
}

export default Project;