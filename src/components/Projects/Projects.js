import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="project-section flex-vt" id="projects">
      <h3 className="section-title">My Projects</h3>
      <div className="flex-hz ">
        <div className="project-card-container flex-vt">
          <img
            className="project-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1658569974/adornui-img_o0ssjt.png"
          />
          <div className="project-card-title">Adorn UI</div>
          <div className="project-card-desc">
            Adorn-UI is a CSS Component Library to build beautiful User
            Interfaces easily. Supports many of the most frequently used UI
            components like alerts,badges,avatars,modals,inputs etc... Built
            using HTML,CSS,JavaScript
          </div>
          <div className="flex-hz">
            <a href="https://github.com/shrushti2000/Adorn-UI">
              <p className="project-link git-link">View Code</p>
            </a>
            <a href="https://adorn-ui.netlify.app/">
              <p className="project-link live-link">View Live</p>
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <img
            className="project-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1658571005/naaricare-img_dnyauf.png"
          />
          <div className="project-card-title">Naari care</div>
          <div className="project-card-desc">
            Naari-Care is an e-commerce web application to buy all women
            essentials and beauty products. Took design inspirations from Nykaa
            and Purplle. Used Context-API for state management and Mockbee for
            backend. For UI made use of components from CSS library Adorn-UI.
            Built using HTML,CSS,JavaScript,React
            <div className="flex-hz">
              <a href="https://github.com/shrushti2000/Naaricare-ecommerce-App">
                <p className="project-link git-link">View Code</p>
              </a>
              <a href="https://naaricare.netlify.app/">
                <p className="project-link live-link">View Live</p>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <img
            className="project-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1658571217/diva-connect_howkej.png"
          />
          <div className="project-card-title">Diva Connect</div>
          <div className="project-card-desc">
            Diva Connect is a social media application to connect with amazing
            women around. Women can post content related to beauty,styling
            ,health,lifestyle,also can follow other women and like or comment on
            each others posts. Built using HTML,CSS,JavaScript,Redux Toolkit
          </div>
          <div className="flex-hz">
            <a href="https://github.com/shrushti2000/DivaConnect">
              <p className="project-link git-link">View Code</p>
            </a>
            <a href="https://diva-connect.netlify.app/">
              <p className="project-link live-link">View Live</p>
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <img
            className="project-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1658571401/diva-tv_bw9do0.png"
          />
          <div className="project-card-title">Diva TV</div>
          <div className="project-card-desc">
            • Diva TV is a video library app for all beauty, makeup, fashion
            enthusiasts. It contains several features like view a video,
            like/dislike video, create and manage playlist ,upload video and add
            video to watch later. Built using HTML,CSS,JavaScript,React,Context
            API
            <div className="flex-hz">
              <a href="https://github.com/shrushti2000/Diva-TV">
                <p className="project-link git-link">View Code</p>
              </a>
              <a href="https://diva-tv.netlify.app/">
                <p className="project-link live-link">View Live</p>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <img
            className="project-img"
            src="https://res.cloudinary.com/shrushti23/image/upload/v1658571552/keep_app_li6jw7.png"
          />
          <div className="project-card-title">Keep App</div>
          <div className="project-card-desc">
            Keep app is a simple notes taking app similar to Google Keep which
            allows you to create,update,delete ,archive ,unarchive and filter
            and sort notes. Built using HTML,CSS,JavaScript,ReactJS,Context API
          </div>
          <div className="flex-hz">
            <a href="https://github.com/shrushti2000/Keep-Notes-App-">
              <p className="project-link git-link">View Code</p>
            </a>
            <a href="https://keep-app23.netlify.app/">
              <p className="project-link live-link">View Live</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
