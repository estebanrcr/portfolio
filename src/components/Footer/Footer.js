// src/components/Footer.js
import React from "react";
import { FaInstagram, FaLinkedin, FaBriefcase, FaSpotify } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/esteban_rozzi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/esteban-costilla-rozzi-a3210252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.upwork.com/freelancers/~0183a1eb42f1bddc08" target="_blank" rel="noopener noreferrer">
          <FaBriefcase />
        </a>
               <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
          <FaSpotify/>
        </a>

      </div>
      <p>&copy; {new Date().getFullYear()} Esteban Rozzi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
