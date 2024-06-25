import { useLocation } from 'react-router-dom';
import {POINT, PARTICLE, VECTOR } from '../../particles/Particles.js';
import { useEffect, useState, useRef } from 'react';

const getDocHeight = () => Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight);
  
  const getDocWidth = () => Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth);

const Background = (state) => {
    const ref = useRef(null);
    const [particles, setParticles] = useState([]);
    const location = useLocation();
    console.log(state);

    const [page, setPage] = useState({
        height: getDocHeight(),
        width: getDocWidth()
    });

    const generatePoint = ({target, clientX, clientY}) => {
        const { top, left } = target.getBoundingClientRect();
        for (let i = 0; i < state.state.count; i++) {
            particles.push(new PARTICLE(new POINT((clientX - left + (Math.random() * 10)), (clientY - top + (Math.random() * 10))), 
                new VECTOR(Math.random() + 0.6, Math.random() * 360), Math.random() * 10 + state.state.size));
        } 
    
        setParticles([...particles]);
    }

    useEffect(() => {
        const canvas = ref.current;
        canvas.width = getDocWidth();
        canvas.height = getDocHeight();
        const ctx = canvas.getContext('2d');
        let id;
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.fillStyle = "hsl(0, 2%, 21%)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = state.state.color;

            particles.forEach((p1, i) => {
                p1.age();
                if (p1.getWeight() > 0) {
                    p1.updatePosition(canvas.width, canvas.height);
                    ctx.moveTo(p1.getPoint().getX(), p1.getPoint().getY());
                    ctx.arc(p1.getPoint().getX(), p1.getPoint().getY(), p1.getWeight(), 0, Math.PI * 2);
                } else {
                    particles.splice(i, 1);
                    setParticles([...particles]);
                }
            });

            ctx.fill();
            ctx.closePath();

            id = requestAnimationFrame(render);
        }
        render();

        return () => window.cancelAnimationFrame(id);
    }, [particles, state]);

    useEffect(() => {
        const render = () => {
            setPage({ height: 0, width: 0 });
            setTimeout(() => setPage({ height: getDocHeight(), width: getDocWidth() }), 10);
        }
        render();
        window.addEventListener('resize', () => render());

    }, [location]);

    return (
        <canvas ref={ref} style={page} onClick={(e) => generatePoint(e) } />
    );
}

export default Background;