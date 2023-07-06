import reactIcon from '../assets/img/icon/react.svg';
import viteIcon from '../assets/img/icon/vitejs.svg';
import vueIcon from '../assets/img/icon/vuejs.svg';
import threeIcon from '../assets/img/icon/Threejs.svg';
import nodeIcon from '../assets/img/icon/node.svg';
import mysqlIcon from '../assets/img/icon/mysql.svg';
import gitIcon from '../assets/img/icon/GIT.svg';


export const SkillsJS = () => {

    return (

      <section className="MainJSContainer">

            <h2> et aussi ... </h2>
  
            <div className="JSContainer">

                <div className="SecondJsContainer">

                    <div className="designItem">
                        <img src={reactIcon} alt="react icon"/>
                        <p className="designList">React</p>
                    </div>

                    <div className="designItem">
                        <img src={viteIcon} alt="react icon"/>
                        <p className="designList">Vite.js</p>
                    </div>
                    
                    <div className="designItem">
                        <img src={vueIcon} alt="react icon"/>
                        <p className="designList">Vue.js</p>
                    </div>
                    
                    <div className="designItem">
                        <img src={threeIcon} alt="react icon"/>
                        <p className="designList">Three.js</p>
                    </div>

                </div>

                <div className="SecondJsContainer">

                    <div className="designItem">
                        <img src={nodeIcon} alt="react icon"/>
                        <p className="designList">Node.js</p>
                    </div>

                    <div className="designItem">
                        <img src={mysqlIcon} alt="react icon"/>
                        <p className="designList">MySQL</p>
                    </div>

                    <div className="designItem">
                        <img src={gitIcon} alt="react icon"/>
                        <p className="designList">Git</p>
                    </div>
  
                </div>

            </div>

        </section>
    )
}