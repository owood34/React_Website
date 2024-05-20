import { Link } from 'react-router-dom';
import '../../css/elements/Footer.css';
import logo from '../../images/professional_logo_150.svg';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import github from '../../images/github.png';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <img src={logo} className='logo'></img>
                <div className='contact'>
                    <img src={phone}></img>
                    <p> 434-709-0073 </p>
                </div>
                <div className='contact'>
                    <img src={email}></img>
                    <p> owenwood3435@outlook.com</p>
                </div>
                <div className='contact'>
                    <img src={github}></img>
                    <p> 0wenW00d </p>
                </div>
            </div>
            <div className='sitemap'>
                <Link to="/"> Home </Link>
                <Link to="/#about-me"> About Me </Link>
                <Link to="/#education"> Education </Link>
                <Link to="/#experience"> Experience </Link>
                <Link to="/skills"> Skills </Link>
                <Link to="/projects"> Projects </Link>
            </div>
        </div>
    );
}

export default Footer;