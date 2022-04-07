import React from "react";
import "./signin.css";
import logo from "../../asset/images/logo3.png";
import logo1 from "../../asset/images/logo.png";
import logo3 from "../../asset/images/excel-logo.jpg";

import eye from "../../asset/images/eye.svg";

const Index = () => {
  return (
    <div className="row m-0 signin">
      <div className="col-lg-6 bg">
        <div className="logo_div">
          <img src={logo3} />
          {/* <p className="logo_text">PristineDivitis</p> */}
          <p className="logo_text">ExcellentMFB</p>
        </div>
      </div>
      <div className="col-lg-6 form_div">
        <div className="form_div_inner">
          <div>
            <img src={logo3} />
            <h2 className="form_title pt-4">Sign in</h2>
            <p className="pb-3">
              New user? <span>Create an account</span>{" "}
            </p>
            <div className="my-3">
              <div className="form_input">
                <label>Email address</label>
                <input className="mb-4" placeholder="Email address" />
              </div>
              <div className="form_input">
                <label>Password</label>
                <input className="mb-4" placeholder="Password" />
                <img src={eye} />
              </div>
              <div className="my-4 form_button">
                <a className="form_forget" href="">
                  Forgot password?
                </a>
                <button className="">Sign In</button>
              </div>
            </div>
          </div>
          <div>
            <p className="footer_text pt-4">
              Protected by reCAPTCHA and subject to the Google{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms of Service.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
