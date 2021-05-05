import { faLocationArrow, faMapMarkedAlt, faMapMarkerAlt, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container about-container mb-5">
            <section id={"about"} className="about">
                <h2>About Me</h2>
                <p className="mt-2">
                    Passionate about web development and software engineering, wish to pursue a career as a full-stack software engineer. I have completed several front-end & full-stack projects in MERN Stack and still acquiring more skills to thrive in the software industry soon.
                    I am a tech-savvy, dynamic and hardworking team player. Always willing to learn and adopt new technologies.
                </p>
                <p>
                    <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon> &nbsp;Tallinn University Of Technology <br/>
                    &nbsp;<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> &nbsp; Tallinn, Estonia
                </p>
            </section>
        </div>
    );
};

export default About;