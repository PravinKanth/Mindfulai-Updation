import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Navigate,useNavigate } from "react-router-dom";


const Header = () => {
    const navigate=new useNavigate();
    return(
        <div className="header-section">
            <div className="header">
                <img onClick={()=>{navigate("/");}} className="logo" src={logo}></img>
                <ul className="header-ul">
                    <li onClick={()=>{navigate("signup");}} className="header-li">Register</li>
                    <li onClick={()=>{navigate("login");}}className="header-li1">Login</li>
                </ul>

            </div>
        </div>
    );
};

export default Header;