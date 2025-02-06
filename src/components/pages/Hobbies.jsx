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
        <div style={{ padding: "35px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.5em",
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
            <Col>
              <p className="hobby-text">
                <strong>Music has always been a huge part of my life.</strong>
                <br></br>I play drums, guitar, bass, and a variety of percussion
                instruments, and I spent several years working as a studio
                musician. During that time, I performed everywhere from local
                clubs in Ventura, CA; the Pasadena Civic Center in Pasadena, CA;
                on a boat for a parade in Oxnard, CA; and even had the unique
                experience of performing at NAMM 2020 in Anaheim, CA, opening
                for <b>Tower&nbsp;of&nbsp;Power</b>. I was also the studio
                drummer of the jazz ensemble The&nbsp;Jazz&nbsp;Lawyers,
                contributing to the writing and recording of their debut album,{" "}
                <i>Identity&nbsp;Theft</i>, which is available for streaming on{" "}
                <a href="https://open.spotify.com/album/2Js0jE3E7Myam7T9Ocqrd6?si=4i8nkZbrQyyP8o--n5RcdQ">
                  Spotify
                </a>{" "}
                and{" "}
                <a href="https://music.apple.com/us/album/identity-fraud/1727888226">
                  Apple Music
                </a>
                .<br></br>
                Now, I play drums and guitar in my spare time and enjoy
                recording and mixing covers and creating tutorials to share
                online. Music continues to be a creative outlet for me, blending
                performance with production.
              </p>
            </Col>
            <Col>
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

        <div style={{ padding: "35px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.5em",
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
          <Row lg={2}>
            <Col>
              <div className="p-2">
                <p className="hobby-text">
                  In addition to my work as a musician, I have several years of
                  experience as a video editor and content analyst, combining
                  creativity with data-driven decision-making. I specialize in
                  video and audio workflows, utilizing Ableton&nbsp;Live,
                  Adobe&nbsp;Premiere&nbsp;Pro, Adobe After&nbsp;Effects, and
                  Photopea to produce high-quality content across various
                  platforms.
                  <br></br>I personally oversee and manage two separate content
                  businesses, handling everything from editing and
                  post-production to branding and audience engagement
                  strategies. Beyond editing, I take a data-driven approach to
                  content performance, analyzing various metrics from my channel
                  and video data using Python to optimize audience retention,
                  engagement, and growth. <br />
                  By leveraging data analytics, I refine content strategies,
                  improve video pacing, and enhance storytelling to maximize
                  impact.{" "}
                </p>
              </div>
            </Col>
            <Col>
              <div
                className="p-2"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  overflow: "hidden",
                }}
              >
                <img
                  src={adobe}
                  width="575px"
                  height="350px"
                  style={{ borderRadius: "7px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ padding: "55px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.5em",
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
          <Row lg={2}>
            <Col>
              <div className="p-2">
                <p className="hobby-text">
                  Outside of music and video editing, I enjoy staying active and
                  exploring the outdoors. Whether it’s hiking through National
                  Parks like Yosemite and Sequoia, relaxing at the beach, or
                  discovering new trails, I love experiencing nature whenever I
                  can. I’m also passionate about fitness and working out, seeing
                  it as both a challenge and a way to stay balanced and healthy.{" "}
                  <br></br>
                  Another fun fact about me—I speak three languages: English,
                  Spanish, and Japanese! Learning new languages has given me a
                  deeper appreciation for different cultures and perspectives,
                  and I enjoy finding new ways to connect with people through
                  language and shared experiences.
                  <br />I believe in continuous learning and pushing creative
                  boundaries, whether in music, technology, or personal growth.
                </p>
              </div>
            </Col>
            <Col>
              <div
                className="p-2"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  overflow: "hidden",
                }}
              >
                <img
                  src={nature}
                  width="480px"
                  height="340px"
                  style={{ borderRadius: "7px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
