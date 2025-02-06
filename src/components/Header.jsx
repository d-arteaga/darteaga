import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            darteaga
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="mx-1">
              Home
            </Nav.Link>
            <Nav.Link href="/Projects" className="mx-1">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/Resume" className="mx-1">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/Hobbies" className="mx-1">
              Beyond Code
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}
