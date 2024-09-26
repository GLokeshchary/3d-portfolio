import React from "react";
import "./Project.css";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { projects } from "../constants/projects";
const Project = () => {
  return (
    <section className="project-container">
      <div className="project-display">
        <h1 className="name"> Projects</h1>
      </div>
      <p>
        The following projects showcase my skills and experience through
        real-world applications of my work. Each project is accompanied by a
        brief description, along with links to the code repositories and live
        demos. These projects reflect my ability to tackle complex challenges,
        utilize various technologies, and effectively manage the entire project
        lifecycle. Each example demonstrates my commitment to delivering
        high-quality solutions that meet user needs and drive engagement.
      </p>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
