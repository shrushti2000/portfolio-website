import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
      <Container>
        <Navbar.Brand href="#hero-section" className="my-name">Shrushti Polekar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#projects" className="header-link">Projects</Nav.Link>
            <Nav.Link href="#blogs" className="header-link">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="header-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export {Header};