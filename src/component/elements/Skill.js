import '../../css/elements/Skill.css';

const Skill = ({ name }) => {
    return (
        <div className="skillCard">
            <h3> {name} </h3>
        </div>
    )
}

export default Skill;