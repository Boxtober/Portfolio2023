import React, { Suspense, useState, useEffect, useRef } from 'react';
import "../styles.css";
import linkedin from '../assets/img/icon/linkedin2.svg';
import behance from '../assets/img/icon/behance2.svg';
import github from '../assets/img/icon/github2.svg';
import codepen from '../assets/img/icon/codepen2.svg';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import emailjs from '@emailjs/browser';



export default function ConstructionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
const form = useRef();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_v5wru1c',
        'template_24j2sx5',
        form.current,
        'C9CXAAcZwFVrvvmWd'
      )
      .then(
        (result) => {
          console.log("Message envoyé !");
          form.current.reset(); // ✅ reset le formulaire
          setFormData({ name: '', email: '', message: '' }); // ✅ reset state
        },
        (error) => {
          console.log("Erreur :", error.text);
        }
      );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1210 && windowWidth > 768;
  const isResponsive = windowWidth <= 1210;

  return (
    <div style={{
      maxHeight: '100vh',
      height: isResponsive ? 'auto' : '100vh',
      width: '100%',
      backgroundColor: '#ffd984',
      position: 'relative',
      overflow: isResponsive ? 'auto' : 'hidden',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <div className="constructionPageContainer" style={{
        position: 'relative',
        minHeight: isResponsive ? 'auto' : 'calc(100vh - 4rem)',
        overflow: isResponsive ? 'visible' : 'hidden',
        padding: isMobile ? '2rem 1rem' : isTablet ? '3rem 2rem' : '4rem'
      }}>

        {/* Spline 3D Character
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'auto'
        }}> */}
        <div style={{
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  pointerEvents: 'none', // important pour ne pas bloquer les clics
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end'
}}>
  <div
    style={{
      transform: isMobile
        ? 'scale(0.6)'
        : isTablet
        ? 'scale(0.7)'
        : 'scale(0.8)',
      transformOrigin: 'bottom center',
      height: '100%',
      width: '100%'
    }}
  >
          <Suspense fallback={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '10%'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '4px solid rgba(255, 255, 255, 0)',
                borderTop: '4px solidrgb(234, 148, 102)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
            </div>
          }>
            <Spline scene="https://prod.spline.design/fghBIT90pOTk1zVO/scene.splinecode" />
          </Suspense>
        </div></div>
        <div className="main-container">
          <div className="second-container">
            <div className="soon-container">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #FFC400) 6%, #EEAB00 100%)',
                borderRadius: '50px',
                border: '2px solid #CCC2AD',
                animation: 'float 3s ease-in-out infinite',
                padding: window.innerWidth <= 768 ? '0.5rem 1rem' : '0.6rem 1.2rem',

              }}>
                <span style={{
                  fontSize: window.innerWidth <= 768 ? '1rem' : '1.2rem',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>✨</span>
                <span style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem',
                  fontWeight: '700',
                  color: '#CCC2AD',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  En développement
                </span>
              </div>

              <h1 style={{
                textAlign: 'justify',
                fontFamily: 'Outfit, sans-serif',
                fontSize: window.innerWidth <= 768 ? '4rem' : window.innerWidth <= 1024 ? '5rem' : '8rem',
                fontWeight: '900',
                alignItems: isResponsive ? 'center' : 'flex-start',
                textAlign: isResponsive ? 'center' : 'left',
                background: 'linear-gradient(135deg, #FFC400) 6%, #EEAB00 100%)',
                letterSpacing: window.innerWidth <= 768 ? '-2px' : '-3px',
                lineHeight: window.innerWidth <= 768 ? '3rem' : window.innerWidth <= 1024 ? 'auto' : '100px',
                textShadow: '0 0 40px rgba(255, 213, 134, 0.68)',
                color: '#FFC400'
              }}>
                Coming
                <br />
                Soon
              </h1>

              <div style={{
                height: '4px',
                width: '20px',
                background: '#EEAB00',
                borderRadius: '10px',
                animation: 'shimmer 2s infinite'
              }}></div>

              <p style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '18px',
                color: '#313131',
                lineHeight: '1.3',
                fontWeight: '500',
                maxWidth: '35vh',
                textShadow: '0 0 40px rgba(255, 213, 134, 0.68)',

              }}>
                Je met à jour mon portfolio avec encore plus de <strong style={{ color: '#EEAB00', fontWeight: '700' }}>projets</strong>,
                 une interface repensée, et
                une expérience
                <strong style={{ color: '#EEAB00', fontWeight: '700' }}>  utilisateur </strong> optimisée.   Je reviens très bientôt !
                
            <br></br>
                <br></br>Merci de votre patience 🌻</p>


              <p style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '14px',
                color: '#313131',
                fontStyle: 'italic',
                paddingLeft: '1rem',
                borderLeft: '3px solid #313131'
              }}>
                ~ Sabrina, UI/UX designer & développeuse front-end.
              </p>


            </div>



            {/*   /************************************************************************************/}

            <div className="icon-container">
              <div className="icon">
                <a href="https://www.linkedin.com/in/boxtober" target="_blank"><img src={linkedin} alt="Linkedin Icon" /></a>
                <a href="https://github.com/Boxtober" target="_blank"><img src={github} alt="Github Icon" /></a>
                <a href="https://codepen.io/sabrina-a" target="_blank"><img src={codepen} alt="Codepen Icon" /></a>                <a href="https://www.behance.net/as-artwork" target="_blank"><img src={behance} alt="Behance Icon" /></a>

              </div>
              {/* RIGHT SIDE - Contact Form */}
              <form ref={form} onSubmit={sendEmail} style={{
                background: 'rgba(255, 255, 255, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                backgroundColor:' #f5e7d538',
                borderRadius: '25px',
                padding: '4rem 2rem',
                boxShadow: 'rgba(189, 150, 82, 0.17) 0px 0px 20px 0px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                pointerEvents: 'auto',
                maxWidth: '480px',
                width: '100%',
                padding: isMobile ? '2rem 1.5rem' : '4rem 2rem',
              }}>


                <h2 style={{
                  fontFamily: 'Quicksand, sans-serif',
                  fontSize: isMobile ? '24px' : '32px',
                  textShadow: '0 0 40px rgba(255, 213, 134, 0.68)',
                  fontWeight: '800',
                  color: '#313131',
                }}>
                  Restons en contact
                </h2>

                <p style={{fontFamily: 'Quicksand, sans-serif',
                fontSize: '18px',
                color: '#313131'}}>
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

               

                <input style={{
                        fontFamily: 'Quicksand, sans-serif',
                        width: '100%',
                        padding: window.innerWidth <= 768 ? '0.9rem 1rem' : '1rem 1.2rem',
                        borderRadius: '15px',
                        border: '2px solid #CCC2AD',
                        fontSize: window.innerWidth <= 768 ? '0.95rem' : '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#fafafa',
                        boxSizing: 'border-box',
                        paddingBottom: '2rem',
                      }} type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} />
                <input style={{
                        fontFamily: 'Quicksand, sans-serif',
                        width: '100%',
                        padding: window.innerWidth <= 768 ? '0.9rem 1rem' : '1rem 1.2rem',
                        borderRadius: '15px',
                        border: '2px solid #CCC2AD',
                        fontSize: window.innerWidth <= 768 ? '0.95rem' : '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#fafafa',
                        boxSizing: 'border-box',
                        paddingBottom: '2rem',
                      }} type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} />
                <textarea style={{
                        fontFamily: 'Quicksand, sans-serif',
                        width: '100%',
                        padding: window.innerWidth <= 768 ? '0.9rem 1rem' : '1rem 1.2rem',
                        borderRadius: '15px',
                        border: '2px solid #CCC2AD',
                        fontSize: window.innerWidth <= 768 ? '0.95rem' : '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#fafafa',
                        boxSizing: 'border-box',
                        paddingBottom: '2rem',
                      }} name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows={isMobile ? 3 : 4} />
                

                  <button type="submit" style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: '600',
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '15px',
                  border: 'none',
                  background: 'rgb(255, 196, 0)',
                  color: 'white',
                  cursor: 'pointer'
                }}>Envoyer le message</button>
                </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        
        #root > div > div > div:nth-child(1) > div > canvas {
          width: auto !important;
          height: 100% !important;
          max-height: 100vh !important;
          object-fit: contain !important;
        }
        
        /* Tablet */
        @media (max-width: 1200px) {
          body {
            overflow-y: auto !important;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          body {
            overflow-y: auto !important;
          }
          
          /* Hide Spline on mobile for performance */
          #root > div > div > div:nth-child(1) {
            opacity: 0.3 !important;
          }
        }
      `}</style>
    </div>
  );
}