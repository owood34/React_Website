import photo from '../../images/professional_photo.jpg';
import "../../css/pages/Landing.css";

const Landing = () => {
    return (
        <div className='landing'>
            <div className="about-me">
                <img src={photo} className='me'></img>
                <div>
                    <h1> About Me </h1>
                    <p> Hello, I am Owen Wood</p>
                </div>
            </div>
            <div className="education">
                <h1> Education </h1>
            </div>
            <div className='experience'>
                <h1> Experiences </h1>
            </div>
        </div>
    );
}

export default Landing;