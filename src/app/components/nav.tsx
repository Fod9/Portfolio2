import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CustomNav() {
  return (
    <>
      {[false, 'sm',].map((expand) => (
        <Navbar key={String(expand)} expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#">Tom <br/> Dernoncourt</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#" key={"Home"}>Home</Nav.Link>
                  <Nav.Link href="#expertise" key={"Expertise"}>Expertise</Nav.Link>
                  <Nav.Link href="#Skills" key={"Skills"}>Skills</Nav.Link>
                  <Nav.Link href="#Projects" key={"Projects"}>Projects</Nav.Link>
                  <Nav.Link href="#Contact" key={"Contact"}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CustomNav;