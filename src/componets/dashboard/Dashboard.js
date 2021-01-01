import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import {firebaseConnect, firestoreConnect} from  'react-redux-firebase'
import {compose} from 'redux'

// connect is a function to take a higher order component 
import {connect} from 'react-redux'

 class Dashboard extends Component {
   
  render() {
    // console.log(this.props)
    const {projects} = this.props

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


const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
