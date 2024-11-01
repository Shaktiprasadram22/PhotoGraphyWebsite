// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import "./HeroSection.css";
function HeroSection() {
  // List of image URLs from a free image hosting service like Pexels or Unsplash
  const images = [
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Example image
    "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Example image
    "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Example image
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change the image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [images.length]); // Re-run only if the number of images changes

  return (
    <div
      style={{
        background: `url(${images[currentImageIndex]}) no-repeat center center / cover`,
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        // Ensuring text is visible on images, adjust as needed
      }}
    >
      <h1
        style={{
          backdropFilter: "blur(10px)", // Apply a blur effect
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
          padding: "10px 20px", // Some padding around the text
          borderRadius: "10px", // Rounded corners for the background
        }}
      >
        Welcome to Our Photography Studio
      </h1>
    </div>
  );
}

export default HeroSection;
