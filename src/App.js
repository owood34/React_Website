import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import {POINT, PARTICLE, VECTOR } from './particles/Particles.js'
import Navbar from './component/elements/Navbar.js';
import Landing from './component/pages/Landing.js';
import Projects from './component/pages/Projects.js';
import Skills from './component/pages/Skills.js';
import Footer from './component/elements/Footer.js';
import ProjectPage from './component/pages/ProjectPage.js';
import './css/themes/colors.css'
import './css/themes/dark.css';

const option = localStorage.getItem("option") || "dark";

const getDocHeight = () => Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight);

const getDocWidth = () => Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth);

const App = () => {
  const [mode, setMode] = useState(option);
  const projectsRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  const [page, setPage] = useState({
    height: getDocHeight(),
    width: getDocWidth()
  })

  const generatePoint = ({target, clientX, clientY}) => {
    const { top, left } = target.getBoundingClientRect();
    const num = Math.random() * 6;
    for (let i = 0; i < 6; i++) {
      particles.push(new PARTICLE(new POINT((clientX - left + (Math.random() * 10)), (clientY - top + (Math.random() * 10))), new VECTOR(Math.random() + 0.6, Math.random() * 360), Math.random() * 10 + 4));
    } 
    
    setParticles([...particles]);
  }

  const distance = (p1, p2) => Math.sqrt(Math.pow(p1.getX() - p2.getX(), 2) + Math.pow(p1.getY() - p2.getY(), 2));

  const draw = (ctx) => {
    const canvas = ctx.canvas;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "hsl(0, 2%, 21%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "hsl(199, 100%, 43%)";

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
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = getDocWidth();
    canvas.height = getDocHeight();
    const context = canvas.getContext('2d');
    let id;
    const render = () => {
      draw(context);
      id = requestAnimationFrame(render);
    }
    render();

    return () => window.cancelAnimationFrame(id);
  }, [particles]);

  setInterval(() => setPage({ height: getDocHeight(), width: getDocWidth() }), 10)

  return (
    <div className={mode}>
      <canvas ref={canvasRef} style={{width: page.width, height: page.height}} onClick={(e) => generatePoint(e) }> </canvas>
      <Navbar option={option} state={setMode} refs={[projectsRef, skillRef, aboutRef]}/>
        <Routes>
          <Route path='/' element={
            <div>
              <Landing ref={aboutRef} />
              <Skills ref={skillRef} />
              <Projects ref={projectsRef}/>
            </div>}/>
          <Route path='/projects/:name' element={ <ProjectPage /> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
