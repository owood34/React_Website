import { useRef, useState } from 'react';
import photo from '../../images/professional_photo.jpg';
import AboutMe from '../elements/AboutMe.js';
import "../../css/pages/Landing.css";
import Experiences from '../elements/Experiences.js';

const Landing = () => {
    const infoList = [
        <AboutMe/>,
        <Experiences/>,
        "Eget felis eget nunc lobortis mattis aliquam. Ante metus dictum at tempor. Nec feugiat nisl pretium fusce id velit. Porttitor lacus luctus accumsan tortor posuere ac ut. At volutpat diam ut venenatis tellus in. Tristique et egestas quis ipsum suspendisse ultrices gravida. Tellus integer feugiat scelerisque varius. Enim ut sem viverra aliquet eget sit amet tellus. Amet aliquam id diam maecenas ultricies mi eget. Donec massa sapien faucibus et molestie. Ultrices sagittis orci a scelerisque purus semper eget duis. Cursus sit amet dictum sit amet justo donec enim diam. Ipsum suspendisse ultrices gravida dictum fusce. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ullamcorper sit amet risus nullam eget felis eget. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Dolor sit amet consectetur adipiscing. In hac habitasse platea dictumst quisque sagittis purus."
    ]
    
    const aboutMeRef = useRef(null);
    const [info, setInfo] = useState("");

    const rotateInfo = (target, section = 0) => {
        [...aboutMeRef.current.getElementsByTagName("h1")].forEach((elm) => elm.classList.remove("highlighted"));
        target.classList.add("highlighted");
        setInfo(infoList[section % infoList.length]);
    }

    return (
        <div className='landing'>
            <div className="about-me" ref={aboutMeRef}>
                <img src={photo} className='me'></img>
                <h1 onClick={(e) => rotateInfo(e.target)}> About Me </h1>
                <h1 onClick={(e) => rotateInfo(e.target, 1)}> Experiences </h1>
                <h1 onClick={(e) => rotateInfo(e.target, 2)}> Skills </h1>
            </div>
            <div className='info'>
                {info}
            </div>
        </div>
    );
}

export default Landing;