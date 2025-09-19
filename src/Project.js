// Project.js
import React from 'react';
import './Project.css';

const Project = ({ image, title, description, year, tags, link }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h2>{title}</h2>
          <span className="project-year">{year}</span>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map(tag => <span key={tag}>#{tag}</span>)}
        </div>
        {link && (
          <a href={link} className="project-link">View Project</a>
        )}
      </div>
    </div>
  );
};

export default Project;