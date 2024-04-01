import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import CartWidget from './cartWidget'



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navBar">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <Nav.Link to="#link" as={NavLink}>Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item to="/category/remeras" as={NavLink}>Remeras</NavDropdown.Item>
              <NavDropdown.Item to="/category/buzos" as={NavLink}> Buzos</NavDropdown.Item>
              <NavDropdown.Item to="/category/pantalones" as={NavLink}> Pantalones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/cartDetail" as={NavLink}><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;