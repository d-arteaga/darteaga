import Header from "../Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import chef from "../assets/chef_app.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tyler from "../assets/drum_sim.png";
import spotify from "../assets/ongaku.png";
import health from "../assets/healthcare.png";
import assembly from "../assets/endgame.png";
import port from "../assets/portfolio.png";
import Footer from "../Footer";
import lung from "../assets/lung_nodule.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Container fluid="lg">
        <Row lg={3} md={3} s={2} xs={1}>
          <Col>
            <Card>
              <Card.Img as="img" loading="lazy" variant="top" src={spotify} />
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
              <Card.Img as="img" loading="lazy" variant="top" src={lung} />
              <Card.Body>
                <Card.Title>Lung Cancer Detection</Card.Title>
                <Card.Text>
                  Trained a CNN model analyzing radiologist annotations and
                  using computer vision techniques on over 10,000 CT scan DICOM
                  images, enhancing my proficiency with Python libraries like
                  NumPy, TensorFlow, OpenCV, and Matplotlib.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/d-arteaga/lung-cancer-detection"
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
              <Card.Img variant="top" src={health} />
              <Card.Body>
                <Card.Title>Healthcare IoT Device Anomaly Detection</Card.Title>
                <Card.Text>
                  Developed an end-to-end pipeline to detect anomalies in
                  wearable health data using Isolation Forest. Extracted 20+
                  features from biosignals and gained hands-on experience with
                  ML models and result analysis.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/d-arteaga/healthcare-anomaly"
                  target="_blank"
                >
                  &lt;/&gt; Python
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row lg={3} xs={1}>
          <Col md={4}>
            <Card>
              <Card.Img as="img" loading="lazy" variant="top" src={port} />
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
              <Card.Img as="img" loading="lazy" variant="top" src={chef} />
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
            {/* <Card>
              <Card.Img variant="top" src={health} />
              <Card.Body>
                <Card.Title>Healthcare IoT Device Anomaly Detection</Card.Title>
                <Card.Text>
                 Developed an end-to-end pipeline to detect anomalies in wearable health data using Isolation Forest,
                  improving detection accuracy by 20%. Extracted 20+ features from biosignals and gained hands-on 
                  experience with ML models and result analysis.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/d-arteaga/lung-cancer-data-exploration"
                  target="_blank"
                >
                  &lt;/&gt; Python
                </Button>
              </Card.Body>
            </Card> */}
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img as="img" loading="lazy" variant="top" src={tyler} />
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
        </Row>
        <br></br>
      </Container>
      <Footer />
    </>
  );
}
