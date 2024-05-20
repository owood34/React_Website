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

const Navbar = ({ option, state }) => {
    const [mode, setMode] = useState(option);
    const updateDisplay = () => {
        let newMode = Object.keys(modes)[(Object.keys(modes).findIndex(k => k === mode) + 1) % 3];
        setMode(newMode);
        state(newMode);
        changeDisplay(mode);
    }
    return (
        <nav>
            <img src={logo} />
            <Link to="/"> Home </Link>
            <Link to="/skills"> Skills </Link>
            <Link to="/projects"> Projects </Link>
            <img src={changeDisplay(mode)} className="changeDisplay" onClick={() => updateDisplay()} />
        </nav>
    );
}

function changeDisplay(option) {
    return modes[option] || dark;
}

export default Navbar;