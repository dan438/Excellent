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
import { Routes, Route, Outlet } from "react-router-dom";

function Accounts() {
  return (
    <>
      <Sidebar name="Accounts" headerName="Accounts" />

      {/* top-bar end  */}
      {/* main-content start  */}
      <Outlet />

      {/* main-content end  */}
    </>
  );
}

export default Accounts;
