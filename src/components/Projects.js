import React from 'react';
import { personalProjects, ossProjects } from '../helpers/projects';
import ProjectCard from './ProjectCard';

const projectsList = () => {
  return (
    <main id="projects">
      <div className="projects-wrapper">
        <div className="project-list">
          <h2 className="project-list__label">Personal Projects</h2>
          <section id="personal-projects" className="project-list__cards">
            {personalProjects.map(project => (
              <ProjectCard key={project.projID} {...project} />
            ))}
          </section>
        </div>
        <div className="project-list">
          <h2 className="project-list__label">OpenSource Contributions</h2>
          <section id="oss-projects" className="project-list__cards">
            {ossProjects.map(project => (
              <ProjectCard key={project.projID} {...project} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default projectsList;
