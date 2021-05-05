import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BlogCards.css';

const BlogCards = ({blog}) => {
    return (
        <div className="col-md-5 d-flex justify-content-center ml-3 mb-4 blog-card">
            <div className="col-md-6 d-flex align-items-center">
                <img className="img-fluid" src={blog.img} alt=""/>
            </div>
            <div className="col-md-6 pt-2">
                <h5>{blog.name}</h5>
                <p>{blog.description}</p>
                <p>
                    <a href={blog.url}><FontAwesomeIcon icon={faHandPointer} style={{fontSize: "20px", color: "gray"}}></FontAwesomeIcon> Read</a>
                </p>
            </div>
        </div>
    );
};

export default BlogCards;