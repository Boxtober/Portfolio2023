import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/icon/linkedin.svg';
import behance from '../assets/img/icon/behance.svg';
import github from '../assets/img/icon/github.svg';
import codepen from '../assets/img/icon/codepen.svg';
import codewars from '../assets/img/icon/codewars.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";


import { useState, useEffect } from "react";


export const NavBar = () => {

  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Router>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>

      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className='logoIcon'/>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          <Nav.Link href="#Contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
        </Nav>
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/boxtober" target="_blank"><img src={linkedin} alt="Linkedin Icon"/></a>
          <a href="https://www.behance.net/as-artwork" target="_blank"><img src={behance} alt="Behance Icon"/></a>
          <a href="https://github.com/Boxtober" target="_blank"><img src={github} alt="Github Icon"/></a>
          <a href="https://codepen.io/sabrina-a" target="_blank"><img src={codepen} alt="Codepen Icon"/></a>
          <a href="https://www.codewars.com/users/box.tober" target="_blank"><img src={codewars} alt="Codewars Icon"/></a> 
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Router>
  )
}