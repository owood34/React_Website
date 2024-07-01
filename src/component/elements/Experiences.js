import '../../css/elements/Experiences.css';
import svg from '../../images/svg/Experiences.svg';


const Experiences = () => {
    return (
        <div className='experiences'>
            <div>
                <img src={svg} alt="GitHub Branch with previous jobs on their nodes." />
            </div>
            <p className='text'>
                I began my career journey with an internship at Mission Secure Inc., where my primary responsibility was Unit and Integration Testing for their codebase. 
                In addition to these tasks, I improved the CI/CD pipeline, debugged and troubleshooted JavaScript and C# code, 
                and started recreating the device-launching application from Python into Blazor and .NET MAUI.
                <br /> <br />
                During college, I worked as an Academic Coach and Tutor. 
                I took these roles to help others, assisting with time management skills and providing general academic support. 
                Eventually, I focused more on tutoring, offering personalized assistance as needed.
            </p>
        </div>
    );
}

export default Experiences;