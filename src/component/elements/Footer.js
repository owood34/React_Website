import '../../css/elements/Footer.css';
import logo from '../../images/professional_logo_150.svg';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import github from '../../images/github.png';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <section>
                    <img src={logo} className='logo' alt="Logo"></img>
                </section>
                <div className='contact noclick'>
                    <img src={phone} alt="Phone Number"></img>
                    <p> 434-709-0073 </p>
                </div>
                <div className='contact' onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=owenwood3435@outlook.com')}>
                    <img src={email} alt="Gmail link"></img>
                    <p> owenwood3435@outlook.com</p>
                </div>
                <div className='contact' onClick={() => window.open('https://github.com/owood34')}>
                    <img src={github} alt="GitHub link"></img>
                    <p> owood34 </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;