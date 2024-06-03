import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const { name } = useParams();
    return (
        <h1> { name } </h1>
    );
}

export default ProjectPage;