import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <p style={{color: "rgb(190, 190, 190)"}} className="text-center pt-4">Design and Developed by S. Sabir with <FontAwesomeIcon style={{color: "lightblue", fontSize: "20px"}} icon={faReact}></FontAwesomeIcon></p>
        </div>
    );
};

export default Footer;