import '../../css/elements/Skill.css';

const Skill = ({ name, progress }) => {
    const style = {
        backgroundColor: `hsl(${progress}, 100%, 50%)`,
        width: `${Math.max(progress / 100 * 100, 10)}%`,
        borderRadius: 10
    }

    return (
        <div className="skillCard">
            <h3> {name} </h3>
            <div className='total'>
                <div className='range' style={style}>
                    <p className='progress'> {progress}% </p>
                </div>
            </div>
        </div>
    )
}

export default Skill;