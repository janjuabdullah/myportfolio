import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <div className="modal-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
