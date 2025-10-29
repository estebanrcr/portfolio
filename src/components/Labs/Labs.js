import React from "react";
import "./Labs.css";

function Labs() {
  return (
    <section id="Labs" className="Labs section">
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Labs Page</h1>
      <p>This is the Labs page content.</p>

      <h2>Game audio</h2>
      <h3>Stealth video game</h3>
      <a
        href="https://play.unity.com/es/games/0c7f6e61-a44c-46aa-a0fc-4c1e4ff62462/stealth-game"
        target="_blank"
        rel="noopener noreferrer"
        className="unity-button">
        Play Stealth Game
      </a>
      <p>Made in Unity + FMOD </p>

      
 
      <h2>360 audio</h2>
    </div>
    </section>
  );
}

export default Labs;
