import React, { useState } from 'react';
import './Compaign.css';
import { useNavigate } from 'react-router-dom';

function Compaign() {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const navigate= new useNavigate();

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (<>        <div className="dashboard-section">
  <div className="dashboard">
  <ul className="dashheader-ul">
          <li onClick={()=>{navigate("/dashboard");}} className="dashheader-li">Pitching</li>
          <li onClick={()=>{navigate("/compaign");}} className="dashheader-li">Compaign</li>
          <li onClick={()=>{navigate("/dashboard");}} className="dashheader-li">Your Dashboard</li>
          <li onClick={()=>{navigate("/");}}className="dashheader-li1">Logout</li>
      </ul>
  </div>
</div>
    <div className={`containerr ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="main_content">
        <div className="left_right_sidebar_opener">
          <div className="hamburger" onClick={toggleLeftSidebar}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
        <div className='fl'>
        <div className="main_navbar">
          <div className="search_box">
            <i className="bx bx-search-alt-2"></i>{' '}
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="menu_item_name_and_filter">
          <div className="menu_item_name">
            {/* <h2>Homepage</h2> */}
          </div>
          <div className="filter_and_sort">
            <div className="sort sort_and_filter">
              <p>Sort</p>
              <i className="bx bx-sort-down"></i>
            </div>
            <div className="filter sort_and_filter">
              <p>Filter</p>
              <i className="bx bx-filter"></i>
            </div>
          </div>
        </div>
        </div>
        <div className="table">
          <table>
            <tr className="effect_head">
              <th>Name</th>
              <th>Idea</th>
              <th>Idea_type</th>
              <th>Budget</th>
              <th>Invest</th>
            </tr>
            <tr class="adhicon">
                        <td>Suriya</td>
                        <td>When these families go away for extended periods, your pet-sitting small business can give them peace of mind. As a pet sitter, you’ll watch over your clients’ dogs, cats or other pets at their house. As part of the job, you’ll need to feed them, give them water, play with them, and (with dogs) walk them as needed. </td>
                        <td>Pet Daycare</td>
                        <td>50000</td>
                        <td><button class="Invest">Invest</button></td>
                    </tr>
                    <tr class="adhicon">
                        <td> Pravin Kanth</td>
                        <td>If you have a sense of fashion (or humor), you might enjoy launching a T-shirt printing business. You can also license someone else’s designs and screenprint them onto a blank tee. Either way, if you have space for a T-shirt printing setup, you can easily acquire the necessary tools to get started</td>
                        <td>commerce</td>
                        <td>100000</td>
                        <td><button class="Invest">Invest</button></td>
                    </tr>
                    <tr class="adhicon">
                        <td>Adhi Vigneshwarar</td>
                        <td>If you like to clean, you can easily turn that into a business. With a few staff members, a host of cleaning supplies and transportation, you can offer cleaning services to homeowners, apartment complexes and commercial properties. Most cleaning services charge $25 to $50 per hour.</td>
                        <td>Homecare</td>
                        <td>30000</td>
                        <td><button class="Invest">Invest</button></td>
                    </tr>
                    <tr class="adhicon">
                        <td>Jeyan</td>
                        <td>If you like to clean, you can easily turn that into a business. With a few staff members, a host of cleaning supplies and transportation, you can offer cleaning services to homeowners, apartment complexes and commercial properties. Most cleaning services charge $25 to $50 per hour.</td>
                        <td>Homecare</td>
                        <td>30000</td>
                        <td><button class="Invest">Invest</button></td>
                    </tr>
                    <tr class="adhicon">
                        <td>Sriram</td>
                        <td>If you’re a natural wordsmith with a bit of marketing knowledge, you can establish yourself as a freelance copywriter or content writer. Whether you write blogs, web content or press releases, plenty of companies will pay for your services. Increase your value by using SEO knowledge to help clients craft a strategy around specific keywords that their target audience is already using in their online searches.</td>
                        <td>IT</td>
                        <td>50000</td>
                        <td><button class="Invest">Invest</button></td>
                    </tr>
          </table>
        </div>
      </div>
      <div className={`left_sidebar ${isLeftSidebarOpen ? 'open' : ''}`}>
        {/* Add left sidebar content here */}
      </div>

    </div></>
  );
}

export default Compaign;
