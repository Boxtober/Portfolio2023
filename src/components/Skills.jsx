import devIcon from "../assets/img/devIcon.png";
import designIcon from "../assets/img/designIcon.png";
import drawIcon from "../assets/img/drawIcon.png";


import photoshopIcon from '../assets/img/icon/photoshop.svg';
import illustratorIcon from '../assets/img/icon/indesign.svg';
import indesignIcon from '../assets/img/icon/illustrator.svg';
import blenderIcon from '../assets/img/icon/blender.svg';
import figmaIcon from '../assets/img/icon/figma.svg';
import devtools from '../assets/img/devtool1.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    
    <section className="mainCarouselContainer" id="Skills">
      
      <div className="skillBackground">
      <div className="mainToolsContainer">

        <h2>Outils & Technologies</h2>
        <h3>Développement Web & Design</h3>


        {/* ----------------------------------------------- */}

        <div className="devEtDesignItem">
        <div className="itemContainer">

          <h4>Dev tools</h4>
          <img src={devtools} alt="Dev tools Icons"/>
        </div>

         {/* ----------------------------------------------- */}

        <div className="itemContainer">

          <h4>Design tools</h4>

          <section className="designItemContainer">

            <div className="designItem">
              <img src={photoshopIcon} alt="photoshop Icon"/>
              <p className="designList">Photoshop</p>
            </div>
            <div className="designItem">
              <img src={indesignIcon} alt="indesign Icon"/>
              <p className="designList">InDesign</p>
            </div>
            <div className="designItem">
              <img src={illustratorIcon} alt="illustrator Icon"/>
              <p className="designList">Illustrator</p>
            </div>
            <div className="designItem">
              <img src={blenderIcon} alt="blender Icon"/>
              <p className="designList">Blender</p>
            </div>
            <div className="designItem">
              <img src={figmaIcon} alt="figma Icon"/>
              <p className="designList">Figma</p>
            </div>

          </section>
        </div>
          {/* <img src="src\assets\img\designIcon.svg" alt="" />*/}


        </div>


        

      </div>

      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="carousel"
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
>


  <div className="itemSkill">

    <img src={devIcon} alt="Image" className="cardIcons"/>
    <h2>Développement web</h2>
    <p>Issue d’une formation intensive de 9 mois en Développement Web  & Mobile Full-Stack, je continue d’enrichir mes connaissances avec passion afin de vous fournir un code robuste et modulaire !</p>
  
  </div>

  <div className="itemSkill">

    <img src={designIcon} alt="Image" className="cardIcons"/>
    <h2>Graphisme</h2>
    {/**<span className="bold">Depuis Juin 2022 </span> */}
    <p>Diplômée en communication graphique depuis 2012, je tire mon expérience dans le domaine en tant que graphiste salariée et freelance. J’utilise la suite Adobe et Figma + beaucoup d’autres ressources pour mes projets Print et Web !</p>
  
  </div>

  <div className="itemSkill">

    <img src={drawIcon} alt="Image" className="cardIcons"/>
    <h2>Illustration</h2>
    {/** <span className="bold">Depuis Juin 2022 </span>*/}
    <p>Je dessine pour le plaisir et parfois pour des besoins spécifiques venant se greffer à mon activité de graphiste. J’utilise principalement Photoshop et une tablette graphique Wacom. Je m’intéresse également à la 3D et j’apprends depuis peu à utiliser Blender et Spline !</p>

  </div>
 

</Carousel>
</div>
</section>


  )
}

