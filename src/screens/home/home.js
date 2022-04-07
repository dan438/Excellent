import React from "react";
import chip from "../../asset/images/chip-img-1.png";
import chip2 from "../../asset/images/chip-img-2.png";
import master from "../../asset/images/master-img.png";
import master2 from "../../asset/images/master-img-2.png";
import Sidebar from "../../components/sidebar";
import "./home.css";

function Home() {
  return (
    <>
      <Sidebar name="Dashboard" headerName="Dashboard" />
      <div class="main-content">
        <div class="transaction-content">
          <div class="container-fluid">
            <div class="row">
              <div class="cards col-lg-12">
                <div class="heading">
                  <h2>Account Summary</h2>
                </div>
                <div class="card-slider row">
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="single-card">
                      <div class="first-card">
                        <div class="chip-area">
                          <div class="balance">
                            <p>Current Balance</p>
                            <span>₦5,756,419.69</span>
                          </div>
                          <div class="chip-img">
                            <img src={chip} alt="images" />
                          </div>
                        </div>
                        <div class="holder">
                          <div class="single-holder">
                            <p>Book Balance:</p>
                            <span>₦15,756,419.69</span>
                          </div>
                          <div class="single-holder">
                            <p>Account Number</p>
                            <span>8051742253</span>
                          </div>
                        </div>
                        <div class="card-number">
                          <p className="pt-2">Annabella Iwobi</p>

                          <div class="master-img">
                            <img src={master} alt="images" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="single-card">
                      <div class="second-card">
                        <div class="chip-area">
                          <div class="balance">
                            <p>Balance</p>
                            <span>₦4,456,489.69</span>
                          </div>
                          <div class="chip-img">
                            <img src={chip2} alt="images" />
                          </div>
                        </div>
                        <div class="holder">
                          <div class="single-holder">
                            <p>Book Balance:</p>
                            <span>₦7,756,419.69</span>
                          </div>
                          <div class="single-holder">
                            <p>Account Number</p>
                            <span>8090912253</span>
                          </div>
                        </div>
                        <div class="card-number">
                          <p className="pt-2">Annabella Iwobi</p>
                          <div class="master-img">
                            <img src={master2} alt="images" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="heading">
                  <h2>Recent Transactions</h2>
                </div>
                <div class="transection-table">
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
                        All Transactions
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
                        Income
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
                        Expense
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
                      <div class="table-responsive">
                        <table>
                          <tr>
                            <th>
                              <p>Description</p>
                            </th>
                            <th>
                              <p>Transaction ID</p>
                            </th>
                            <th>
                              <p>Type</p>
                            </th>
                            <th>
                              <p>Card</p>
                            </th>
                            <th>
                              <p>Date</p>
                            </th>
                            <th>
                              <p>Amount</p>
                            </th>
                            <th>
                              <p>Receipt</p>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-down-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span style={{ color: "#16DBAA" }}>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-down-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span style={{ color: "#16DBAA" }}>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="table-responsive">
                        <table>
                          <tr>
                            <th>
                              <p>Description</p>
                            </th>
                            <th>
                              <p>Transaction ID</p>
                            </th>
                            <th>
                              <p>Type</p>
                            </th>
                            <th>
                              <p>Card</p>
                            </th>
                            <th>
                              <p>Date</p>
                            </th>
                            <th>
                              <p>Amount</p>
                            </th>
                            <th>
                              <p>Receipt</p>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-down-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span style={{ color: "#16DBAA" }}>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-down-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span style={{ color: "#16DBAA" }}>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div class="table-responsive">
                        <table>
                          <tr>
                            <th>
                              <p>Description</p>
                            </th>
                            <th>
                              <p>Transaction ID</p>
                            </th>
                            <th>
                              <p>Type</p>
                            </th>
                            <th>
                              <p>Card</p>
                            </th>
                            <th>
                              <p>Date</p>
                            </th>
                            <th>
                              <p>Amount</p>
                            </th>
                            <th>
                              <p>Receipt</p>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-down-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span style={{ color: "#16DBAA" }}>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-up-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i class="flaticon-down-arrow"></i>
                              <p>Spotify Subscription</p>
                            </td>
                            <td>
                              <p>#12548796</p>
                            </td>
                            <td>
                              <p>Shopping</p>
                            </td>
                            <td>
                              <p>1234 ****</p>
                            </td>
                            <td>
                              <p>28 Jan, 12.30 AM</p>
                            </td>
                            <td>
                              <span style={{ color: "#16DBAA" }}>-₦2,500</span>
                            </td>
                            <td>
                              <a href="#">Download</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          <i class="fas fa-chevron-left"></i>Previous
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Next<i class="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* left-sidebar end  */}
      {/* top-bar start  */}
      {/* top-bar end  */}
      {/* main-content start  */}

      {/* main-content end  */}
    </>
  );
}

export default Home;
