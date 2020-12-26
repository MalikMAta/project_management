import React from "react";

const ProjectDetails = (props) => {
  // Here is where the details for the projects will go


//   get the id from the browser
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          {/* create a title */}
          <span className="card-title">Projects Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            velit enim autem soluta vero, quae sapiente ut non qui. Perspiciatis
            eum exercitationem voluptates dignissimos aut! Repellat nemo ad iste
            corporis?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: Jack</div>
          <div>3.23.2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
