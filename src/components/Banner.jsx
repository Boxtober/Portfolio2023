import { useState, useEffect } from "react";
import flag from '../assets/img/flag.svg';
import imgBanner from '../assets/img/imgBanner.png';
import 'animate.css';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Hello, i'm Sabrina", "Hello, i'm Sabrina", "Hello, i'm Sabrina" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        
        <section id="home">
            
                <div className="TxtImgContainer">
                    
                    <div className="BannerMainContainer">
                        <span className="wrap">{text}</span>
                        
                        <h1>An enthusiastic 
                        <br /> <span className="yellow">front-end </span> 
                       developer ! </h1>
                       
                        <div className="about">
                            <img src={flag} alt="French Flaf Img" />
                            <p>
                            Bonjour et bienvenue sur mon <span className="bold">portfolio</span> ! 
                            Je suis une  <span className="bold">développeuse</span> enthousiaste basée dans la région  
                            <span className="bold"> Lyonnaise. </span> <br />
                            J’aime créer des expériences utilisateurs uniques et ergonomiques en combinant créativité 👩‍🎨 et technicité 👩‍💻. 
                            <br /><br />
                            <span className="bold">Vous souhaitez en savoir plus ?</span> 
                            </p>
                        </div>

                        <a href="#Contact">
                            <button href="#Contact">Contactez-moi !</button>
                        </a>
                    </div>                   
                    <img src={imgBanner} alt="Banner image" class="animate__animated animate__bounceInRight"/>
                </div>
                
        </section>
    )
}