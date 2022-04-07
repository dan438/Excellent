import React from "react";
import Sidebar from "../../components/sidebar";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiOutlineAccountBook } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { DiOpenshift } from "react-icons/di";
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiDeutschebank } from "react-icons/si";

function Accounts() {
  return (
    <>
      <div class="main-content">
        <div class="account-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <AiOutlineAccountBook size={38} color="#396AFF" />
                  </div>
                  <div class="text">
                    <p>Account Statement</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <AiOutlineTransaction size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Transaction History</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-three mb-2">
                    <MdManageAccounts size={38} color="#FF82AC" />
                  </div>
                  <div class="text">
                    <p>Statement to Third Party</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-four mb-2">
                    <DiOpenshift size={38} color="#16DBCC" />
                  </div>
                  <div class="text">
                    <p>Open Additional Account</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <MdSystemUpdateAlt size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Update & Upgrade Account</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <RiProfileLine size={38} color="#396AFF" />
                  </div>
                  <div class="text">
                    <p>Profile & Upgrade Account</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-three mb-2">
                    <RiSecurePaymentLine size={38} color="#FF82AC" />
                  </div>
                  <div class="text">
                    <p>Secure Email</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-four mb-2">
                    <SiDeutschebank size={30} color="#16DBCC" />
                  </div>
                  <div class="text">
                    <p>Sachet Banking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main-content end  */}
    </>
  );
}

export default Accounts;
