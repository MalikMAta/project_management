import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from '../layout/SignedInLinks'
import {connect} from 'react-redux'
import SignedOut from "../layout/SignedOut";

const NavBar = (props) => {
  const {auth} = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks /> : <SignedOut />
  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">Maliks Plan</Link>
          {links}

        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return{

    auth: state.firebase.auth
  }
}
export default connect (mapStateToProps)(NavBar);
