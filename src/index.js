import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../src/asset/css/bootstrap.min.css";
import "../src/asset/css/all.css";
import "../src/asset/css/dark-mode.css";
import "../src/asset/css/slick.css";
import "../src/asset/css/style.css";
import "../src/asset/font/flaticon.css";
import "../src/asset/css/responsive.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
