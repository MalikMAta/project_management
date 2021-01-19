import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import {Redirect} from 'react-router-dom'


function SignIn(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {authError, auth} = props


  // // Protect the links and redirect
  if(auth.uid) return <Redirect to = '/' /> 
    
    
  
  // const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const users = { email, password };
      console.log(users)

      // setUser((people) => {
      //   return [...people, users];
      // });
      props.signIn(users);
     
    } else {
      alert("error");
    }
    setEmail("");
    setPassword("");
  };


  return (
    
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign in</h5>

          <div className="input-feild">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-feild">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">{authError ? <p> {authError} </p>:null}</div>
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {

  return{
    authError: state.auth.authError,
    auth: state.firebase.auth

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
