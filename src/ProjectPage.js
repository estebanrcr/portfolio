// src/components/Work/ProjectPage.js
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "./data/projects"; 
import "./ProjectPage.css";


export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

    // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) return <p className="project-page-notfound">Project not found</p>;

  const goBackToWorks = () => {
    navigate("/"); // go to home
    setTimeout(() => {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="project-page">
      <h1 className="project-title">{project.title}</h1>
      <div className="project-video">
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="project-description">{project.description}</p>

      <button onClick={goBackToWorks} className="back-button">
        ← Back to Works
      </button>
    </div>
  );
}
