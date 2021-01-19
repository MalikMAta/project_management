import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { firestoreConnect} from  'react-redux-firebase'
// connect is a function to take a higher order component 
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

 class Dashboard extends Component {
   
  render() {
    // console.log(this.props)
    const {projects, auth} = this.props

    // Protect the links and redirect
    if(!auth.uid) return <Redirect to = '/signin' /> 
    
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {" "}
            <ProjectList projects={projects}/>
          </div>
          <div className="12 s12 m5 offset-m1">
            {" "}
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}
// const mapStateToProps = (state) => {
//   console.log(state);
//   const projects = state.firestore.ordered.projects
//   return {
//     projects: projects,
//   };
// };
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'},

  ])
)(Dashboard)
