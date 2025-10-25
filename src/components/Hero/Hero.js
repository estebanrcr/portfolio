import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={process.env.PUBLIC_URL + "/videos/backgroundproxy2.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Esteban Rozzi</h1>
      <h2>Sound Design . Original Music</h2>
      <p>Bringing visuals to life through sound.</p>
      <a href="#work" className="cta-button">Play Showreel</a>
    </section>
  );
}

export default Hero;
