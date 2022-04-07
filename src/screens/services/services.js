import React from "react";
import Sidebar from "../../components/sidebar";
import { FaTradeFederation } from "react-icons/fa";
import { AiFillInsurance } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiInnerSelf } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { MdPeople } from "react-icons/md";

function Services() {
  return (
    <>
      <Sidebar name="service" headerName="Services" />
      {/* top-bar end 
     main-content start  */}
      <div class="main-content">
        <div class="account-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <AiFillInsurance size={38} color="#396AFF" />
                  </div>
                  <div class="text">
                    <p>Insurance</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <FaTradeFederation size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Trade</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-three mb-2">
                    <FaMoneyCheckAlt size={38} color="#FF82AC" />
                  </div>
                  <div class="text">
                    <p>Money Manager</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-four mb-2">
                    <GiInnerSelf size={38} color="#16DBCC" />
                  </div>
                  <div class="text">
                    <p>Self Service</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <GiPayMoney size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Investment</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <MdPeople size={38} color="#396AFF" />
                  </div>
                  <div class="text">
                    <p>Customer Feedback</p>
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

export default Services;
