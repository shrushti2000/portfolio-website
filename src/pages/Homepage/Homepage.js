import React from 'react'
import { Figure,Container,Row,Col } from 'react-bootstrap'
import Blogs from '../../components/Blogs/Blogs'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import { Skills } from '../../components/Skills/Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub,faInstagram ,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';

import './Homepage.css'

const Homepage = () => {
  return (
    <>
       <Container className='hero-container' id="hero-section" fluid>
      <Row className='hero-row hero-img'>
      <Figure>
      <Figure.Image
        width={250}
        height={250}
      className="profile-img"
        alt="171x180"
        src="https://res.cloudinary.com/shrushti23/image/upload/v1660407253/WhatsApp_Image_2022-08-13_at_9.43.25_PM_ytjacd.jpg"
      />
      </Figure>
      </Row>
      <Row  className='hero-row hero-img'>
        <h1 className='hero-text hero-text-primary'>Hi, I'm <span className='hero-text-primary highlight-text'>Shrushti Polekar</span></h1>
        <h4 className='hero-text hero-text-secondary'>I am an aspiring frontend web developer. I have keen interest in exploring and
learning JavaScript and its various technologies!</h4>
       
      </Row>
      <Row>
     
      </Row>
    </Container>
    <Projects/>
    <Skills/>
    <Blogs/>
    <Footer/>
    </>
  )
}

export default Homepage