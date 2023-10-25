import React, { useState, useEffect } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate=new useNavigate();

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");




  const handleSignupSubmit = (event) =>{
    event.preventDefault();

    const signupData = {
        signupname: signUpName,
        signupemail: signUpEmail,
        signuppassword: signUpPassword
      };

      console.log(signupData);
  
      axios.post("http://127.0.0.1:8000/signup/", signupData, {
        headers: { 'Content-Type': 'multipart/form-data' }  
      }
  )
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

        navigate("/login");
  };



  return (
    <div className="login">
      <div className={`container ${false ? "right-panel-active" : ""}`} id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignupSubmit} encType="multipart/form-data">
            <h1>Create Account</h1>
            <span className="spanc"></span>
            <input type="text" placeholder="Name" value={signUpName} required onChange={(e) => setSignUpName(e.target.value)} />
            <input type="email" placeholder="Email" value={signUpEmail} required onChange={(e) => setSignUpEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={signUpPassword} required onChange={(e) => setSignUpPassword(e.target.value)} />
            <button type="submit" className="sub">Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p className="login-p">To keep connected with us please login with your personal info</p>
              <button onClick={()=>{navigate("/login");}} className="ghost" id="signIn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
