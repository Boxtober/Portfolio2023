import reactIcon from '../assets/img/icon/react.svg';
import viteIcon from '../assets/img/icon/vitejs.svg';
import vueIcon from '../assets/img/icon/vuejs.svg';
import typeScriptIcon from '../assets/img/icon/typeScript.png';

import threeIcon from '../assets/img/icon/Threejs.svg';
import nodeIcon from '../assets/img/icon/node.svg';
import phpIcon from '../assets/img/icon/PHP-logo.svg';
import mysqlIcon from '../assets/img/icon/mysql.svg';
import gitIcon from '../assets/img/icon/GIT.svg';


export const SkillsJS = () => {

    return (

      <section className="MainJSContainer">

            <h2> et aussi ... </h2>
  
            <div className="JSContainer">

                <div className="SecondJsContainer">

                    <div className="otherItem">
                        <img src={reactIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">React</p>
                    </div>

                    <div className="otherItem">
                        <img src={vueIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Vue.js</p>
                    </div>
                    <div className="otherItem">
                        <img src={viteIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Vite.js</p>
                    </div>
                    <div className="otherItem">
                        <img src={typeScriptIcon} alt="typeScript icon" className='otherIcon'/>
                        <p className="otherList">TypeScript</p>
                    </div>

                </div>

                <div className="SecondJsContainer">
                    <div className="otherItem">
                        <img src={threeIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Three.js</p>
                    </div>
                    <div className="otherItem">
                        <img src={nodeIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Node.js</p>
                    </div>

                    <div className="otherItem">
                        <img src={mysqlIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">MySQL</p>
                    </div>

                    <div className="otherItem">
                        <img src={gitIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Git</p>
                    </div>
                    <div className="otherItem">
                        <img src={phpIcon} alt="php icon" className='otherIcon'/>
                        <p className="otherList">PHP</p>
                    </div>
  
                </div>

            </div>
        </section>
    )
}