// Project.js
import React from 'react';
import './Project.css';

const Project = ({ image, title, description, year, tags, link, device = "laptop" }) => {
  const Wrapper = link ? 'a' : 'div';

  return (
    <Wrapper className="project" href={link} target={link ? "_blank" : undefined} rel={link ? "noreferrer" : undefined}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="project-image">
        <div className={`device-frame frame--${device}`}>
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h2>{title}</h2>
          <span className="project-year">{year}</span>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-footer" data-cosmic="ignore">
          <div className="project-tags">
            {tags.map(tag => <span key={tag}>#{tag}</span>)}
          </div>

          {link && (
            <span className="project-link">
              View Project <span className="project-link-arrow">›</span>
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;

