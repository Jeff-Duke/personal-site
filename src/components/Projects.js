import React from "react";
import Projects from "../helpers/projects";
import ProjectCard from "./ProjectCard";

const projectsList = () => {
  return (
    <section id="projects">
      {Projects.map(project => (
        <ProjectCard key={project.projID} {...project} />
      ))}
    </section>
  );
};

export default projectsList;
