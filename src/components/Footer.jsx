
import logo from "../assets/img/logo.png";

import linkedin from '../assets/img/icon/linkedin.svg';
import behance from '../assets/img/icon/behance.svg';
import github from '../assets/img/icon/github.svg';
import codepen from '../assets/img/icon/codepen.svg';
import codewars from '../assets/img/icon/codewars.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className='logoIcon'/>
        <div className="copyright">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/boxtober" target="_blank"><img src={linkedin} alt="Linkedin Icon"/></a>
            <a href="https://www.behance.net/as-artwork" target="_blank"><img src={behance} alt="Behance Icon"/></a>
            <a href="https://github.com/Boxtober" target="_blank"><img src={github} alt="Github Icon"/></a>
            <a href="https://codepen.io/sabrina-a" target="_blank"><img src={codepen} alt="Codepen Icon"/></a>
            <a href="https://www.codewars.com/users/box.tober" target="_blank"><img src={codewars} alt="Codewars Icon"/></a> 
          </div>
          <p>Created with 💛 by Sabrina Affane - 2023. Copyright © by Sabrina Affane. Always open to job propositions ! 📮</p>
        </div>
    </footer>
  )
}
