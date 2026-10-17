import TypeWriterEffect from "react-typewriter-effect";
import guitar from "../assets/guitar.jpg";
import drums from "../assets/drumming.jpg";
import music from "../assets/drumset.jpg";
import cover from "../assets/drum_ss.jpg";
import nature from "../assets/nature.jpg";
import namm from "../assets/namm.png";
import Footer from "../Footer";
import adobe from "../assets/adobe.jpg";
import ImageGallery from "react-image-gallery";
import Stack from "react-bootstrap/Stack";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Hobbies.css";

export default function Hobbies() {
  const myRef = document.querySelector(".scrollable-div");
  const handleDragStart = (e) => e.preventDefault();
  const styles = {
    width: "100%", // Make sure it scales with the carousel container
    height: "500px", // Fixed height for consistent rectangle format
    objectFit: "cover", // Ensures the image fills the rectangle
    borderRadius: "10px", // Optional: adds rounded corners
    backgroundColor: "black", // Fills any empty space if using "contain"
  };
  const images = [
    {
      original: namm,
      thumbnail: namm,
      //description: "Spotify Clone",
      originalHeight: "300px",
      thumbnailHeight: "55px",
    },
    {
      original: drums,
      thumbnail: drums,
      originalTitle: "Kirby",
      //description: "AI Recipe Recommendation App",
      originalHeight: "300px",
      thumbnailHeight: "55px",
      //thumbnailWidth: "90px;",
    },
    {
      original: cover,
      thumbnail: cover,
      // description: "Jazz Performance",
      originalHeight: "300px",
      thumbnailHeight: "55px",
    },
    {
      original: music,
      thumbnail: music,
      //description: "Drum simulator",
      originalHeight: "300px",
      thumbnailHeight: "55px",
    },

    {
      original: guitar,
      thumbnail: guitar,
      //description: "Spotify Clone",
      originalHeight: "300px",
      thumbnailHeight: "55px",
    },
  ];

  return (
    <>
      <Header />
      <br />
      <br />
      <Stack gap={2}>
        <div style={{ padding: "32px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.35em",
              textAlign: "center",
            }}
            startDelay={100}
            cursorColor="black"
            text="My Life as a Musician..."
            typeSpeed={100}
            s
          />
        </div>
        <Container fluid="lg">
          <Row lg={2}>
            <Col md={6}>
              <p className="hobby-text">
                <strong>Music has always been a huge part of my life.</strong>
                <br></br>I play drums, guitar, bass, and a variety of percussion
                instruments, and I spent several years working as a studio
                musician. During that time, I performed everywhere from the
                Pasadena Civic Center to a boat parade in Oxnard. I even had the
                unique experience of performing at NAMM 2020 in Anaheim, CA,
                opening for Tower&nbsp;of&nbsp;Power. I also played drums for an
                LA-Based jazz ensemble,{" "}
                <a
                  href="https://open.spotify.com/artist/5eF758ITVNIEF9IfZEXLAF?si=GkO3UA7wRfa90_bzmkchOw"
                  target="_blank"
                  title="Jazz Lawyers page on Spotify"
                  aria-label="Spotify link to Identity Fraud album"
                >
                  The Jazz Lawyers
                </a>
                , and a SoCal-based soul rock band,{" "}
                <a
                  href="https://open.spotify.com/artist/6KVM9BNFyHeHVosTyDg44k?si=Jt74-6tSSFiCxpGll9iivQ"
                  target="_blank"
                  title="The Soul Riders page on Spotify"
                  aria-label="Spotify link to The Soul Riders page"
                >
                  The Soul Riders
                </a>
                , contributing to the writing and recording for both of their
                debut albums. Now, I play drums and guitar in my spare time and
                enjoy recording and mixing covers and tutorials to share online.
                Music continues to be a creative outlet for me, blending
                performance with production.
                {/* // During that time, I performed everywhere from local clubs in 
                // Ventura and the Pasadena Civic Center to a boat parade in Oxnard. */}
              </p>
            </Col>
            <Col md={6}>
              <ImageGallery
                items={images}
                thumbnailPosition="bottom"
                autoPlay
                infinite
              />
            </Col>
          </Row>
        </Container>

        <br></br>

        <div style={{ padding: "32px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.35em",
              textAlign: "center", // Ensures the text is centered properly
            }}
            startDelay={100}
            cursorColor="black"
            text="My Work as a Video Editor..."
            typeSpeed={100}
            s
          />
        </div>
        <Container fluid="lg">
          <Row lg={2} xs={1}>
            <Col>
              <p className="hobby-text">
                In addition to my work as a musician, I have several years of
                experience as a video editor and social media manager, blending
                creativity with data-driven insights. I manage and produce
                content across multiple channels and platforms, overseeing every
                step from editing and branding to analytics and growth strategy.
                <br />
                Using tools like Ableton&nbsp;Live,
                Adobe&nbsp;Premiere&nbsp;Pro, Adobe After Effects, and Photopea,
                I streamline video and audio workflows to deliver high-quality,
                engaging content.
                <br />
                By analyzing audience and performance data from
                YouTube&nbsp;Studio and TikTok&nbsp;Analytics, I design and run
                A/B tests and assist clients in growing their brand.
                {/* <br /> I personally oversee and manage two separate content
                businesses, handling everything from editing and post-production
                to branding and audience engagement strategies. Beyond editing,
                I take a data-driven approach to content performance, analyzing
                various metrics to optimize audience retention, engagement, and
                growth. By leveraging data analytics, I refine content
                strategies, improve video pacing, and enhance storytelling to
                maximize impact.{" "} */}
              </p>
            </Col>
            <Col className="d-flex justify-content-center text-center">
              <Image
                src={adobe}
                rounded // Adds rounded corners
                fluid // Makes the image responsive
                style={{
                  maxWidth: "575px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>
        </Container>
        <br />
        <div style={{ padding: "25px", paddingTop: "30px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.35em",
              textAlign: "center", // Ensures the text is centered properly
            }}
            startDelay={100}
            cursorColor="black"
            text="More About Me..."
            typeSpeed={100}
            s
          />
        </div>
        <Container fluid="lg">
          <Row lg={2} xs={1}>
            <Col md={6}>
              <div className="p-2">
                <p className="hobby-text">
                  Outside of music and video editing, I enjoy staying active and
                  exploring the world. Whether it’s camping in Yosemite National
                  Park or city-hopping in Tokyo, I love immersing myself in new
                  experiences. I’m also passionate about working out, seeing it
                  as both a challenge and a way to stay balanced and healthy.{" "}
                  <br></br>
                  Another fun fact about me—I speak three languages: English,
                  Spanish, and Japanese! Learning new languages has given me a
                  deeper appreciation for different cultures and perspectives,
                  and I enjoy finding new ways to connect with people through
                  language and shared experiences.
                  <br />I believe in continuous learning and pushing creative
                  boundaries, whether in music, technology, or personal growth.
                  <br />
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center text-center"
            >
              <Image
                src={nature}
                rounded // Adds rounded corners
                fluid // Makes the image responsive
                style={{
                  maxWidth: "480px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
