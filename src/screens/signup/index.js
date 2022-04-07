import React from "react";
import logo from "../../asset/images/logo3.png";
import logo1 from "../../asset/images/logo.png";
import logo3 from "../../asset/images/excel-logo.jpg";
import eye from "../../asset/images/eye.svg";
import "./signup.css";

const Index = () => {
  return (
    <div className="row m-0 signup">
      <div className="col-lg-6 bg">
        <div className="logo_div">
          <img src={logo3} />
          {/* <p className="logo_text">PristineDivitis</p> */}
          <p className="logo_text">ExcellentMFB</p>
        </div>
      </div>
      <div className="col-lg-6 form_div">
        <div className="form_div_inner">
          <img src={logo3} />
          <h2 className="form_title pt-4">Create an account</h2>
          <p className="pb-3">
            Already have an account? <span>Sign in</span>{" "}
          </p>
          <div className="my-3">
            <div className="form_input">
              <label>Email address</label>
              <input className="mb-4" placeholder="Email address" />
            </div>
            <div className="form_name">
              <div className="form_input">
                <label>First name</label>
                <input className="mb-4" placeholder="first name" />
              </div>
              <div className="form_input">
                <label>Last name</label>
                <input className="mb-4" placeholder="Last name" />
              </div>
            </div>
            <div className="form_input">
              <label>Password</label>
              <input className="mb-4" placeholder="Password" />
              <img src={eye} />
            </div>
            <div className="my-4 form_button">
              <button>Sign In</button>
            </div>
            <div className="form_checkbox">
              <input className="mr-3" type="checkbox" />
              <p>
                By clicking Create account, I agree that I have read and
                accepted the <span>Terms of Use</span> and{" "}
                <span>Privacy Policy</span>.
              </p>
            </div>
          </div>

          <p className="footer_text pt-4">
            Protected by reCAPTCHA and subject to the Google{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
