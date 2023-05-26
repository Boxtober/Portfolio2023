import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import next from '../assets/img/icon/next.png';

import projet1 from '../assets/img/config3d.jpg';
import projet2 from '../assets/img/meteo.jpg';
import projet3 from '../assets/img/integrationcss.jpg';
import projet4 from '../assets/img/portfolio.jpg';

export function Cards() {
  return (
<>
    <div className="cardsGroup">
        <div className="cardBackground">
            <Card className="mainCard">
            <Card.Img variant="top" src={projet1} alt="page web"/>
            <Card.Body>
                <h4 style={{ color: 'black', padding: '0' }}>Mug Custom</h4>
                <p>
                    Un configurateur permettant d'interagir avec un objet 3d et le 
                    personnaliser en temps réel, directement depuis le navigateur.
                    <br /><br />
                    <span className="bold">#React #ThreeJs #React-three-fiber</span>
                </p>
                <a href="https://github.com/Boxtober/Custom3D" target="_blank">
                    <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>See soon !</Button>  
                </a>
                <a href="https://github.com/Boxtober/Custom3D" target="_blank">
                    <Button variant="dark" className='codeBtn'> Code </Button>
                </a>

            </Card.Body>
            </Card>
        </div>
        {/******************************************* CARTE 2 ******************************************/}

        <div className="cardBackground">
            <Card className="mainCard">

            <Card.Img variant="top" src={projet2} alt="page web"/>
            <Card.Body>
                <h4 style={{ color: 'black', padding: '0' }}>App Météo</h4>
                <p>
                    Une Single Page Applications permettant à l’utilisateur d’entrer le nom d’une 
                    ville afin de connaître ses conditions météorologiques.
                    <br /><br />
                <span className="bold">#Javascript #API #Ajax</span>
                </p>
                
                <a href="https://api-meteo-nine.vercel.app/" target="_blank">
                    <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>Explore !</Button>  
                </a>
                <a href="https://github.com/Boxtober/api-meteo" target="_blank">
                    <Button variant="dark" className='codeBtn'> Code </Button>
                </a>
            </Card.Body>
            </Card>
        </div>

    </div>
{/******************************************* CARTE 3 ******************************************/}

    <div className="cardsGroup">


        <div className="cardBackground">
            <Card className="mainCard">
            <Card.Img variant="top" src={projet3} alt="page web"/>
            <Card.Body>
                <h4 style={{ color: 'black', padding: '0' }}>Intégration</h4>
                <p>
                Intégration web dynamique et responsive d'après une maquette Figma. Développement Vanilla CSS et Javascript.
                <br /><br />
                <span className="bold">#Html #CSS #Javascript</span>
                </p>
                
                <a href="https://integrationcss-vy0d95q5i-boxtober.vercel.app/" target="_blank">
                    <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>Explore !</Button>  
                </a>
                <a href="https://github.com/Boxtober/pilotin-test" target="_blank">
                    <Button variant="dark" className='codeBtn'> Code </Button>
                </a>
            </Card.Body>
            </Card>
        </div>

        <div className="cardBackground">
            <Card className="mainCard">
            <Card.Img variant="top" src={projet4} alt="page web"/>
            <Card.Body>
                <h4 style={{ color: 'black', padding: '0' }}>Portfolio Automnal</h4>
                <p>
                Je vous présente ici mes compétences ainsi que quelques projets web. 
                Le site est destiné à évoluer alors n’hésitez pas à revenir quand vous le voulez !
                <br /><br />
                <span className="bold">#React #Bootstrap #Spline #Vite</span>
                </p>
                <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>Explore !</Button>  
                <Button variant="dark" className='codeBtn'> Code </Button>
            </Card.Body>
            </Card>
        </div>

    </div>
    <a href="https://github.com/Boxtober" target="_blank">
        <img src={next} alt="Flèche Suivante" />
    </a>

        

</>

    

    
   
  );
}

