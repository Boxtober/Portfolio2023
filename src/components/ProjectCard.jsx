import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, technos, href, codeHref, buttonDescription }) => {
  return (
    <Col> 
      <div className="cardBackground">
        <Card className="mainCard">
          <Card.Img variant="top" src={imgUrl} alt="page web"/>
          <Card.Body className='card-body'>
            <p>
              <h4>{title}</h4>
              <p>{description}</p>
              <span className="bold">{technos}</span>
              <br />
            </p>

          <div className='btn-card-container'>
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>{buttonDescription}</Button>  
            </a>
            )}
          
            {codeHref && (
              <a href={codeHref} target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className='codeBtn'> Code </Button>
              </a>
            )}
          </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}