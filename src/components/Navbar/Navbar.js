import React, { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (sectionId) => {
    closeMenu();
    if (location.pathname === "/") {
      // On homepage: scroll normally
      scroller.scrollTo(sectionId, {
        duration: 600,
        smooth: true,
        offset: -70,
      });
    } else {
      // On another page: go back to homepage first
      navigate("/", { replace: false });
      // wait a tick for homepage to render
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 600,
          smooth: true,
          offset: -70,
        });
      }, 100); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li onClick={() => handleScrollOrNavigate("home")}>HOME</li>
        <li onClick={() => handleScrollOrNavigate("work")}>WORK</li>
        <li onClick={() => handleScrollOrNavigate("about")}>ABOUT</li>
        <li onClick={() => handleScrollOrNavigate("services")}>SERVICES</li>
        <li onClick={() => handleScrollOrNavigate("contact")}>CONTACT</li>
        <li> <Link to="/labs" onClick={closeMenu}> LABS </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
