import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-photo"></div>

      <div className="about-text section">
        <h2>About Me</h2>
        <p>
          I’m a <strong>sound designer</strong>, <strong>re-recording engineer</strong>,
          and <strong>music composer</strong> with over a decade of experience in film,
          television, and digital media. My work focuses on crafting immersive sonic worlds —
          from subtle textures to impactful soundscapes.
        </p>

        <p>
          I’ve collaborated with production companies, agencies, and artists across
          different platforms — including broadcast, animation, commercials, and online
          campaigns. Every project is an opportunity to build a unique sonic identity.
        </p>

        <p className="quote">
          “Sound is not just what we hear — it’s what we feel.”
          
        </p>
      </div>
    </section>
  );
}

export default About;
