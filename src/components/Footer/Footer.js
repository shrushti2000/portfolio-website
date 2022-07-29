import React,{useNavigate} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
//import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub,faInstagram ,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
  return (
    <div className='footer-section flex-vt' id="contact">
      <h3 className='text'>Connect with me</h3>
      <div className='social-media-links'> <a href="https://github.com/shrushti2000" target="_blank"><FontAwesomeIcon  size='xl' icon={faGithub}/></a>
 <a href="" target="_blank"><FontAwesomeIcon  size='xl' icon={faInstagram}/></a>
 <a href="https://github.com/shrushti2000" target="_blank"><FontAwesomeIcon  size='xl' icon={faTwitter}/></a>
 <a href="https://github.com/shrushti2000" target="_blank"><FontAwesomeIcon  size='xl' icon={faLinkedin}/></a>
 </div>
   </div>
  )
}

export default Footer