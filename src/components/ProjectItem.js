import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  // console.log(technologies);
  const techL = technologies.map((data, idx) => {
    return <span key={idx}>{data}</span>;
  });
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techL}</div>
    </div>
  );
}

export default ProjectItem;
