import React, { useState } from "react";
import logo from "../../asset/images/logo-2x.png";
import logo2 from "../../asset/images/logo-2x.png";
import logo3 from "../../asset/images/excel-logo.jpg";
import logo4 from "../../asset/images/logo3.png";
import logo5 from "../../asset/images/logo4-2x.png";
import { Link } from "react-router-dom";

function Sidebar({ name, headerName }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside>
        <div className={toggle ? "left-sidebar show" : "left-sidebar"}>
          <div class="logo-area">
            <div class="main-logo">
              <Link to="/">
                {/* <img src={logo} srcSet={`${logo2} 2x`} alt="images" /> */}
                <img src={logo4} srcSet={logo5} alt="images" />
              </Link>
            </div>
          </div>
          <div class="sidebar-menu">
            <ul>
              <li class={name === "Dashboard" ? "active" : ""}>
                <Link to="/">
                  <i class="flaticon-home"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li class={name === "Accounts" ? "active" : ""}>
                <Link to="/accounts">
                  <i class="flaticon-user"></i>
                  <span>Accounts</span>
                </Link>
              </li>
              <li class={name === "Transfers" ? "active" : ""}>
                <Link to="/transfers">
                  <i class="flaticon-money-transfer"></i>
                  <span>Transfers</span>
                </Link>
              </li>

              <li class={name === "investment" ? "active" : ""}>
                <Link to="/bills">
                  <i class="flaticon-economic-investment"></i>
                  <span>Bills and Payments</span>
                </Link>
              </li>
              <li class={name === "credit" ? "active" : ""}>
                <Link to="/credit-card">
                  <i class="flaticon-credit-card"></i>
                  <span>Credit Cards</span>
                </Link>
              </li>
              <li class={name === "loan" ? "active" : ""}>
                <Link to="/loan">
                  <i class="flaticon-loan"></i>
                  <span>Loans</span>
                </Link>
              </li>
              <li class={name === "service" ? "active" : ""}>
                <Link to="/services">
                  <i class="flaticon-service"></i>
                  <span>Services</span>
                </Link>
              </li>
              <li class={name === "setting" ? "active" : ""}>
                <a>
                  <i class="flaticon-settings"></i>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <header>
        <div class="top-area">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-3">
                <div class="top-heading mt-2">
                  <h2>{headerName}</h2>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => setToggle(!toggle)} class="toogle-bar mt-2">
            <span id="toggle">
              <i class="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Sidebar;
