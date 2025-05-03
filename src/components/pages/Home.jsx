import TypeWriterEffect from "react-typewriter-effect";
import kirby from "../assets/chef_app.png";
import drums from "../assets/drumming.jpg";
import music from "../assets/ongaku.png";
import nature from "../assets/nature.jpg";
import tyler from "../assets/tyler_drum.png";
import namm from "../assets/namm.png";
import cocoa from "../assets/col.png";
import lung from "../assets/lung_nodule.png";
import health from "../assets/healthcare.png";
import ImageGallery from "react-image-gallery";
import Stack from "react-bootstrap/Stack";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Footer from "../Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Home.css";
import { CarouselCaption } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Home() {
  const myRef = document.querySelector(".scrollable-div");
  const [fontSize, setFontSize] = useState("5.7em");
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
      original: cocoa,
      thumbnail: cocoa,
      originalTitle: "Agricultural IoT",
      description: "Agricultural IoT",
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
      original: health,
      thumbnail: health,
      originalTitle: "Healthcare Device Anomaly Detection",
      description: "Healthcare IoT Anomaly Detection",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: kirby,
      thumbnail: kirby,
      originalTitle: "AI Recipe Recommendation App",
      //description: "AI Recipe Generator",
      thumbnailHeight: "60px",
      thumbnailWidth: "80px",
    },
    {
      original: lung,
      thumbnail: lung,
      originalTitle: "Lung Cancer Detection",
      description: "Lung Cancer Detection",
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setFontSize("3em");
      } else if (window.innerWidth <= 768) {
        setFontSize("4em");
      } else {
        setFontSize("5.7em");
      }
    };

    // Set initial font size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <br />
      <Stack gap={3}>
        <div style={{ paddingTop: "58px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: fontSize,
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
          <ImageGallery items={images} autoPlay infinite lazyload />
        </Container>
      </Stack>

      <Footer />
    </>
  );
}
