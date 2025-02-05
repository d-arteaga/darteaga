import TypeWriterEffect from "react-typewriter-effect";
import kirby from "../assets/chef_app.png";
import drums from "../assets/drumming.jpg";
import music from "../assets/spotify.png";
import nature from "../assets/nature.jpg";
import tyler from "../assets/tyler_drum.png";
import ImageGallery from "react-image-gallery";
import Stack from "react-bootstrap/Stack";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Footer from "../Footer";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Home() {
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
      original: kirby,
      thumbnail: kirby,
      originalTitle: "AI Recipe Recommendation App",
      //description: "AI Recipe Generator",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: drums,
      thumbnail: drums,
      //description: "Jazz Performance",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: tyler,
      thumbnail: tyler,
      description: "Drum Set Web Simulator",
      thumbnailHeight: "60px",
      thumbnailWidth: "120px",
    },
    {
      original: nature,
      thumbnail: nature,
      description: "Descanso Gardens,CA",
      originalHeight: "550px",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: music,
      thumbnail: music,
      description: "Spotify Clone",
      thumbnailHeight: "60px",
      thumbnailWidth: "90px",
    },
  ];

  return (
    <>
      <Header />
      <br />
      <Stack gap={3}>
        <div style={{ paddingTop: "60px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "5.8em",
              textAlign: "center",
            }}
            startDelay={100}
            cursorColor="black"
            text="Hi, I'm Diego."
            typeSpeed={100}
          />
        </div>
        <Container>
          <h3
            style={{
              fontWeight: "370",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              fontSize: "2rem",
            }}
          >
            Developer &nbsp;&nbsp;|&nbsp;&nbsp; Musician
            &nbsp;&nbsp;|&nbsp;&nbsp; Creator
          </h3>
        </Container>
        <Container>
          <ImageGallery items={images} autoPlay infinite />
        </Container>
      </Stack>

      <Footer />
    </>
  );
}
