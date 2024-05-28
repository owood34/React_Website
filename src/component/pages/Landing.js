import { useRef, useState, forwardRef } from 'react';
import photo from '../../images/professional_photo.jpg';
import AboutMe from '../elements/AboutMe.js';
import Skills from '../pages/Skills.js';
import "../../css/pages/Landing.css";
import Experiences from '../elements/Experiences.js';

const Landing = forwardRef(({}, ref) => {
    const infoList = [
        <AboutMe/>,
        <Experiences/>,
        <Skills/>
    ]
    
    const aboutMeRef = useRef(null);
    const [info, setInfo] = useState(infoList[0]);

    const rotateInfo = (target, section = 0) => {
        [...aboutMeRef.current.getElementsByTagName("h1")].forEach((elm) => elm.classList.remove("highlighted"));
        target.classList.add("highlighted");
        setInfo(infoList[section % infoList.length]);
    }

    return (
        <div className='landing' ref={ref}>
            <div className="about-me" ref={aboutMeRef}>
                <img src={photo} className='me'></img>
                <h1 className="highlighted" onClick={(e) => rotateInfo(e.target)}> About Me </h1>
                <h1 onClick={(e) => rotateInfo(e.target, 1)}> Experiences </h1>
                <h1 onClick={(e) => rotateInfo(e.target, 2)}> Skills </h1>
            </div>
            <div className='info'>
                {info}
            </div>
        </div>
    );
});

export default Landing;