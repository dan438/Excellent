import React from "react";
import Sidebar from "../../components/sidebar";
import chip from "../../asset/images/chip-img-1.png";
import master from "../../asset/images/master-img.png";

function Credit() {
  return (
    <>
      <Sidebar name="credit" headerName="Credit Cards" />

      {/* top-bar end 
     main-content start  */}
      <div class="main-content">
        <div class="cradit-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="cards">
                  <div class="card-slider-two row">
                    <div className="col-lg-8">
                      <div>
                        <div class="card-setting">
                          {/* <div class="heading">
                            <h2>Card Setting</h2>
                          </div> */}
                          <div class="setting-list">
                            <ul>
                              <li>
                                <a href="#">
                                  <div class="icon bg-one">
                                    <i class="flaticon-block-credit-card"></i>
                                  </div>
                                  <div class="text">
                                    <h5>Block Card</h5>
                                    <p>Instantly block your card</p>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div class="icon bg-two">
                                    <i class="flaticon-padlock"></i>
                                  </div>
                                  <div class="text">
                                    <h5>Change Pin Code</h5>
                                    <p>Choose another pin code</p>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div class="icon bg-three">
                                    <i class="flaticon-group-249"></i>
                                  </div>
                                  <div class="text">
                                    <h5>Add to Google Pay</h5>
                                    <p>Withdraw without any card</p>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div class="icon bg-four">
                                    <i class="flaticon-apple"></i>
                                  </div>
                                  <div class="text">
                                    <h5>Add to Apple Pay</h5>
                                    <p>Withdraw without any card</p>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div class="icon bg-four">
                                    <i class="flaticon-apple"></i>
                                  </div>
                                  <div class="text">
                                    <h5>Add to Apple Store</h5>
                                    <p>Withdraw without any card</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="transection-card">
                        <div class="third-card">
                          <div class="chip-area">
                            <div class="balance">
                              <p>Balance</p>
                              <span>₦5,756</span>
                            </div>
                            <div class="chip-img">
                              <img src={chip} alt="images" />
                            </div>
                          </div>
                          <div class="holder">
                            <div class="single-holder">
                              <p>CARD HOLDER</p>
                              <span>Eddy Frank</span>
                            </div>
                            <div class="single-holder">
                              <p>VALID THRU</p>
                              <span>12/22</span>
                            </div>
                          </div>
                          <div class="card-number">
                            <p>3778 **** **** 1234</p>
                            <div class="master-img">
                              <img src={master} alt="images" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credit;
