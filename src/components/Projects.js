import React from "react";
import Projects from "../helpers/projects";
import ProjectCard from "./ProjectCard";

const projectsList = () => {
  return (
    <main id="projects">
      {Projects.map(project => (
        <ProjectCard key={project.projID} {...project} />
      ))}
    </main>
  );
};

export default projectsList;
