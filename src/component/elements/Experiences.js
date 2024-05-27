import '../../css/elements/Experiences.css';
import svg from '../../images/svg/Experiences.svg';


const Experiences = () => {
    return (
        <div className='experiences'>
            <p className='node one'> Academic Coaching </p>
            <p className='node two'> Tutoring </p>
            <p className='node three'> Mission Secure Inc. Internship </p>
            <img src={svg} />
            <p className='text'>
                I started my career journey in an internship at Mission Secure Inc, 
                where I was mostly in charge of Unit and Integration Testing for their codebase.
                However, I did other things like improve CI/CD Pipeline, 
                Debugged and Troubleshoot JavaScript and C# code, and started recreating 
                the device launching application from Python into Blazor and C#.
                <br /> <br />
                Academic Coaching and Tutoring were both jobs I took during college.
                I took these as I generally wanted to help people. So I was able to help people with time management skills, 
                and general knowledge throughout college. Later on, I took on the job of tutoring people as people needed it.
            </p>
        </div>
    );
}

export default Experiences;