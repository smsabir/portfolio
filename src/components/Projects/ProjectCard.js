import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({project}) => {
    return (
        <div className="col-md-5 card m-4">
            <div className="card-img">
                <img src={project.img} alt=""/>
            </div>
            <div className="card-info">
            <div style={{color: "rgb(190, 190, 190)"}}>
                <h5 >{project.name}</h5>
                <p >{project.description}</p>
            </div>
            <div>
                {
                    project.technologies.map(technology => <span className="tech">{technology}</span>)
                }
            </div>
            </div>
            <div className="d-flex justify-content-between pt-4 pb-4">
                <a href={project.github} target="_blank" rel="noreferrer"><FontAwesomeIcon className="align-text-bottom" style={{fontSize: "35px", color: 'gray'}} icon={faGithub}></FontAwesomeIcon></a>
                <a href={project.live} target="_blank" rel="noreferrer"><FontAwesomeIcon  style={{fontSize: "35px", color: 'gray'}} icon={faDesktop}></FontAwesomeIcon></a>
            
            </div>
        </div>
    );
};

export default ProjectCard;