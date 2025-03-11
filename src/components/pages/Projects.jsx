import Header from "../Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import chef from "../assets/chef_app.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tyler from "../assets/drum_sim.png";
import spotify from "../assets/ongaku.png";
import data from "../assets/lung_heatmap.png";
import assembly from "../assets/endgame.png";
import port from "../assets/portfolio.png";
import Footer from "../Footer";
import meme from "../assets/meme.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Container fluid="lg">
        <Row lg={3} xs={2}>
          <Col>
            <Card>
              <Card.Img variant="top" src={spotify} />
              <Card.Body>
                <Card.Title>
                  <i>ONGAKU</i> - Spotify Clone
                </Card.Title>
                <Card.Text>
                  Redesigned a personal project originally built with PHP and
                  JavaScript, utilizing React and Bootstrap for a modern,
                  responsive UI. Developed a scalable backend with Node.js,
                  Express.js, and MySQL, optimizing data management and API
                  efficiency.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/d-arteaga/fake--spotify"
                  target="_blank"
                >
                  &lt;/&gt; React
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={data} />
              <Card.Body>
                <Card.Title>Lung Cancer Data Analysis Tool</Card.Title>
                <Card.Text>
                  This project enhanced my skills in data analysis and
                  visualization, as well as machine learning. It helped me gain
                  a deeper understanding of various Python libraries and their
                  applications in data science.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/d-arteaga/lung-cancer-data-exploration"
                  target="_blank"
                >
                  &lt;/&gt; Python
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img variant="top" src={chef} />

              <Card.Body>
                <Card.Title>
                  <em>Chef Kirby</em> - AI Recipe Generator
                </Card.Title>
                <Card.Text>
                  A React-based AI-powered recipe recommendation app that
                  utilizes the Hugging Face API to create unique recipes and
                  detailed cooking instructions based on user-provided list of
                  ingredients.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/diego-arteaga0/chef-kirby"
                  target="_blank"
                >
                  &lt;/&gt; React
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row lg={3} xs={2}>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={port} />
              <Card.Body>
                <Card.Title>Personal Portfolio Website</Card.Title>
                <Card.Text>
                  This React project provided hands-on experience with the
                  deployment process, managing a custom domain, and ensuring
                  secure HTTPS connections.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/diego-arteaga0/darteaga"
                  target="_blank"
                >
                  &lt;/&gt; React
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={tyler} />
              <Card.Body>
                <Card.Title>Drum Kit Web Simulator</Card.Title>
                <Card.Text>
                  An interactive e-drum simulator that allows users to play a
                  virtual drum kit using their computer keyboard. Features
                  customizable drum sounds and samples from various albums by
                  Tyler, The Creator.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/diego-arteaga0/Tyler--the-Creator-e-Drum-Kit"
                  target="_blank"
                >
                  &lt;/&gt; JavaScript
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={assembly} />
              <Card.Body>
                <Card.Title>
                  <em>Assembly: Endgame</em>
                </Card.Title>
                <Card.Text>
                  Developed a Hangman game using React to master key React
                  concepts and enhance my skills with hands-on experience. This
                  project allowed me to gain practical knowledge in building
                  interactive applications.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://d-arteaga.github.io/assembly-endgame/"
                  target="_blank"
                >
                  Play here!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
      </Container>
      <Footer />
    </>
  );
}
