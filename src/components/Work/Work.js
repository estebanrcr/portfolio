// src/components/Work/Work.js
import React from "react";
import { Link } from "react-router-dom";
import './Work.css';
import projects from "../../data/projects";

function Work() {
  return (
    <section id="work" className="work section">
      <h2>SELECTED WORKS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/work/${project.id}`} className="project-item">
            <div className="project-thumb">
              <img
                src={process.env.PUBLIC_URL + project.thumbnail}
                alt={project.title}
              />
            </div>
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Work;
