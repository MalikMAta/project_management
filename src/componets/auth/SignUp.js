import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [newUser, setNewUser] = useState([]);

  const { auth, authError } = props;

  // // Protect the links and redirect
  if (auth.uid) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && firstName && lastName) {
      const users = { email, password, firstName, lastName };

      // setNewUser((people) => {
      //   return [...people, users];
      // });
      props.signUp(users);

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    } else {
      alert("error");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

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
          <div className="input-feild">
            <label htmlFor="password">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-feild">
            <label htmlFor="password">LastName</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
            <div className="red-text center">
              {authError ? console.log(authError) : null}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
