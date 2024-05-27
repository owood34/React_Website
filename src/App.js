import { Route, Routes } from 'react-router-dom';
import { useState, useRef } from 'react'
import './css/themes/colors.css'
import './css/themes/dark.css';
import Navbar from './component/elements/Navbar.js';
import Landing from './component/pages/Landing.js';
import Skills from './component/pages/Skills.js';
import Projects from './component/pages/Projects.js';
import Footer from './component/elements/Footer.js';

const option = localStorage.getItem("option") || "dark";

const App = () => {
  const [mode, setMode] = useState(option);
  const projectsRef = useRef(null);
  return (
    <div className={mode}>
      <Navbar option={option} state={setMode} refs={projectsRef}/>
      <Landing/>
      <Projects ref={projectsRef}/>
      <Footer/>
    </div>
  );
}

export default App;
