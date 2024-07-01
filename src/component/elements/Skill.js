import '../../css/elements/Skill.css';
import { useState, useRef, useEffect } from 'react';

const Skill = ({ name, progress }) => {
    const style = {
        backgroundColor: `hsl(${progress}, 100%, 50%)`,
        width: `${Math.max(progress / 100 * 100, 10)}%`,
        borderRadius: 10
    }

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.45
        }

        const observer = new IntersectionObserver((entries) => {
            const [e] = entries;
            setIsVisible(e.isIntersecting);
            if (isVisible) {
                e.target.classList.add('enter');
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [ref, isVisible]);

    return (
        <div className="skillCard" ref={ref}>
            <h3> {name} </h3>
            <div className='total'>
                <div className='range' style={style}>
                    <p className='progress'> {progress}% </p>
                </div>
            </div>
        </div>
    )
}

export default Skill;