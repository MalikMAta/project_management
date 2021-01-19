import React from "react";
import {connect} from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'


const ProjectDetails = (props) => {
  // Here is where the details for the projects will go

  const {auth} = props

  if(!auth.uid) return <Redirect to = '/signin' /> 
//   get the id from the browser
 const {project} = props
 if(project ){
   return(
  <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          {/* create a title */}
          <span className="card-title">{project.title}</span>
          <p>
         {project.content}
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: {project.authorFirstName} {project.authorLastname}</div>
          <div>3.23.2020</div>
        </div>
      </div>
    </div>
   )
 } else{
   return(
<div className="container-center"> <p>Loading Project... </p></div>
   )
 }

  
};

const mapStateToProps = (state, ownProps) =>{
  // console.log(state)
  const id = ownProps.match.params.id;
  const Projects = state.firestore.data.projects
  const project = Projects ? Projects[id] : null
    return{
    project: project,
    auth: state.firebase.auth

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(
    [
      {collection: 'projects'}
    ]
  )
) (ProjectDetails);
