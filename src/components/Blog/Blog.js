import React from 'react';
import BlogCards from './BlogCards';

const blogData = [
    {
        name: "Quick JavaScript Basics",
        img: "https://i.ibb.co/KmkFhbC/javascript.jpg",
        description: "We have discussed some important basics of JavaScript ES6 that we'll use often",
        url:"https://medium.com/@SabirSmaa"
    },
    {
        name: "Learn React in a effective way",
        img: "https://i.ibb.co/55ghpW4/react.png",
        description: "React is an awesome JavaScript Library, we learn how to get started in the right way",
        url:"https://medium.com/@SabirSmaa"
    },
    {
        name: "A glimpse of Back-end Development with Node",
        img: "https://i.ibb.co/pJQRyhP/node.jpg",
        description: "Node is a popular and powerful JavaScript runtime for backend development ",
        url:"https://medium.com/@SabirSmaa"
    }
]


const Blog = () => {
    return (
        <div id={"blogs"} style={{color: "rgb(190, 190, 190)"}} className="container">
            <h2 className="text-center">Find Some of My Blogs...</h2>
            <div  className="row  d-flex justify-content-center pt-5">
                {
                    blogData.map(blog => <BlogCards blog={blog}></BlogCards>)
                }
            </div>
            
        </div>
    );
};

export default Blog;