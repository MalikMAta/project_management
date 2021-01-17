import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.id} {project.name}</span>
          <p>Posted by malik</p>
          <p className="grey-text">3.23.2020</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
 