import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_v5wru1c', 'template_24j2sx5', form.current, 'C9CXAAcZwFVrvvmWd')
      .then((result) => {
          //console.log(result.text);
          //console.log("message sent");
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
          Curieux/se, ou besoin d'un renseignement ? 
          <br />
          Vous pouvez me contacter ici, ou à l'adresse suivante : 
          <br /><br />
          <span className='bold'>contact.asartwork@gmail.com</span><br />
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
