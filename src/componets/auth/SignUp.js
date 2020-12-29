import React, { Component, useState } from "react";

function SignUp() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newUser, setNewUser] = useState([])


  const handleInputChange = e => {

    var {name, value} = e.target
   
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(email && password && firstName && lastName){
        const users = {email, password, firstName, lastName}
        
        setNewUser((people) =>{
            return[...people, users]
            console.log(newUser)
        })
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
    }else{
        alert('error')
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
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
