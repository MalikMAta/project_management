import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title} </span>
          <p>Poted by: {project.authorFirstName}</p>
          <p className="grey-text">{project.createdAt.toDate().toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
 