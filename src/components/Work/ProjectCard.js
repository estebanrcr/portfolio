// src/components/Work/ProjectCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="project-item">
      <div className="project-thumb">
        <img
          src={process.env.PUBLIC_URL + project.thumbnail}
          alt={project.title}
        />
      </div>
      <h3>
        {project.title}{" "}
        <span className={`project-category ${project.category.toLowerCase().replace(/\s/g,'-')}`}>
          {project.category}
        </span>
      </h3>
    </Link>
  );
}
