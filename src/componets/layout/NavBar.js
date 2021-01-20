import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from '../layout/SignedInLinks'
import {connect} from 'react-redux'
import SignedOut from "../layout/SignedOut";

const NavBar = (props) => {
  const {auth, profile} = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks profile ={profile}/> : <SignedOut />
  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          {/* <Link to="/" className="brand-logo">Maliks Plan</Link> */}
          {auth.isLoaded && links}

        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log(state)
  return{
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
}
export default connect (mapStateToProps)(NavBar);
