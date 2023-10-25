import "./Dashboard.css";
import React, { useState } from "react";
import formimage from "../../assets/form-image.png";
import img2 from "../../assets/img2.jpg";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {
    const navigate=new useNavigate();
    const [formData, setFormData] = useState({
      proposal:"",
      theme: "",
      budget:"",
      email:"",
      name:""
    });
  
  
  
    const handlevalues = (event) => {
      const { name, value, type} = event.target;
  
      if(type=='file'){
        // 

      }
  
      else{
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
      console.log(event.target);
      setFormData((prevData) => ({
        ...prevData,
        
        [name]: value,
      }));
    //   console.log(formData.profile)
    };
  

  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const name=sessionStorage.getItem("name");
      const email= sessionStorage.getItem("email");


      const formData1={...formData,name:name,email:email
    }
    console.log(formData1);

      axios.post('http://127.0.0.1:8000/pitch/', formData1, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

        navigate("/");
  
        
    };
    return(<>
        <div className="dashboard-section">
            <div className="dashboard">
            <ul className="dashheader-ul">
                    <li onClick={()=>{navigate("/dashboard");}} className="dashheader-li">Compaign</li>
                    <li onClick={()=>{navigate("/dashboard");}} className="dashheader-li">Pitching</li>
                    <li onClick={()=>{navigate("/dashboard");}} className="dashheader-li">Your Dashboard</li>
                    <li onClick={()=>{navigate("/");}}className="dashheader-li1">Logout</li>
                </ul>
            </div>
        </div>
        <div className="pitch-section">
        <div className="pitch">
  
          <div className="pitch-grid">
            <img src={formimage} alt="form-image" className="form-image" />
  
            <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
  
                    <div className="proposal">
                    <div className="label">
                      <label>Proposal</label>
                    </div>
                    <div className="input">
                    <textarea
                        type="textarea"
                        className="in roll"
                        name="proposal"
                        id="proposal"
                        placeholder="Pitch proposal (Max char. 200)"
                        onChange={handlevalues}
                        required
                        value={formData.proposal} rows="4" cols="50" maxlength="200"></textarea>
  
                    </div>
                  </div>
  

  
                  <div className="theme">
                    <div className="label">
                      <label>Theme Type</label>
                    </div>
                    <select
                      className="input select"
                      name="theme"
                      value={formData.theme}
                      onChange={handlevalues}
                      required
                    >
                      <option value="">Select theme type</option>
                      <option value="IT">
                        IT
                      </option>
                      <option value="Finance">
                        Finance
                      </option>
                      <option value="Healthcare">
                        Healthcare
                      </option>
                      <option value="FMCG">
                        FMCG
                      </option>
                      <option value="Automobile">
                        Automobile
                      </option>
                    
                    </select>
                  </div>
                  <div className="budget">
                    <div className="label">
                      <label>Budget</label>
                    </div>
                    <div className="input input1">
                      <input
                        type="number"
                        className="in"
                        name="budget"
                        id="budget"
                        value={formData.budget}
                        onChange={handlevalues}
                        placeholder="Budget (in lakhs)"
                        step="1"
                        required
                      />
                    
                  </div>
  
                  </div>
  

  
  
                <button type="submit" className="btn">Submit</button>
  
                </div>
                             
                </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default Dashboard;