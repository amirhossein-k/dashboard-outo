import "./navbar.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbars from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  return (
    // <div className="navbar">
    <Navbars bg="light" expand="sm" className="mb-3">
      <Container fluid>
        <Navbars.Brand href="#">Navbar Offcanvas</Navbars.Brand>
        <Navbars.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbars.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbars.Offcanvas>
      </Container>
    </Navbars>
    // </div>
  );
};

export default Navbar;
