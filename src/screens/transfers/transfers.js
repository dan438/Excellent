import React from "react";
import Sidebar from "../../components/sidebar";
import { MdTransferWithinAStation } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { BiCreditCardFront } from "react-icons/bi";

function Transactions() {
  return (
    <>
      <Sidebar name="Transfers" headerName="Transfers" />

      {/* top-bar end 
    < main-content start  */}
      <div class="main-content">
        <div class="transaction-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <MdTransferWithinAStation size={38} color="#396AFF" />
                  </div>
                  <div class="text">
                    <p>Transfer to PristineDivitis </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <AiOutlineBank size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Transfer to Other Banks</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-three mb-2">
                    <MdManageAccounts size={38} color="#FF82AC" />
                  </div>
                  <div class="text">
                    <p>Transfer to Own Account</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-four mb-2">
                    <AiTwotoneMail size={38} color="#16DBCC" />
                  </div>
                  <div class="text">
                    <p>Transfer Via Phone/Email</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <BiCreditCardFront size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Cardless Withdrawal</p>
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

export default Transactions;
