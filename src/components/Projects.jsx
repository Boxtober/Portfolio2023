import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import verymountain from '../assets/img/verymountain.png';
import atomicLib from '../assets/img/atomiclib.png'
import projet1 from '../assets/img/config3d.jpg';
import projet2 from '../assets/img/neosettlers.jpg';
import projet3 from '../assets/img/integrationcss.jpg';
import projet4 from '../assets/img/portfolio.jpg';
import projet5 from '../assets/img/axiosAcnh2.jpg';
import projet6 from '../assets/img/meteo.jpg';
import petitsplats from '../assets/img/petitsplats.jpg';
import fisheye from '../assets/img/fisheye.jpg';
import booki from '../assets/img/booki.jpg';

import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "VeryMountain WEBAPP - Alternance",
      description: "Développement de nouvelles fonctionnalités, intégration de maquettes et correction de bugs.",
      imgUrl: verymountain,
      technos: "#Angular #RXJS #TypeScript #Postman #Dbeaver",
      href: "https://verymountain.fr",
      buttonDescription: "Explore !"
    },
    {
      title: "VeryMountain LIB - Alternance",
      description: "Développement et administration d'une bibliothèque de composants atomiques (atomic design).",
      technos: "#Storybook #Tailwind #SASS #Markdown",
      imgUrl: atomicLib
    }, 
  
    {
      title: "Les petits plats",
      description: "Site permettant aux utilisateurs de chercher et de filtrer des recettes de cuisine en fonction de mots-clés et de tags.",
      imgUrl: petitsplats,
      technos: "#Javascript #Algorithme #JSON #Performance ",
      href: "https://les-petits-plats-ruddy-ten.vercel.app",
      codeHref: "https://github.com/Boxtober/les-petits-plats",
      buttonDescription: "Explore !"
    },
    {
      title: "Fisheye",
      description: "Site permettant aux photographes professionnels de créer leurs portfolios en regroupant leurs travaux.",
      imgUrl: fisheye,
      technos: "#Javascript #PatternFactory #Accessibilité",
      href: "https://fisheyes-pi.vercel.app",
      codeHref: "https://github.com/Boxtober/fisheyes",
      buttonDescription: "Explore !"
    }, 
    {
      title: "Booki",
      description: "Intégration web dynamique et responsive d'après une maquette Figma.",
      imgUrl: booki,
      technos: "#Javascript #PatternFactory #Accessibilité",
      href: "https://booki-opc.netlify.app",
      codeHref: "https://github.com/Boxtober/Booki",
      buttonDescription: "Explore !"
    }, 
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
      title: "Neosettlers",
      description: "Projet de groupe (formation), Team Front : Développement de composants fonctionnels en Vue JS pour un site fictif d'offres d'emploi.. dans l'espace !",
      imgUrl: projet2,
      technos: "#VueJS #Axios #Vite #CSS #TravailEnEquipe",
      href: "https://neosettlers.netlify.app/",
      codeHref: "https://github.com/Boxtober/neo-front",
      buttonDescription: "Explore !"
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
      title: "Portfolio Automnal",
      description: "Je vous présente ici mes compétences ainsi que quelques projets web. Le site est destiné à évoluer alors n’hésitez pas à revenir quand vous le voulez !",
      technos: "#React #Bootstrap #Spline #Vite #InJuniorWeTrust",
      imgUrl: projet4,
      href: "#",
      codeHref: "https://github.com/Boxtober/Portfolio2023",
      buttonDescription: "Say Hello !"
    },
  ];
  
  return (
    <Container className="cards-container">
        { 
          projects.map((project, index) => {
            return ( 
              <ProjectCard
                  key={index}
                    {...project}
              /> )
          })
        }
      
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