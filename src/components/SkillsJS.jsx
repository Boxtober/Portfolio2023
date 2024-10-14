import reactIcon from '../assets/img/icon/react.svg';
import viteIcon from '../assets/img/icon/vitejs.svg';
import vueIcon from '../assets/img/icon/vuejs.svg';
import typeScriptIcon from '../assets/img/icon/Typescript.png';
import threeIcon from '../assets/img/icon/Threejs.svg';
import nodeIcon from '../assets/img/icon/node.svg';
import sqlIcon from '../assets/img/icon/sql.png';
import angularIcon from '../assets/img/icon/angular.png';
import gitIcon from '../assets/img/icon/GIT.svg';
import rxjsIcon from '../assets/img/icon/rxjs.png';

export const SkillsJS = () => {

    return (

      <section className="MainJSContainer">

            <h2> et aussi ... </h2>
  
            <div className="JSContainer">

                <div className="SecondJsContainer">

                <div className="otherItem">
                        <img src={angularIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Angular</p>
                    </div>
                <div className="otherItem">
                    <img src={typeScriptIcon} alt="typeScript icon" className='otherIcon'/>
                    <p className="otherList">TypeScript</p>
                </div>
                <div className="otherItem">
                    <img src={rxjsIcon} alt="rxjs icon" className='otherIcon'/>
                    <p className="otherList">RxJS</p>
                </div>
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
                        <img src={sqlIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">SQL</p>
                    </div>

                    <div className="otherItem">
                        <img src={gitIcon} alt="react icon" className='otherIcon'/>
                        <p className="otherList">Git</p>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}