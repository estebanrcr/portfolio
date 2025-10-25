// src/components/Work/Work.js
import React from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Work.css";

export default function Work() {
  return (
    <section id="work" className="work section">
      <h2>SELECTED WORKS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
