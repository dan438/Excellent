import React from "react";
import Sidebar from "../../components/sidebar";
import { MdWallpaper } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { MdCable } from "react-icons/md";

function Investment() {
  return (
    <>
      <Sidebar name="investment" headerName="Bills and Payments" />
      {/* top-bar end  */}
      {/* main-content start  */}
      <div class="main-content">
        <div class="investment-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-two mb-2">
                    <MdWallpaper size={38} color="#396AFF" />
                  </div>
                  <div class="text">
                    <p>Airtime & Data Bundle </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-one mb-2">
                    <GiElectric size={38} color="#FFBB38" />
                  </div>
                  <div class="text">
                    <p>Electricity Payment </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-balance-three">
                  <div class="icon bg-three mb-2">
                    <MdCable size={38} color="#FF82AC" />
                  </div>
                  <div class="text">
                    <p> Cable TV </p>
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

export default Investment;
