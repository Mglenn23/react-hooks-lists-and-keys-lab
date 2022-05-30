import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //  console.log(projects);
  const projectL = projects.map((about, id, name, technologies) => {
    return ProjectItem(about, id, name, technologies);
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projectL}
    </div>
  );
}

export default ProjectList;
