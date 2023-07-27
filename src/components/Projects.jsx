import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import projet1 from '../assets/img/config3d.jpg';
import projet2 from '../assets/img/neosettlers.jpg';
import projet3 from '../assets/img/integrationcss.jpg';
import projet4 from '../assets/img/portfolio.jpg';
import projet5 from '../assets/img/axiosAcnh2.jpg';
import projet6 from '../assets/img/meteo.jpg';

import 'animate.css';

export const Projects = () => {

  const projects = [

    {
      title: "Mug Custom",
      description: "Un configurateur permettant d'interagir avec un objet 3d et le personnaliser en temps réel, directement depuis le navigateur.",
      imgUrl: projet1,
      technos: "#React #ThreeJs #React-three-fiber",
      href: "#",
      codeHref: "https://github.com/Boxtober/Custom3D",
      buttonDescription: "See Soon !"
    },
    {
      title: "Villagers' list",
      description: "Petite interface dans laquelle j'ai effectué une requête pour récupérer des données API au format JSON à l'aide de Axios. J'ai choisi une API Animal Crossing afin d'afficher tous les villageois disponibles dans le jeu.",
      imgUrl: projet5,
      technos: "#React #Axios #Sass #API",
      href: "https://ac-villagerslists.netlify.app/",
      codeHref: "https://github.com/Boxtober/AnimalCrossing-Villagers/tree/main",
      buttonDescription: "Explore !"
    },
    {
      title: "Neosettlers",
      description: "Projet de groupe (formation), Team Front : Développement de composants fonctionnels en Vue JS pour un site fictif d'offres d'emploi.. dans l'espace !",
      imgUrl: projet2,
      technos: "#VueJS #Axios #Vite #CSS #TravailEnEquipe",
      href: "https://neosettlers.netlify.app/",
      codeHref: "https://github.com/Boxtober/neo-front",
      buttonDescription: "Explore !"
    },
    {
      title: "App Météo",
      description: "Une Single Page Applications permettant à l’utilisateur d’entrer le nom d’une ville afin de connaître ses conditions météorologiques.",
      imgUrl: projet6,
      technos: "#Javascript #API #Ajax",
      href: "https://api-meteo-nine.vercel.app/",
      codeHref: "https://github.com/Boxtober/api-meteo",
      buttonDescription: "Explore !"
    },
    {
      title: "Portfolio Automnal",
      description: "Je vous présente ici mes compétences ainsi que quelques projets web. Le site est destiné à évoluer alors n’hésitez pas à revenir quand vous le voulez !",
      technos: "#React #Bootstrap #Spline #Vite #InJuniorWeTrust",
      imgUrl: projet4,
      href: "#",
      codeHref: "https://github.com/Boxtober/Portfolio2023",
      buttonDescription: "Say Hello !"
    },
    {
      title: "Intégration",
      description: "Intégration web dynamique et responsive d'après une maquette Figma. Développement Vanilla CSS et Javascript.",
      technos: "#Html #CSS #Javascript",
      imgUrl: projet3,
      href: "https://integrationcss-vy0d95q5i-boxtober.vercel.app/",
      codeHref: "https://github.com/Boxtober/pilotin-test",
      buttonDescription: "Explore !"
    }, 
    
  ];
  return (
    <Container>
      <Row>
        { 
          projects.map((project, index) => {
            return ( 
              <ProjectCard
                  key={index}
                    {...project}
              /> )
          })
        }
      </Row>
    </Container>       
  )
}







/*

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import projImg1 from '../assets/img/portfolio.jpg';
import projImg2 from '../assets/img/portfolio.jpg';
import projImg3 from '../assets/img/portfolio.jpg';

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}*/