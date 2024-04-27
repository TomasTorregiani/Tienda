import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import CartWidget from './cartWidget'



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navBar">
      <Container >
        <Navbar.Brand to="/" as={NavLink}>Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <Nav.Link to="#link" as={NavLink}>Contacto</Nav.Link>
            <Nav.Link to="/category/remeras" as={NavLink}>Remeras</Nav.Link>
            <Nav.Link to="/category/camperas" as={NavLink}>Camperas</Nav.Link>
            <Nav.Link to="/category/pantalones" as={NavLink}>Pantalones</Nav.Link>
            <Nav.Link to="/cartDetail" as={NavLink}><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;