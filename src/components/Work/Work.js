// src/components/Work.js
import React from "react";
import { Link } from "react-router-dom";
import './Work.css';
import projects from "../../data/projects"; // <-- use this array

function Work() {
  return (
    <section id="work" className="work section">
      <h2>SELECTED WORKS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/work/${project.id}`} className="project-item">
            <div className="project-thumb">
              <img src={project.thumbnail} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Work;
