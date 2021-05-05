import React from 'react';
import './Skills.css'
import expressPng from '../../images/express.png'


const Skills = () => {


    return (
        <div id={"skill"} className="container">
            <div className="skills">
            <h2 style={{color: "rgb(190, 190, 190)"}} className="text-center">Skills</h2>
            <li>
                <h5>
                   
                    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="" title="HTML5"/>
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="" title="CSS3"/>
                    <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="" title="Bootstrap"/>
                    <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="" title="Material-UI"/>
                    
                </h5><span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <h5>
                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="" title="JS"/>
                    <img src="https://img.icons8.com/ultraviolet/48/000000/react.png" alt="" title="React"/>
                </h5><span className="bar"><span className="js"></span></span>
            </li>
            <li>
                <h5>
                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="" title="Node JS"/>
                <img src={expressPng} style={{height: "60px"}} alt="" title="Express JS"/>
                <img src="https://img.icons8.com/color/48/000000/npm.png" alt="" title="Express JS"/>
                <img src="https://img.icons8.com/ultraviolet/48/000000/api-settings.png" alt="" title="REST API"/>
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="" title="MongoDB"/>
                <img src="https://img.icons8.com/fluent/50/000000/mysql-logo.png" alt="" title="MySQL"/>
                </h5><span className="bar"><span className="node"></span></span>
            </li>
            <li>
                <h5>
                <img src="https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png" alt="" title="Visual Studio Code"/>
                <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="" title="FireBase"/>
                <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="" title="Heroku"/>
                <img src="https://img.icons8.com/color/48/000000/adobe-photoshop.png" alt="" title="PhotoShop"/>
                
                </h5><span className="bar"><span className="tools"></span></span>
            </li>

            </div>
        </div>
    );
};

export default Skills;