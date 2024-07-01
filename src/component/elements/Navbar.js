import { useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../../css/elements/Navbar.css';
import logo from '../../images/professional_logo_150.svg';
import burger from '../../images/burger.png';
import dropdown from '../../images/dropdown.png';

const Navbar = ({ option, state, refs }) => {
    const { pathname } = useLocation();
    const burgerRef = useRef(null);
    const [infoStyle, setInfoStyle] = useState({display: "none"});
    const [navStyle, setNavStyle] = useState({});
    const [burgerState, setBurgerState] = useState(option);
    
    const setDisplay = () => { 
        setInfoStyle(infoStyle.display === "none" ? {display: "flex"} : {display: "none"});
        burgerRef.current.src = infoStyle.display === "none" ? dropdown : burger;
    }

    const scrollTo = (ref) => ref.current.scrollIntoView({behavior: "smooth"});

    const changed = (parameter) => {
        setBurgerState({...burgerState, ...parameter})
        state(burgerState);
        localStorage.setItem('state', JSON.stringify(burgerState));
    }

    window.onscroll = () => { 
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight);
        const windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
        const scrollTopHeight = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        const trackLength = documentHeight - windowHeight;
        const percentage = Math.floor((scrollTopHeight/trackLength) * 100);

        const style = percentage >= 2 ? {opacity: "0.7", position: "sticky", top: "0", zIndex: "10"} : {};
        setNavStyle(style);
    };

    return (
        <nav style={navStyle}>
            <img src={logo} />
            { pathname === "/" ? 
            <>
                <h3 onClick={() => scrollTo(refs[2])}> About </h3>
                <h3 onClick={() => scrollTo(refs[1])}> Skills </h3>
                <h3 onClick={() => scrollTo(refs[0])}> Projects </h3>
            </> :
            <>
                <Link to="/" onClick={() => setTimeout(() => scrollTo(refs[2]), 50)}> <h3> About </h3></Link>
                <Link to="/" onClick={() => setTimeout(() => scrollTo(refs[1]), 50)}> <h3> Skills </h3></Link>
                <Link to="/" onClick={() => setTimeout(() => scrollTo(refs[0]), 50)}> <h3> Projects </h3></Link>
            </> }
            <img src={burger} id='burger' onClick={() => setDisplay()} ref={burgerRef} />
            <div anchor='burger' style={infoStyle} className='burgerInfo'>
                <div>
                    <label htmlFor='color'>Color: </label>
                    <input type='color' 
                            id='color' 
                            defaultValue={option.color}
                            onInput={(e) => changed({color: e.target.value})} />
                </div>
                <label htmlFor='size'>Size: </label>
                <div>
                    <p> { burgerState.size } </p>
                    <input type='range' 
                            id='size' 
                            defaultValue={option.size} 
                            min="1" 
                            max="10"
                            onChange={(e) => changed({size: +(e.target.value)})} />
                </div>
                <label htmlFor='count'>Count: </label>
                <div>
                    <p> { burgerState.count } </p>
                    <input type='range' 
                            id='count' 
                            defaultValue={option.count} 
                            min="1" 
                            max="10"
                            onChange={(e) => changed({count: +(e.target.value)})} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;