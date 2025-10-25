import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./data/projects"; // adjust path if needed

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found</p>;

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
        <Link to="/#work" style={{ color: "#ff000d", textDecoration: "none" }}>
          ← Back to Works
        </Link>
      </div>
    </div>
  );
}
