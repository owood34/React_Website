import { useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../../css/elements/Navbar.css';
import logo from '../../images/professional_logo_150.svg';
import dark from '../../images/modes/dark.png';
import light from '../../images/modes/light.png';
import medieval from '../../images/modes/medieval.png';

const Navbar = ({ option, state, refs }) => {
    const { pathname } = useLocation();
    console.log(pathname);
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

    const [style, setStyle] = useState({});

    window.onscroll = () => { 
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight);
        const windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
        const scrollTopHeight = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        const trackLength = documentHeight - windowHeight;
        const percentage = Math.floor((scrollTopHeight/trackLength) * 100);

        const style = percentage >= 2 ? {opacity: "0.7", position: "sticky", top: "0"} : {};
        setStyle(style);
    };

    return (
        <nav style={style}>
            <img src={logo} />
            { pathname === "/" ? 
            <>
                <h3 onClick={() => scrollTo(refs[2])}> About </h3>
                <h3 onClick={() => scrollTo(refs[1])}> Skills </h3>
                <h3 onClick={() => scrollTo(refs[0])}> Projects </h3>
            </> :
            <>
                <Link to="/" onClick={() => setTimeout(() => scrollTo(refs[2]), 100)}> About </Link>
                <Link to="/" onClick={() => setTimeout(() => scrollTo(refs[1]), 100)}> Skills </Link>
                <Link to="/" onClick={() => setTimeout(() => scrollTo(refs[0]), 100)}> Projects </Link>
            </>
            }
            <div className='carousel' ref={carousel} onClick={() => updateDisplay()}>
                { images }
            </div>
        </nav>
    );
}

export default Navbar;