import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import '../../css/elements/Navbar.css';
import logo from '../../images/professional_logo_150.svg';
import dark from '../../images/modes/dark.png';
import light from '../../images/modes/light.png';
import medieval from '../../images/modes/medieval.png';

const modes = {
    dark: light,
    light: medieval,
    medieval: dark
}

const Navbar = ({ option, state, refs }) => {
    const [mode, setMode] = useState(option);
    const carousel = useRef(null)
    const updateDisplay = () => {
        if (carousel.current) {
            let children = [...carousel.current.children];
            carousel.current.replaceChildren(...children.map((_, index, arr) => arr[(index + 1) % arr.length]))
            state([...carousel.current.children][0].id)
        }
    }

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: "smooth"});
    };

    return (
        <nav>
            <img src={logo} />
            <Link to="/"> Home </Link>
            <h3 onClick={() => scrollTo(refs[1])}> Skills </h3>
            <h3 onClick={() => scrollTo(refs[0])}> Projects </h3>
            <div className='carousel' ref={carousel} onClick={() => updateDisplay()}>
                <img src={light} className='changeDisplay' id="dark" />
                <img src={medieval} className='changeDisplay' id="light" />
                <img src={dark} className='changeDisplay' id="medieval" />
            </div>
        </nav>
    );
}

function changeDisplay(option) {
    return modes[option] || dark;
}

export default Navbar;