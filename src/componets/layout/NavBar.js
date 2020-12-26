import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from '../layout/SignedInLinks'
import SignedOut from '../layout/SignedOut'

const NavBar = () => {
  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">Maliks Plan</Link>
          <SignedInLinks />
          <SignedOut />

        </div>
      </nav>
    </>
  );
};
export default NavBar;
