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
          <Navbar.Brand as={Link} to="/Home">
            darteaga
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Resume">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/Hobbies">
              Beyond Code
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}
