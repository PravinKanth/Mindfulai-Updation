import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const navigate=new useNavigate();
  const [errorMessage, setErrorMessage] = useState("");




  const handleSigninSubmit = (event) =>{
    event.preventDefault();

    const signinData = {
        signinemail: signInEmail,
        signinpassword: signInPassword
      };

      console.log(signinData);
  
      axios.post("http://127.0.0.1:8000/signin/", signinData, {
        headers: { 'Content-Type': 'multipart/form-data' }  
      }
  )
        .then(response => {
          console.log(response.data);
          if(response.data.message==="Authentication Successful"){
            setErrorMessage("");
            sessionStorage.setItem("email", signInEmail);
            sessionStorage.setItem("name", response.data.name);
            navigate("/dashboard");
          }

          else if(response.data==="E-Mail ID not found!"){
            setErrorMessage("E-Mail ID not found!");
          }

          else{
            setErrorMessage("Invalid Password!");
          }
        })
        .catch(error => {
          console.error(error);
          setErrorMessage("An error occurred");
        });

  };

  return (
    
    <div className="login">
      <div className={`container ${true ? "right-panel-active" : ""}`} id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSigninSubmit} encType="multipart/form-data">
            <h1>Sign in</h1>
            <span className="spanc"></span>
            <input type="email" placeholder="Email" value={signInEmail} required onChange={(e) => setSignInEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={signInPassword} required onChange={(e) => setSignInPassword(e.target.value)} />
            <p className="showError">{errorMessage}</p>
            {/* <a href="#">Forgot your password?</a> */}
            <button type="submit" className="sub">Sign In</button>

          </form>
          
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello, Friend!</h1>
              <p className="login-p">Enter your personal details and start your journey with us</p>
              <button  onClick={()=>{navigate("/signup");}} className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
