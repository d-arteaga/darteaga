import TypeWriterEffect from "react-typewriter-effect";
import kirby from "../assets/chef_app.png";
import drums from "../assets/drumming.jpg";
import music from "../assets/ongaku.png";
import nature from "../assets/nature.jpg";
import tyler from "../assets/tyler_drum.png";
import namm from "../assets/namm.png";
import ImageGallery from "react-image-gallery";
import Stack from "react-bootstrap/Stack";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Footer from "../Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Home.css";

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
      originalTitle: 'Performing "Caravan"',
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: music,
      thumbnail: music,
      description: "Spotify Clone",
      originalTitle: "Spotify Clone",
      thumbnailHeight: "60px",
      thumbnailWidth: "90px",
    },

    {
      original: nature,
      thumbnail: nature,
      description: "Descanso Gardens,CA",
      originalTitle: "Descanso Gardens,CA",
      originalHeight: "550px",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: tyler,
      thumbnail: tyler,
      description: "Drum Set Web Simulator",
      originalTitle: "Drum Set Web Simulator",
      thumbnailHeight: "60px",
      thumbnailWidth: "120px",
    },
    {
      original: namm,
      thumbnail: namm,
      originalTitle: "NAMM Show 2020 Performance",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
  ];

  return (
    <>
      <Header />
      <br />
      <Stack gap={3}>
        <div style={{ paddingTop: "58px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "5.7em",
              textAlign: "center",
            }}
            startDelay={100}
            cursorColor="black"
            text="Hi, I'm Diego."
            typeSpeed={100}
          />
        </div>
        <Container>
          <h3 className="tagline">
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
