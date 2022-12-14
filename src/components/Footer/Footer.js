import React, { useNavigate } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
//import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-section flex-vt" id="contact">
      <p className="text"> Connect with me</p>
      <div className="social-media-links">
        {" "}
        <a href="https://github.com/shrushti2000" target="_blank">
          <FontAwesomeIcon size="xl" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/shrushti23" target="_blank">
          <FontAwesomeIcon size="xl" icon={faInstagram} />
        </a>
        <a href="https://twitter.com/Shrushti2000" target="_blank">
          <FontAwesomeIcon size="xl" icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/shrushti-polekar-8255471a6"
          target="_blank"
        >
          <FontAwesomeIcon size="xl" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
