import React from "react";
import Sidebar from "../../components/sidebar";

function Loan() {
  return (
    <>
      <Sidebar name="loan" headerName="Loans" />
      {/* top-bar end 
     main-content start  */}
      <div class="main-content">
        <div class="loans-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <i class="flaticon-user"></i>
                  </div>
                  <div class="text">
                    <p>Personal Loans</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <i class="flaticon-portfolio-black-symbol"></i>
                  </div>
                  <div class="text">
                    <p>Corporate Loans</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-three mb-2">
                    <i class="flaticon-graph"></i>
                  </div>
                  <div class="text">
                    <p>Business Loans</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-four mb-2">
                    <i class="flaticon-service"></i>
                  </div>
                  <div class="text">
                    <p>Custom Loans</p>
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

export default Loan;
