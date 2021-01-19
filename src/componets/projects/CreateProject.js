import React, {  useState } from "react";
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

function CreateProject(props) {

    

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 

  const [newPost, setNewPost] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && content ){
        const posts = {title, content}
        
        setNewPost((post) =>{
            return[...post, posts]
        })
        setTitle("")
        setContent("")
        props.createProject(newPost)
        setNewPost("")

     }else{ 
        alert('error')
    }
    
  };

  const {auth} = props

  if(!auth.uid) return <Redirect to = '/signin' /> 

  return (

  
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>

          <div className="input-feild">
            <label htmlFor="email">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-feild">
            <label htmlFor="password">Content</label>
            <textarea
              className="materialize-textarea"
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
         

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateProject);







