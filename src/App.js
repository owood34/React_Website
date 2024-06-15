import { useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/elements/Navbar.js';
import Landing from './component/pages/Landing.js';
import Projects from './component/pages/Projects.js';
import Skills from './component/pages/Skills.js';
import Footer from './component/elements/Footer.js';
import ProjectPage from './component/pages/ProjectPage.js';
import './css/themes/colors.css'
import './css/themes/dark.css';

const option = localStorage.getItem("option") || "dark";

const App = () => {
  const [mode, setMode] = useState(option);
  const projectsRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <div className={mode}>
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
