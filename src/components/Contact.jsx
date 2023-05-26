import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_v5wru1c', 'template_24j2sx5', form.current, 'C9CXAAcZwFVrvvmWd')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert(" Bien reçu, merci ! 📮");
      }, (error) => {
          console.log(error.text);
          alert(" Erreur 😳 Me contacter : contact.asartwork@gmail.com ) ");
      });
  };

  return (

    <div className="mainFormContainer" id='Contact'>

      <div className="coordContainer">

        <h2>Contactez-moi !</h2>
        <br />
        <p>
        Curieux/se, ou besoin d'un renseignement ? <br />
        Vous pouvez me contacter ici, ou à l'adresse suivante : <br /><br /><span className='bold'>contact.asartwork@gmail.com</span><br />
        <br />
        Je fais toujours de mon mieux pour répondre dans les meilleurs délais !<br /><br />
        <br />
        <span className='bold'>See you soon ! ☀️</span>
        </p>

      </div>

      <form ref={form} onSubmit={sendEmail} className='FormContainer'>
        
        <input type="text" name="user_name" placeholder="Name"/>
        
        <input type="email" name="user_email" placeholder="Email"/>
        
        <textarea name="message" placeholder="Message"/>
        <input type="submit" value="Send" />
      </form>

    </div>
  );
};
 

{/**


import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import contactImg from "../assets/img/contactImg.jpg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
*/}