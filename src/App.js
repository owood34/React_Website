import { useState, useRef } from 'react'
import './css/themes/colors.css'
import './css/themes/dark.css';
import Navbar from './component/elements/Navbar.js';
import Landing from './component/pages/Landing.js';
import Projects from './component/pages/Projects.js';
import Footer from './component/elements/Footer.js';

const option = localStorage.getItem("option") || "dark";

const App = () => {
  const [mode, setMode] = useState(option);
  const projectsRef = useRef(null);
  const skillRef = useRef(null)
  return (
    <div className={mode}>
      <Navbar option={option} state={setMode} refs={[projectsRef, skillRef]}/>
      <Landing ref={skillRef}/>
      <Projects ref={projectsRef}/>
      <Footer/>
    </div>
  );
}

export default App;
