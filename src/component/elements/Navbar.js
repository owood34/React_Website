import { useRef } from 'react';
import { Link } from "react-router-dom";
import '../../css/elements/Navbar.css';
import logo from '../../images/professional_logo_150.svg';
import dark from '../../images/modes/dark.png';
import light from '../../images/modes/light.png';
import medieval from '../../images/modes/medieval.png';

const Navbar = ({ option, state, refs }) => {
    const carousel = useRef(null);
    let images = [
        <img src={light} className='changeDisplay' id="dark" loading='lazy' />,
        <img src={medieval} className='changeDisplay' id="light" loading='lazy' />,
        <img src={dark} className='changeDisplay' id="medieval" loading='lazy' />
    ];

    const rotateDisplay = (arr, i = 1) => arr.map((_, index, a) => a[(index + i) % a.length]);

    const updateDisplay = () => {
        if (carousel.current) {
            carousel.current.replaceChildren(...rotateDisplay([...carousel.current.children]));
            state([...carousel.current.children][0].id);
            localStorage.setItem("option", [...carousel.current.children][0].id);
        }
    }

    const scrollTo = (ref) => ref.current.scrollIntoView({behavior: "smooth"});

    images = rotateDisplay(images, option === "light" ? 1 : option === "medieval" ? 2 : 0);

    return (
        <nav>
            <img src={logo} />
            <Link to="/"> Home </Link>
            <h3 onClick={() => scrollTo(refs[1])}> Skills </h3>
            <h3 onClick={() => scrollTo(refs[0])}> Projects </h3>
            <div className='carousel' ref={carousel} onClick={() => updateDisplay()}>
                { images }
            </div>
        </nav>
    );
}

export default Navbar;