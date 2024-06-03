import { useState } from 'react';
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
    const updateDisplay = () => {
        let newMode = Object.keys(modes)[(Object.keys(modes).findIndex(k => k === mode) + 1) % 3];
        setMode(newMode);
        state(newMode);
        changeDisplay(mode);
        localStorage.setItem("option", newMode);
    }

    const scrollTo = (ref) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth'});

    return (
        <nav>
            <img src={logo} />
            <Link to="/"> Home </Link>
            <h3 onClick={() => scrollTo(refs[1])}> Skills </h3>
            <h3 onClick={() => scrollTo(refs[0])}> Projects </h3>
            <img src={changeDisplay(mode)} className="changeDisplay" onClick={() => updateDisplay()} />
        </nav>
    );
}

function changeDisplay(option) {
    return modes[option] || dark;
}

export default Navbar;