import React from 'react'
import { Figure,Container,Row,Col } from 'react-bootstrap'
import Blogs from '../../components/Blogs/Blogs'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import { Skills } from '../../components/Skills/Skills'
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
      
        alt="171x180"
        src="https://res.cloudinary.com/shrushti23/image/upload/v1658568758/WhatsApp_Image_2022-07-23_at_2.58.09_PM_vrpv13.jpg"
      />
      </Figure>
      </Row>
      <Row  className='hero-row hero-img'>
        <h1 className='hero-text hero-text-primary'>Hi, I'm <span className='hero-text-primary highlight-text'>Shrushti Polekar</span></h1>
        <h4 className='hero-text hero-text-secondary'>I love building web apps and exploring more about JavaScript!</h4>
        <h4 className='hero-text hero-text-desc'>I have built many web apps and have written blogs !</h4>
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