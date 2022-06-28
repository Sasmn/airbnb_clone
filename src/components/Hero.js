import React from "react";
import photo_grid from "../images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img src={photo_grid} alt="Grid of photos" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
