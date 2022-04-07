import React from "react";
import Sidebar from "../../../components/sidebar";
import MenuList from "../../../components/MenuList";
import { MdContentPaste } from "react-icons/md";
import "./style.css";

function Index() {
  return (
    <div className="main-content">
      <MenuList link="/accounts" />
      {/* option card start */}
      <div className="statement_select py-4 mt-3">
        <div className="ml-4">
          <select>
            <option value=""> Select Account to View Statement</option>
            <option value=""> account 1</option>
            <option value=""> account 2</option>
          </select>
        </div>
      </div>
      <div className="statement_content mt-1">
        {/* show by default */}
        <div className="statement_content_inner">
          <div className="text-center">
            <MdContentPaste size={84} color="#035572" />
          </div>

          <p className="mt-3">
            No account selected. Please select account to view transactions.
          </p>
        </div>
        {/* when account is selected */}
        {/* <div class="col-lg-8">
          <div class="new-card">
            <div class="heading">
              <h2>Add New Card</h2>
            </div>
            <div class="add-card">
              <div class="details">
                <p>
                  Credit Card generally means a plastic card issued by Scheduled
                  Commercial Banks assigned to a Cardholder, with a credit
                  limit, that can be used to purchase goods and services on
                  credit or obtain cash advances.
                </p>
              </div>
              <form action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="single-form">
                      <p>Card Type</p>
                      <input type="text" placeholder="Classic" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="single-form">
                      <p>Name On Card</p>
                      <input type="text" placeholder="My Cards" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="single-form">
                      <p>Card Number</p>
                      <input type="text" placeholder="**** **** **** ****" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="single-form">
                      <p>Expiration Date</p>
                      <input type="date" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="add-btn">
                      <button type="submit">Add Card</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Index;
