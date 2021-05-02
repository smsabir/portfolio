import React from 'react';
import ProImg from '../../images/for-port.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container mt-5">
            <section className="row d-flex justify-content-between d-flex align-items-center">
                <div className="col-md-6 col-12 text-white mb-5 mt-5 pt-2 d-flex justify-content-center align-items-center greeting">
                    <div className="">
                        <h1>Hello.</h1>
                        <h2>I am S M ABDULLAH AL SABIR</h2>
                        <h3>A Full-Stack Web Developer</h3>
                        <button className="btn btn-primary text-white mt-5">Download Resume</button>
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