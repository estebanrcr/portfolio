import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  // ✅ Mobile viewport height fix (prevents cropped hero video)
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // run on mount
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <section id="home" className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source
          src={process.env.PUBLIC_URL + "/videos/backgroundproxy2.mp4"}
          type="video/mp4"
        />
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
