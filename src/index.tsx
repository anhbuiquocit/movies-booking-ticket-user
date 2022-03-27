import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./@movie-ticket/styles/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserLayout } from "./@movie-ticket/layout/userLayout";

ReactDOM.render(
  <React.StrictMode>
    <UserLayout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
