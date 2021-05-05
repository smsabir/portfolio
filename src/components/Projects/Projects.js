import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projectData =[
    {
        name: "Dental Care - A Website with customer reservation system.",
        img: "https://i.ibb.co/kmgDdK5/doc-portal.jpg",
        description:"Dental Care is a web app where admin can create different services, and see reservation for different dates. Visitors can select service and desired date to book appointment.",
        technologies: ["HTML5", "CSS3", "Bootstrap", "React", "React Router", "FireBase", "Node", "Express", "MongoDB","Heroku"],
        github: "https://github.com/smsabir/doctors-portal-client",
        live: "https://doctors-portal-dd8cb.web.app/"

    },
    {
        name: "NetBoost - An ISP Service Provider Website",
        img: "https://i.ibb.co/hRwHK3V/NetBoost.jpg",
        description: "Using this website user can purchase services from ISP and Pay using Cards, See order history and status. Admin can update order status, and delete, update or add services.",
        technologies: ["HTML5", "CSS3", "Bootstrap", "React", "React Router", "Stripe", "FireBase", "Node", "Express", "MongoDB","Heroku"],
        github: "https://github.com/smsabir/NetBoost-Client",
        live: "https://netboost.web.app/"
    },
    {
        name: "GameOnGo -Gaming Gear's E-Shop Website",
        img: "https://i.ibb.co/Pxjfndy/gameongo.jpg",
        description:"A Gaming e-shop where customer can select product and it will take customer to a protected route, can login and place order and check history as well. Admin can add/delete or update products.",
        technologies: ["HTML5", "CSS3", "Bootstrap", "React", "React Router", "Material-UI", "FireBase", "Node", "Express", "MongoDB","Heroku"],
        github: "https://github.com/smsabir/game-on-go-client",
        live: "https://gameongo-81fea.web.app/"
    },
    {
        name: "RideNin - Online Ticket Booking Website",
        img: "https://i.ibb.co/nRc2NVK/ridenin.jpg",
        description:"Web app for booking tickets, user click on the vehicle type and it will take them to a protected dashboard where they can choose destination, see on map and buy.",
        
        technologies: ["HTML5", "CSS3", "Bootstrap", "React", "React Router", "Context API",  "FireBase", "Node", "Express"],
        github: "https://github.com/smsabir/RideNin",
        live: "https://ridenin.web.app/"
    },
    {
        name: "FoodiePo - A Food Recipe Hunting Website",
        img: "https://i.ibb.co/qN2Js3g/foodiePo.jpg",
        description: "A website for finding food recipe by keywords, it fetch API from third party and show found data",
        technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6", "GitHub Pages"],
        github: "https://github.com/smsabir/FoodiePo",
        live: "https://smsabir.github.io/FoodiePo/"
    },
    {
        name: "Hard Rock - Website for finding songs and lyrics",
        img: "https://i.ibb.co/vznnYDn/hard-rock.jpg",
        description:"Purpose of this website is to find songs and lyrics by keyword/word and show them on the website by fetch API",
        technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6", "GitHub Pages"],
        github: "https://github.com/smsabir/hard-rock",
        live: "https://smsabir.github.io/hard-rock/"
    }

]

const Projects = () => {
    return (
        <div id={"Projects"} className="container mb-5 pb-4">
            <h2 style={{color: "rgb(190, 190, 190)"}} className="text-center pt-4 mt-5 ">Projects</h2>
            <h4  style={{color: "rgb(190, 190, 190)"}} className="text-center mt-3 mb-5 ">Some of my hands on projects I've done so far...</h4>
            <div className="row d-flex justify-content-center">
            {
                  projectData.map(project => <ProjectCard project={project}></ProjectCard>)
            }
        </div>
        </div>
        
    );
};

export default Projects;