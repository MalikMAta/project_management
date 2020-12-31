import React, { useState } from "react";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault();

    if(email && password){
        const users = {email, password}
        
        setUser((people) =>{
            return[...people, users]
            console.log(users)
        })
        setEmail("")
        setPassword("")
    }else{
        alert('error')
    }
    
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
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
