import React from "react";
import "./Landin.css";
import { Navigate,useNavigate } from "react-router-dom";
import cut from "../../assets/cut-text_09678c85.svg";
import box from '../../assets/box-cut.svg';
import flag from "../../assets/flag.svg";
import skull from "../../assets/skull.svg";
import ag from "../../assets/ag.svg";
import climb from "../../assets/climb.jpg";


const Landin = () => {
    const navigate=new useNavigate();
    return(
        <>
    <div className="landin-section">
        <div className="cli"><img src={climb}></img></div>

        <div className="landin">
            <p className="landin-p">Unlock the power of startup growth</p>
            <h1 className="landin-h1">Connecting investors to the future of innovation</h1>
            <p className="landin-p pp">Empower investors to pioneer the future through curated connections to cutting-edge innovation</p>
            <span onClick={()=>{navigate("signup");}} className="get-started">Get Started</span>
            <a href="#skills"><span className="what">What is Innovest</span></a>
        </div>
    </div>
     <div id="skills" className="section-skills">
     <div className="skills">
     <a href="#pursuits" class="r90 left hide-el bl has-rotate hide-m" data-cursor="false" data-cursor-type="link">

{/* <span class="text"> Pursuits&nbsp;</span> */}
{/* <span class="left"> &rarr;</span> */}
</a>
     <img decoding="async" src={ag} alt="Awesome guys bubble" class="tiny" data-rellax-speed="1" />
     <img decoding="async" src={skull} alt="Skull Icon" class="skull" data-rellax-speed="1"></img>


         <div id="skills-container"className="skills-container">

             <div id="skills-left" className="skills-left">

                 <h5 id="h5" className="h5">About Us</h5>
                 <h2 class="lh2"><strong>Transforming <span className="span-parent">ideas<img className="cut" alt="cut" src={cut}/><span className="span-child">Inspirations</span></span> into successful ventures via a</strong> comprehensive<strong> platform.</strong>
</h2>

                 
             </div>
             <div className="skills-right">
             <img class="jj" decoding="async" data-aos="fade-up" data-aos-offset="50" src={box} alt="Crossed out box illustration"  data-rellax-speed="-1" ></img>

                 <p className="lp">
             Hey you! Our platform is an all-in-one solution for managing and mapping investors, innovators, problems and monitoring startup growth. Our platform streamlines the fundraising process, connects startups with the right investors, fosters collaboration among innovators, facilitates problem-solving, offers mentorship and guidance and provides analytics to monitor growth. Join us to transform the startup ecosystem and empower entrepreneurs to succeed.!

             </p></div>

         </div>
         <img decoding="async" data-aos="fade-up" data-aos-offset="50" src={flag} alt="Hreat flagpole illustration" class="flag-icon" data-rellax-speed="1" ></img>
         <div className="change"></div>
     </div>
 </div></>
    );
};

export default Landin;