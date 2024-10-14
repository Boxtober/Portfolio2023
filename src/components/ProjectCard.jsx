import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, technos, href, codeHref, buttonDescription }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={4}> 
      <div className="cardBackground">
        <Card className="mainCard">
          <Card.Img variant="top" src={imgUrl} alt="page web"/>
          <Card.Body>
            <p>
              <h4>{title}</h4>
              <p>{description}</p>
              <span className="bold">{technos}</span>
              <br />
            </p>

            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>{buttonDescription}</Button>  
            </a>
            )}
           
            {/* Afficher le bouton "Code" uniquement si codeHref est défini */}
            {codeHref && (
              <a href={codeHref} target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className='codeBtn'> Code </Button>
              </a>
            )}
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}