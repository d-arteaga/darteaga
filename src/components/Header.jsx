import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            darteaga.me
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="mx-1">
                Home
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/arteagadiego/"
                aria-label="LinkedIn"
                target="_blank"
                className="mx-1"
                title="LinkedIn Profile"
              >
                LinkedIn
              </Nav.Link>
              <Nav.Link
                href="https://github.com/d-arteaga"
                target="_blank"
                aria-label="GitHub"
                title="GitHub Profile"
                className="mx-1"
              >
                GitHub
              </Nav.Link>
              <Nav.Link as={Link} to="/Projects" className="mx-1">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/Resume" className="mx-1">
                Resume
              </Nav.Link>

              <Nav.Link as={Link} to="/BeyondCode" className="mx-1">
                Beyond Code
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}
