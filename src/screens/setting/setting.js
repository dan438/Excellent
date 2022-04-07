import React from "react";
import Sidebar from "../../components/sidebar";

function Setting() {
  return (
    <>
      <Sidebar name="setting" headerName="Settings" />
      {/* top-bar end 
     main-content start  */}
      <div class="main-content">
        <div class="setting-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="settings-tab">
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Edit Profile
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Preferences
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Security
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div class="edit-profile">
                        <div class="row">
                          <div class="col-lg-2 col-md-4">
                            <div class="profile-img">
                              <img src="images/profile-2.png" alt="images" />
                              <div class="edit-icon">
                                <a href="#">
                                  <img src="images/pencil.png" alt="images" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5">
                            <div class="profile-form">
                              <form action="#">
                                <div class="single-form">
                                  <p>Your Name</p>
                                  <input
                                    type="text"
                                    placeholder="Charlene Reed"
                                  />
                                </div>
                                <div class="single-form">
                                  <p>Email</p>
                                  <input
                                    type="email"
                                    placeholder="charlenereed@gmail.com"
                                  />
                                </div>
                                <div class="single-form">
                                  <p>Date of Birth</p>
                                  <input type="date" />
                                </div>
                                <div class="single-form">
                                  <p>Permanent Address</p>
                                  <input
                                    type="text"
                                    placeholder="San Jose, California, USA"
                                  />
                                </div>
                                <div class="single-form">
                                  <p>Postal Code</p>
                                  <input type="text" placeholder="45962" />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="col-lg-5">
                            <div class="profile-form">
                              <form action="#">
                                <div class="single-form">
                                  <p>User Name</p>
                                  <input
                                    type="text"
                                    placeholder="Charlene Reed"
                                  />
                                </div>
                                <div class="single-form">
                                  <p>Password</p>
                                  <input
                                    type="password"
                                    placeholder="**********"
                                  />
                                </div>
                                <div class="single-form">
                                  <p>Present Address</p>
                                  <input
                                    type="text"
                                    placeholder="San Jose, California, USA"
                                  />
                                </div>
                                <div class="single-form">
                                  <p>City</p>
                                  <input type="text" placeholder="San Jose" />
                                </div>
                                <div class="single-form">
                                  <p>Country</p>
                                  <input type="text" placeholder="USA" />
                                </div>
                                <div class="save-button">
                                  <button type="submit">Save</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="preference-edit">
                        <div class="preference-form">
                          <form action="#">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="single-form">
                                  <p>Currency</p>
                                  <input type="text" placeholder="USD" />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="single-form">
                                  <p>Time Zone</p>
                                  <input
                                    type="text"
                                    placeholder="(GMT-12:00) International Date Line West"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="notification">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="notification-heading">
                                <h3>Notification</h3>
                              </div>
                              <div class="single-notification">
                                <label class="switch">
                                  <input type="checkbox" checked />
                                  <span class="slider round"></span>
                                </label>
                                <p>I send or receive digita currency</p>
                              </div>
                              <div class="single-notification">
                                <label class="switch">
                                  <input type="checkbox" />
                                  <span class="slider round"></span>
                                </label>
                                <p>I send or receive digita currency</p>
                              </div>
                              <div class="single-notification">
                                <label class="switch">
                                  <input type="checkbox" checked />
                                  <span class="slider round"></span>
                                </label>
                                <p>I send or receive digita currency</p>
                              </div>
                              <div class="save-button">
                                <button type="submit">Save</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div class="security-setting">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="notification-heading">
                              <h3>Two-factor Authentication</h3>
                            </div>
                            <div class="single-notification">
                              <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider round"></span>
                              </label>
                              <p>I send or receive digita currency</p>
                            </div>
                            <div class="notification-heading">
                              <h3>Change Password</h3>
                            </div>
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="single-form">
                                  <p>Current Password</p>
                                  <input
                                    type="password"
                                    placeholder="**********"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6"></div>
                              <div class="col-lg-6">
                                <div class="single-form">
                                  <p>New Password</p>
                                  <input
                                    type="password"
                                    placeholder="**********"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="save-button">
                              <button type="submit">Save</button>
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

export default Setting;
