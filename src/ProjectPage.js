// src/components/Work/ProjectPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "./data/projects"; 


export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found</p>;

  const goBackToWorks = () => {
    navigate("/"); // go to home
    setTimeout(() => {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50); // slight delay to ensure element is in DOM
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{project.title}</h1>
      <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p style={{ margin: "1rem 0" }}>{project.description}</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={goBackToWorks}
          style={{
            color: "#ff000d",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          ← Back to Works
        </button>
      </div>
    </div>
  );
}
