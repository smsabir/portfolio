import React from 'react';
import ProImg from '../../images/for-port.png';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import Resume from '../../files/resume-sabir.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="container mt-5">
            <NavBar></NavBar>
            <section className="row d-flex justify-content-between d-flex align-items-center">
                <div className="col-md-6 col-12 text-white mb-5 mt-5 pt-2 d-flex justify-content-center align-items-center greeting">
                    <div className="">
                        <h1>Hello<span style={{color: "red"}}>.</span></h1>
                        <h2>I am S M ABDULLAH AL SABIR</h2>
                        <h3>A Full-Stack Web Developer</h3>
                        <p className="mt-5">
                        <a  id="get-resume" href={Resume} download><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon> Resume</a>
                        </p>
                    </div>
                    
                </div>
                <div className="col-md-6 col-12 mb-5 mt-5 text-right">
                    <img src={ProImg} className=" img-fluid ProImg" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Header;