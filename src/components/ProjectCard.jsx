
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

{/* <Col xs={12} sm={6} md={4}> */}
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
            <a href={href} target="_blank">
              <Button variant="dark" className='exploreBtn' style={{ marginRight: '15px'}}>{buttonDescription}</Button>  
            </a>
            <a href={codeHref} target="_blank">
              <Button variant="dark" className='codeBtn'> Code </Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}



/*
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
*/