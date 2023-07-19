import { Banner } from "./components/Banner.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Skills } from "./components/Skills.jsx";
import { SkillsJS } from "./components/SkillsJS.jsx";
import { Cards } from "./components/Cards.jsx"
import { Contact } from "./components/Contact.jsx"
import { Footer } from "./components/Footer.jsx"
import { Projects } from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <Suspense fallback={<div className="loader-container"><div className="spinner"></div></div>}>
      <div className="backgroundApp">
        <NavBar />
        <div className="App">
          <Banner />
          <div className="canvasContainer">
            <Spline scene="https://prod.spline.design/fghBIT90pOTk1zVO/scene.splinecode" /> 
            <div className="divVide"></div>
          </div>
          <Skills />
          <SkillsJS />
          <div className="txtCards" id='Projects'>
            <h2>Projets développement web.</h2>
            <h3>Quelques projets réalisés dans le cadre de ma formation :</h3>
          </div>
          <div className="projectsContainer">
          <Projects /></div>
          {/**<Cards /> */}
          <Contact />
          <Footer />
        </div> 
      </div>
      
    </Suspense>
  );
}

